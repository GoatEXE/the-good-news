// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Contact form handling
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Basic validation
  if (!name || !email || !message) {
    alert('Please fill out all fields');
    return;
  }
  
  // Here you would typically send the form data to your server
  // For demonstration, we'll just show an alert
  alert(`Thank you for your message, ${name}! We'll get back to you soon.`);
  
  // Reset the form
  this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// Add to cart functionality
document.querySelectorAll('.merch-card .btn').forEach(button => {
  button.addEventListener('click', function() {
    const productName = this.closest('.merch-card').querySelector('.card-title').textContent;
    const productPrice = this.closest('.merch-card').querySelector('.card-text').textContent;
    
    alert(`Added to cart: ${productName} - ${productPrice}`);
    // Here you would typically update a cart object and UI
  });
});

// Initialize any Bootstrap tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
if (tooltipTriggerList.length > 0) {
  tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

// Mobile menu collapse on click (for better UX on mobile)
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');
const bsCollapse = navbarCollapse ? new bootstrap.Collapse(navbarCollapse, {toggle: false}) : null;

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 992 && bsCollapse && navbarCollapse.classList.contains('show')) {
      bsCollapse.toggle();
    }
  });
});