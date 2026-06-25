// ============================================
// LA MIE DORÉE - ARTISAN BAKERY SCRIPTS
// ============================================

// ---- CUSTOM CURSOR ----
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
  cursor.style.width = '8px';
  cursor.style.height = '8px';
  cursorRing.style.width = '28px';
  cursorRing.style.height = '28px';
});

document.addEventListener('mouseup', () => {
  cursor.style.width = '12px';
  cursor.style.height = '12px';
  cursorRing.style.width = '36px';
  cursorRing.style.height = '36px';
});

// Hide cursor on non-interactive elements
document.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.classList.contains('add-btn')) {
    cursorRing.style.borderColor = '#b5451b';
  } else {
    cursorRing.style.borderColor = '#c9933e';
  }
});

// ---- NAVIGATION SCROLL ----
const mainNav = document.getElementById('mainNav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
});

// ---- MENU TAB SWITCHING ----
function switchTab(tabName, buttonElement) {
  // Hide all grids
  document.querySelectorAll('.menu-grid').forEach(grid => {
    grid.classList.remove('active');
  });

  // Remove active class from all buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected grid
  const selectedGrid = document.getElementById('tab-' + tabName);
  if (selectedGrid) {
    selectedGrid.classList.add('active');
  }

  // Add active class to clicked button
  buttonElement.classList.add('active');
}

// ---- ADD TO CART ----
function addToCart(itemName) {
  showToast(`${itemName} added to cart!`);
}

// ---- SCROLL TO ORDER ----
function scrollToOrder() {
  const orderSection = document.getElementById('order');
  if (orderSection) {
    orderSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// ---- FORM SUBMISSION ----
function handleFormSubmit(event) {
  event.preventDefault();

  // Get form data
  const form = event.target;
  const formData = new FormData(form);

  // Validate form (basic)
  if (!formData.get('name') || !formData.get('email') || !formData.get('phone')) {
    showToast('Please fill in all required fields.');
    return;
  }

  // Simulate form submission
  console.log('Form Data:', Object.fromEntries(formData));

  // Show success message
  showToast('✓ Pre-order placed successfully! We'll confirm via email.');

  // Reset form
  form.reset();
}

// ---- TOAST NOTIFICATION ----
function showToast(message) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = message;
    toast.classList.add('show');

    // Auto-hide after 3 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

// ---- INTERSECTION OBSERVER FOR REVEAL ANIMATION ----
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll('.reveal').forEach((element) => {
  observer.observe(element);
});

// ---- PAGE LOAD ANIMATIONS ----
window.addEventListener('load', () => {
  // Add any page load effects here
  console.log('La Mie Dorée website loaded successfully!');
});

// ---- KEYBOARD NAVIGATION ----
document.addEventListener('keydown', (e) => {
  // ESC key to close any modals or overlays
  if (e.key === 'Escape') {
    const toast = document.getElementById('toast');
    if (toast && toast.classList.contains('show')) {
      toast.classList.remove('show');
    }
  }

  // Enter key on buttons
  if (e.key === 'Enter' && (e.target.tagName === 'BUTTON' || e.target.tagName === 'A')) {
    e.target.click();
  }
});

// ---- SMOOTH SCROLL FOR ANCHOR LINKS ----
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

console.log('Scripts loaded successfully');
