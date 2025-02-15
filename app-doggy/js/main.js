
document.querySelectorAll('#currentYear').forEach(element => {
    element.textContent = new Date().getFullYear();
});