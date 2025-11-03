document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-button');
    const statusMessage = document.getElementById('copy-status');

    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const configText = button.getAttribute('data-config');
            
            if (!configText) {
                statusMessage.textContent = 'Error: No config data found!';
                statusMessage.style.color = 'red';
                return;
            }

            try {
                // Use the modern clipboard API to copy the text
                await navigator.clipboard.writeText(configText);
                
                // Success feedback
                statusMessage.textContent = '✅ CONFIG COPIED TO CLIPBOARD!';
                statusMessage.style.color = 'var(--text-color)';
                
                // Flash the button
                button.classList.add('copied-flash');
                setTimeout(() => {
                    button.classList.remove('copied-flash');
                }, 500);

            } catch (err) {
                // Fallback for older browsers or if permission is denied
                console.error('Failed to copy text: ', err);
                statusMessage.textContent = 'Failed to copy! Please select and copy manually.';
                statusMessage.style.color = 'orange';
            }

            // Clear the status message after a few seconds
            setTimeout(() => {
                statusMessage.textContent = 'Ready to copy.';
                statusMessage.style.color = 'var(--text-color)';
            }, 3000);
        });
    });
});

// Add a temporary style to the CSS to make the flash effect work
// This should ideally be added to the style.css file for permanence:
/*
.copied-flash {
    background-color: white !important;
    color: var(--bg-color) !important;
}
*/
