
document.addEventListener('DOMContentLoaded', () => {
 
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }


    const lastModSpan = document.getElementById('lastModified');
    if (lastModSpan) {
        lastModSpan.textContent = document.lastModified;
    }
});