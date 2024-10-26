document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                checkboxes.forEach(cb => {
                    if (cb !== this) cb.checked = false;
                });
            }
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const selectedCheckbox = Array.from(checkboxes).find(cb => cb.checked);

        const messages = [];

       
        if (!name) {
            messages.push('Please enter your name.');
        }

        
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email || !emailPattern.test(email)) {
            messages.push('Please enter a valid email address.');
        }

       
        if (!selectedCheckbox) {
            messages.push('Please select one newsletter preference.');
        }

        
        if (messages.length > 0) {
            alert(messages.join('\n'));
            return;
        }

        
        alert('Thank you! Your form has been submitted successfully.');

        
        form.reset();
    });
});
