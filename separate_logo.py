from PIL import Image
import numpy as np

def separate_logo_parts(input_path, output_icon_path):
    img = Image.open(input_path).convert("RGBA")
    
    # Get bounding box of all content
    bbox = img.getbbox()
    if not bbox:
        print("Image is empty")
        return
        
    # Crop to content
    img = img.crop(bbox)
    width, height = img.size
    
    # Analyze row density to find the gap between Icon (Top) and Text (Bottom)
    # We look for a horizontal band of transparency
    pixels = np.array(img)
    alpha = pixels[:, :, 3]
    
    # Row transparency sums (0 = fully transparent row)
    row_density = np.sum(alpha, axis=1)
    
    # Find a gap in the bottom half? Or just scan from middle?
    # The text is likely in the bottom 30%.
    # Let's verify if there is a clear gap.
    
    split_y = -1
    
    # We expect: [Content (Hand)] -> [Gap] -> [Content (Text)]
    # Look for a gap (density < threshold) after finding some content.
    
    in_content = False
    gap_start = -1
    
    for y in range(height):
        density = row_density[y]
        
        if density > 0:
            in_content = True
            # If we were in a gap, and found content again, maybe that was the split?
            # But the Hand itself might have gaps? (Unlikely horizontal full gap)
            # The gap between Icon and Text should be distinct.
            # Let's assume the Hand is the big upper chunk.
            pass
        else:
            if in_content:
                # We found a gap after content.
                # Is this the gap between Hand and Text?
                # Check if there is more content below.
                if np.sum(row_density[y+1:]) > 0:
                    # Yes, there is more content (Text) below.
                    # This is likely the split point.
                    # We want the LAST significant gap if there are multiple? 
                    # Or the one around 60-80% height?
                    # Let's take this one if we are past, say, 40% height.
                    if y > height * 0.4:
                        split_y = y
                        break
    
    if split_y != -1:
        print(f"Found split at Y={split_y}")
        # Crop Top (Icon)
        icon = img.crop((0, 0, width, split_y))
        # Trim icon
        icon_bbox = icon.getbbox()
        if icon_bbox:
            icon = icon.crop(icon_bbox)
            icon.save(output_icon_path)
            print(f"Saved Icon to {output_icon_path}")
    else:
        print("No split gap found. Saving cropped original as icon fallback.")
        img.save(output_icon_path)

if __name__ == "__main__":
    separate_logo_parts(
        r"c:\Users\simmo\Downloads\Jaclyn\project\public\images\logo.png",
        r"c:\Users\simmo\Downloads\Jaclyn\project\public\images\logo-icon.png"
    )
