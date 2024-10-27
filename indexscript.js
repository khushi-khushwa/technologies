document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('form');
    
    // Get form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('comment-message');
  
    // Add event listener to the form on submit
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      
      // Simple validation for empty fields
      if (!nameInput.value || !emailInput.value || !subjectInput.value || !phoneInput.value || !messageInput.value) {
        alert('All fields are required');
        return;
      }
      
      // Log the form data to console or handle it
      console.log({
        name: nameInput.value,
        email: emailInput.value,
        subject: subjectInput.value,
        phone: phoneInput.value,
        message: messageInput.value
      });
  
      // Reset the form after submission
      form.reset();
      alert('Form submitted successfully');
    });
  });
  