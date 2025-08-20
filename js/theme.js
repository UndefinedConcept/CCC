// CSS for theme is in ./css/style.css

const theme = localStorage.getItem('theme') || 'light';
const checkbox = document.getElementById('toggle-theme');

if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    checkbox.checked = true;
}

checkbox.addEventListener("change", () => {
    document.body.classList.toggle('dark-mode');
    const newTheme = checkbox.checked ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
});