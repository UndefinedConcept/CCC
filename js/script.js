document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('.accordion-section input[type="radio"]');
    // only one dropdown at a time
    let lastChecked = null;

    radios.forEach(radio => {
        radio.addEventListener('click', function (e) {
            if (lastChecked === this) {
                this.checked = false;
                lastChecked = null;
                e.stopPropagation();
            } else {
                lastChecked = this;
            }
        });
    });
});