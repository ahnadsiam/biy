document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');
    const requiredFields = form.querySelectorAll('[required]');
  
    form.addEventListener('submit', function (event) {
      let isValid = true;
  
      requiredFields.forEach(function (field) {
        const errorMessage = field.nextElementSibling;
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = 'red';
          if (errorMessage) {
            errorMessage.textContent = 'This field is required.';
            errorMessage.style.color = 'red';
          }
        } else {
          field.style.borderColor = '#ccc';
          if (errorMessage) {
            errorMessage.textContent = '';
          }
        }
      });
  
      if (!isValid) {
        event.preventDefault();
        alert('Please fill out all required fields.');
      }
    });
  });
  
   
  