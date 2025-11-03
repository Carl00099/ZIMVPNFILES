document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. NETFLIX STYLE LOADER CONTROL ---
    const loader = document.getElementById('site-loader');
    
    // Set a delay (e.g., 2 seconds) for the animation to play before hiding the loader
    setTimeout(() => {
        if (loader) {
            loader.classList.add('loader-hidden');
            // Optional: Remove background filter after loader is gone (if applied)
            document.body.style.filter = 'blur(5px)'; 
        }
    }, 2000); // 2000ms = 2 seconds

    
    // --- 2. NPV Cloud Copy Functionality ---
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
