// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
    // Get the form element
    const form = document.querySelector('.get-touch-form');
    
    // Get input fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('comment-message');
    
    // Form submit event listener
    form.addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent form submission
  
      // Validate form inputs
      if (!nameInput.value || !emailInput.value || !subjectInput.value || !phoneInput.value || !messageInput.value) {
        alert('All fields must be filled out');
      } else {
        // Get values from inputs
        const formData = {
          name: nameInput.value,
          email: emailInput.value,
          subject: subjectInput.value,
          phone: phoneInput.value,
          message: messageInput.value
        };
  
        // Log the form data or send it to a server
        console.log('Form Submitted:', formData);
        
        // Reset the form after successful submission
        form.reset();
        alert('Form submitted successfully');
      }
    });
  });
  