from PIL import Image
import numpy as np

def remove_background(input_path, output_path, tolerance=30):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    # Sample top-left pixel
    bg_color = img.getpixel((0, 0))[:3]
    
    newData = []
    
    # Heuristic: Simple Euclidean distance from bg_color
    # This acts like a "Magic Wand" with tolerance
    for item in datas:
        pixel = item[:3]
        dist = sum((p - b) ** 2 for p, b in zip(pixel, bg_color)) ** 0.5
        
        if dist < tolerance:
            newData.append((255, 255, 255, 0)) # Transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved to {output_path}")

if __name__ == "__main__":
    remove_background(
        r"c:\Users\simmo\Downloads\Jaclyn\project\public\images\hero-final-solid.png",
        r"c:\Users\simmo\Downloads\Jaclyn\project\public\images\hero-true-cutout.png"
    )
