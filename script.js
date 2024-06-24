// script.js

// Add smooth scrolling to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Form validation for contact form
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
      // Send form data to server or perform other actions
      console.log('Form submitted successfully!');
    } else {
      alert('Please fill in all fields!');
    }
  });
  
  // Reveal sections as they come into view
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.addEventListener('intersectionObserver', function() {
      section.classList.add('reveal');
    });
  });
  
  // Add animation effects to sections
  const animationElements = document.querySelectorAll('.animate');
  animationElements.forEach(element => {
    element.addEventListener('animationend', function() {
      element.classList.remove('animate');
    });
  });