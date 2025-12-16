document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const siteHeader = document.querySelector('.site-header');

    if (menuToggle && siteHeader) {
        menuToggle.addEventListener('click', function() {
            siteHeader.classList.toggle('open');

            if (siteHeader.classList.contains('open')) {
                menuToggle.textContent = 'Zavřít';
            } else {
                menuToggle.textContent = 'Menu';
            }
        });
    }
});
