# La Mie Dorée — Artisan Bakery Website

A modern, responsive bakery website designed to showcase artisan products, engage customers, and simplify online pre-ordering.

## 🎨 Features

- **Modern Design**: Elegant, sophisticated aesthetic with a warm color palette inspired by French bakeries
- **Responsive Layout**: Fully optimized for desktop, tablet, and mobile devices
- **Custom Cursor**: Interactive custom cursor element with hover effects
- **Smooth Animations**: Scroll-triggered reveal animations and floating elements
- **Interactive Menu Tabs**: Switch between Breads, Pastries, and Sweets categories
- **Weekly Specials**: Showcase of limited-edition items with daily rotation
- **Pre-Order Form**: Easy-to-use interface for customer orders with time selection
- **Accessibility**: Focus states, keyboard navigation, and semantic HTML
- **Performance Optimized**: Clean, organized code structure for maintainability

## 📁 Project Structure

```
bakery-project/
├── index.html           # Main HTML page (entry point)
├── css/
│   └── styles.css      # All CSS styles (organized & responsive)
├── js/
│   └── script.js       # Interactive functionality
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kerina-07/bakery-project.git
cd bakery-project
```

2. Open the website:
```bash
# Option 1: Double-click index.html
# Option 2: Use a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000 in your browser
```

## 📝 File Descriptions

### `index.html`
- Complete HTML structure with semantic markup
- All page sections: hero, menu, about, specials, testimonials, order form, footer
- Links to external stylesheets and scripts
- Form inputs with proper labels and validation

### `css/styles.css`
- All styling rules organized by section
- CSS custom properties (variables) for consistent theming
- Flexbox and Grid layouts
- Animation keyframes for smooth transitions
- **Responsive media queries** for tablets (1024px) and mobile (640px)
- Accessibility features: focus states for keyboard navigation
- **Fixed issues from original file**:
  - Removed duplicate `display` property
  - Removed invalid `group: true` CSS rule
  - Improved color contrast and accessibility
  - Added comprehensive focus states on all interactive elements

### `js/script.js`
- Custom cursor tracking and interaction
- Navigation scroll detection
- Menu tab switching functionality
- Add to cart notifications
- Form submission handling
- Intersection Observer for scroll animations
- Keyboard navigation support
- Smooth scroll anchors

## 🎯 Sections

### Hero Section
Eye-catching introduction with animated SVG bread illustration

### About Section
Story of the bakery with stats (years in business, fermentation time, organic ingredients)

### Menu
Three-category menu system (Breads, Pastries, Sweets) with add-to-cart functionality

### Weekly Specials
Daily rotating special items with pricing

### Testimonials
Customer reviews with star ratings

### Order Form
Pre-order interface with date/time selection and special requests

### Footer
Links, hours, contact information

## 🎨 Color Palette

```css
--cream:      #faf5eb
--warm:       #f0e6cc
--gold:       #c9933e
--gold-light: #e8b96a
--brown:      #3d2b1f
--brown-mid:  #7a4f2e
--rust:       #b5451b
--sage:       #8a9a7b
--off-white:  #fefcf7
```

## ✨ Improvements Made

1. **File Organization**: Separated HTML, CSS, and JavaScript into dedicated files
2. **Bug Fixes**: 
   - Removed duplicate CSS properties
   - Removed invalid CSS rules
3. **Mobile Responsiveness**: Added comprehensive media queries for tablets and mobile
4. **Accessibility**: 
   - Added focus states to all interactive elements
   - Improved keyboard navigation
   - Semantic HTML structure
5. **Code Quality**:
   - Better organized CSS sections with clear comments
   - Removed empty CSS rules
   - Consistent formatting and indentation
6. **Performance**: 
   - Cleaner code structure
   - Optimized animations

## 🔧 Customization

### Change Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
  --cream: #faf5eb;    /* Change primary background */
  --gold: #c9933e;     /* Change accent color */
  --brown: #3d2b1f;    /* Change text color */
  /* ... etc */
}
```

### Add Menu Items
Edit `index.html` and add new `.menu-card` elements in the appropriate grid

### Update Hours/Contact
Edit the footer section in `index.html`

## 📱 Responsive Breakpoints

- **Desktop**: 1025px and above
- **Tablet**: 1024px and below
- **Mobile**: 640px and below

## ♿ Accessibility Features

- Focus outlines on all interactive elements
- Semantic HTML (proper use of `<nav>`, `<section>`, `<form>`, etc.)
- Form labels properly associated with inputs
- Keyboard-navigable menu
- Color contrast ratios meet WCAG standards
- Smooth scroll behavior for reduced motion support

## 🐛 Known Issues & Future Enhancements

- Form submission currently shows a toast notification (no backend integration)
- Custom cursor may not work on all mobile devices
- Consider adding:
  - Backend API integration for orders
  - Image optimization
  - Dark mode toggle
  - Multiple language support
  - Analytics tracking

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is personal and available as-is.

## 👨‍💻 Author

**kerina-07** - [GitHub Profile](https://github.com/kerina-07)

---

**Last Updated**: June 25, 2026

Handcrafted with ❤ and flour 🥐
