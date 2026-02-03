from PIL import Image
import math

def remove_background_aggressive(input_path, output_path, match_color=None, tolerance=60):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    # If no match color provided, sample top-left
    if match_color is None:
        match_color = img.getpixel((0, 0))[:3]
    
    new_data = []
    
    # R, G, B of background
    br, bg, bb = match_color
    
    for item in datas:
        r, g, b, a = item
        # Euclidean distance
        dist = math.sqrt((r - br)**2 + (g - bg)**2 + (b - bb)**2)
        
        if dist < tolerance:
            # Full transparency for close matches
            new_data.append((255, 255, 255, 0))
        elif dist < tolerance + 20:
            # Edge feathering
            factor = (dist - tolerance) / 20.0
            new_alpha = int(255 * factor)
            new_data.append((r, g, b, new_alpha))
        else:
            # Keep original
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Crop to content
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Saved aggressive cutout to {output_path}")

if __name__ == "__main__":
    remove_background_aggressive(
        r"c:\Users\simmo\Downloads\Jaclyn\project\public\images\hero-final-solid.png",
        r"c:\Users\simmo\Downloads\Jaclyn\project\public\images\hero-ultimate-cutout.png",
        tolerance=50 # Aggressive tolerance
    )
