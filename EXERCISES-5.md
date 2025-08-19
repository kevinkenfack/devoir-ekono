# 🎨 Exercise 1 - Loading Animation with Blur Effect

> ⚠️ **Warning**: This exercise requires precision and creativity. You must create a smooth animation and follow the technical instructions exactly.

## 🎯 Objective:
Create a loading animation with a progressive blur effect on a background image and a percentage counter that gradually disappears.

---

## ✅ What the page should do:

1. **Display a background image** that starts very blurry (high blur)
2. **Display loading text** that starts at "0%" and counts up to "100%"
3. **Progressive animation:**
   - The percentage increases from 0% to 100%
   - The image becomes less and less blurry until it's sharp
   - The percentage text becomes more and more transparent until it disappears
4. **At the end:** Sharp image, invisible text, animation complete

---

## 🖼️ Image to use:
**Required URL:** `https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80`

---

## 🏷️ **MANDATORY CLASSES AND IDS** (TO BE RESPECTED EXACTLY):

### HTML - Required classes/elements:
- `class="background-image"`: for the element containing the background image
- `class="loading-percentage"`: for the percentage text
- **Minimal HTML structure** with only these 2 elements

### CSS - Required classes:
- `.background-image`: background image style (positioning, size, initial blur)
- `.loading-percentage`: loading text style (font, color, position)
- **Important CSS properties to use:**
  - `filter: blur()` for the blur effect
  - `opacity` for transparency
  - Absolute positioning for the background image

### JavaScript - Required functionalities:
- Use `setInterval()` to create the animation
- Modify `innerText` for the percentage
- Modify `style.filter` for blur
- Modify `style.opacity` for transparency
- **Smooth animation** lasting approximately 3 seconds

---

## 📂 Expected files:

### 📁 Expected structure:
```
exercise-1/
├── index.html
├── style.css
└── script.js
```

### 📄 Required content:

#### `index.html` must contain:
```html
<!-- Element with class="background-image" for the background image -->
<!-- Element with class="loading-percentage" for the loading text -->
```

#### `style.css` must:
- Use the provided image as background
- Center the loading text on screen
- Apply high initial blur to the image (about 30px)
- Style the text with large, visible font
- **Bonus:** Import a Google Fonts font

#### `script.js` must:
- Use `querySelector()` to retrieve elements
- Create a loop with `setInterval()`
- Make 3 properties evolve simultaneously:
  1. The displayed percentage (0% → 100%)
  2. The image blur (30px → 0px)
  3. The text opacity (100% → 0%)
- Stop the animation with `clearInterval()` at 100%

---

## 🔍 **TECHNICAL SPECIFICATIONS**:

### ⏱️ **Animation:**
- **Total duration:** approximately 3 seconds
- **Interval:** every 30ms (recommended)
- **Progression:** smooth and regular

### 📐 **Start and end values:**
- **Percentage:** 0% → 100%
- **Blur:** 30px → 0px
- **Text opacity:** 1 (100%) → 0 (0%)

### 🎨 **Visual style:**
- Full-screen background image
- Centered text, large size (50px minimum)
- Text color: white or contrasting with the image

---

## ✨ Bonus (optional):
- Add a stylish Google Fonts font
- Make the image slightly overflow the edges (avoid borders during blur)
- Add additional CSS transitions
- Create a custom calculation function to convert values

---

## 🔍 **VERIFICATION POINTS**:
- ✅ Smooth animation from 0% to 100%
- ✅ Image that progressively becomes sharp
- ✅ Text that gradually disappears
- ✅ Correct use of `setInterval()` and `clearInterval()`
- ✅ CSS classes exactly as requested
- ✅ Clean and commented JavaScript code

---

## 🚀 Expected deliverable

1. Create an `exercise-1` folder and put it in exercises-html-css-js-stage-4
2. Use exactly the image provided in the instructions
3. Respect the requested classes and structure
4. Test that the animation is smooth and ends correctly
5. **IMPORTANT:** The animation must be synchronized (all 3 effects evolve together)
6. Compress as `.zip` and send

---

## 💡 **TECHNICAL TIPS**:

### For progressive blur:
```css
filter: blur(30px); /* Maximum at the beginning */
filter: blur(0px);   /* Minimum at the end */
```

### For transparency:
```css
opacity: 1; /* Visible at the beginning */
opacity: 0; /* Invisible at the end */
```

### For the background image:
- Use `background: url()` in CSS
- Make sure it covers the entire screen
- Think about `absolute` positioning

---

> 🕒 Estimated time: 2-3 days  
> ⚠️ **IMPORTANT REMINDER**: This time, focus on the smoothness of the animation and synchronization of effects. The goal is to create an immersive visual experience!