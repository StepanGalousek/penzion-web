document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const siteHeader = document.querySelector('.site-header');

    // Původní logika pro přepínání mobilního menu
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

    // --- Nová logika pro změnu stylu hlavičky při rolování ---
    const heroSection = document.querySelector('.hero');

    const handleHeaderStyle = () => {
        if (siteHeader && heroSection) {
            const heroHeight = heroSection.offsetHeight;
            const headerHeight = siteHeader.offsetHeight;

            // Změníme styl, když vršek stránky odroluje za výšku úvodní sekce,
            // zmenšenou o výšku samotné hlavičky. Přechod tak bude plynulý.
            if (window.scrollY > heroHeight - headerHeight) {
                siteHeader.classList.add('site-header--solid');
            } else {
                siteHeader.classList.remove('site-header--solid');
            }
        }
    };

    // Přidáme posluchač události pro rolování
    window.addEventListener('scroll', handleHeaderStyle);

    // Spustíme funkci i při načtení stránky pro případ, že je již odrolovaná
    handleHeaderStyle();
});
