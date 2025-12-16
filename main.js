document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const siteHeader = document.querySelector('.site-header');

    // --- Logika pro rozbalení menu ---
    if (siteHeader) {
        // Ponecháno pro KLIK (pro mobilní zařízení a přístupnost)
        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                siteHeader.classList.toggle('open');
                if (siteHeader.classList.contains('open')) {
                    menuToggle.textContent = 'Zavřít';
                } else {
                    menuToggle.textContent = 'Menu';
                }
            });
        }

        // Nová logika pro NAJETÍ MYŠI (pro desktopy)
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (!isTouchDevice) {
            siteHeader.addEventListener('mouseenter', function() {
                siteHeader.classList.add('open');
                if(menuToggle) menuToggle.textContent = 'Zavřít';
            });

            siteHeader.addEventListener('mouseleave', function() {
                siteHeader.classList.remove('open');
                if(menuToggle) menuToggle.textContent = 'Menu';
            });
        }
    }

    // --- Logika pro změnu stylu hlavičky při rolování ---
    const heroSection = document.querySelector('.hero');
    const handleHeaderStyle = () => {
        if (siteHeader && heroSection) {
            const heroHeight = heroSection.offsetHeight;
            const headerHeight = siteHeader.offsetHeight;

            if (window.scrollY > heroHeight - headerHeight) {
                siteHeader.classList.add('site-header--solid');
            } else {
                siteHeader.classList.remove('site-header--solid');
            }
        }
    };

    window.addEventListener('scroll', handleHeaderStyle);
    handleHeaderStyle();
});
