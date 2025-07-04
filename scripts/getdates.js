// scripts/getdates.js
// Script to dynamically update the current year and last modified date in the footer

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    const yearSpan = document.getElementById('currentyear');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = currentYear;
    }

    // Set last modified date
    const lastModSpan = document.getElementById('lastModified');
    if (lastModSpan) {
        lastModSpan.textContent = document.lastModified;
    }
});