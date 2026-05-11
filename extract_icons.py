import cv2
import numpy as np
import os

# Create directory
os.makedirs('public/images/icons', exist_ok=True)

# Load image (including alpha channel)
img = cv2.imread('Logos.png', cv2.IMREAD_UNCHANGED)

# Extract alpha channel to find objects
if img.shape[2] == 4:
    alpha = img[:, :, 3]
else:
    # If no alpha, threshold the image (assuming white bg)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    _, alpha = cv2.threshold(gray, 240, 255, cv2.THRESH_BINARY_INV)

# Find contours
contours, _ = cv2.findContours(alpha, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Sort contours by area, get largest 7
contours = sorted(contours, key=cv2.contourArea, reverse=True)[:7]

# Sort left-to-right, top-to-bottom or just save them
# Let's save them as icon_1.png to icon_7.png
for i, c in enumerate(contours):
    x, y, w, h = cv2.boundingRect(c)
    # add a little padding
    pad = 5
    x = max(0, x-pad)
    y = max(0, y-pad)
    w = min(img.shape[1]-x, w+2*pad)
    h = min(img.shape[0]-y, h+2*pad)
    
    icon = img[y:y+h, x:x+w]
    cv2.imwrite(f'public/images/icons/icon_{i+1}.png', icon)
    print(f"Saved icon_{i+1}.png: {w}x{h}")
