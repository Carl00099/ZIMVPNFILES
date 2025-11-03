   document.addEventListener('DOMContentLoaded', () => {
    
    // NPV Cloud Copy Functionality
    const copyButtons = document.querySelectorAll('.copy-button');
    const statusMessage = document.getElementById('copy-status');

    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const configText = button.getAttribute('data-config');
            
            if (!configText) {
                statusMessage.textContent = 'SYSTEM ERROR: CONFIG DATA NOT FOUND.';
                statusMessage.style.color = 'red';
                return;
            }

            try {
                // Use the modern clipboard API
                await navigator.clipboard.writeText(configText);
                
                // Success feedback
                statusMessage.textContent = `✅ [ ${configText.substring(0, 20)}... ] COPIED!`;
                statusMessage.style.color = 'var(--text-color)';
                
                // Reset status after delay
                setTimeout(() => {
                    statusMessage.textContent = 'System Ready.';
                }, 2000);

            } catch (err) {
                // Fallback for failed copy
                statusMessage.textContent = 'ACCESS DENIED: MANUAL COPY REQUIRED.';
                statusMessage.style.color = 'orange';
            }
        });
    });
});
