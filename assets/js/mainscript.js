document.addEventListener('DOMContentLoaded', function () {
    // -----------------------------------------------------
    // Scroll Restoration kezelése (megakadályozza az ugrálást újratöltéskor)
    // Ez kulcsfontosságú: megakadályozza, hogy a böngésző emlékezzen az utolsó görgetési pozícióra.
    // Ez biztosítja, hogy CTRL+F5-re az oldal tetején maradjon.
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // -----------------------------------------------------
    // Hamburger menü funkcionalitás
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuBtn && mobileNav) {
        // Menü nyitása/zárása gombnyomásra
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Menü bezárása, ha kint kattintanak vagy menü linkre kattintanak
        document.addEventListener('click', (event) => {
            const isClickInsideNav = mobileNav.contains(event.target);
            const isClickOnBtn = mobileMenuBtn.contains(event.target);
            if (!isClickInsideNav && !isClickOnBtn && mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }

    // -----------------------------------------------------
    // Smooth scroll logika belső horgony linkekhez
    const scrollOffset = 80; // Pixelek száma, amennyivel feljebb áll meg a célpozícióhoz képest

    // Segédfüggvény a görgetéshez, opcionális smooth viselkedéssel
    function performScrollTo(targetElement, offset, behavior = "smooth") {
        if (!targetElement) return;

        let topPosition;
        if (targetElement === document.documentElement) { // Ha a #home vagy #
            topPosition = 0;
        } else {
            topPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        }

        window.scrollTo({
            top: topPosition,
            behavior: behavior // Lehet "smooth" vagy "auto"
        });

        // Menü bezárása scroll után, ha nyitva volt
        if (mobileNav && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    }

    // Kezeli a belső horgony linkekre kattintást (pl. #about)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Ne kezelje azokat a linkeket, amik más HTML fájlra mutatnak
            // vagy a mobil menü gombot
            if (this.hostname !== window.location.hostname || this.pathname !== window.location.pathname) {
                return;
            }

            e.preventDefault(); // Megakadályozza az alapértelmezett, azonnali ugrást

            const targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetId === '#home' || targetId === '#') {
                targetElement = document.documentElement; // A dokumentum teteje
            }

            performScrollTo(targetElement, scrollOffset, "smooth"); // Itt smooth scroll
        });
    });


    // Smooth scroll on page load if URL contains a hash (pl. index.html#about)
    // Próbáljuk meg többször is, ha elsőre nem található a hash elem (mobilon lassabb lehet)
    function smoothScrollToHash(retries = 3, delay = 300) {
        if (window.location.hash && window.location.hash.length > 1) {
            const targetId = window.location.hash;
            let targetElement = document.querySelector(targetId);
            const scrollOffset = 80;
            if (targetElement) {
                let topPosition;
                if (targetElement === document.documentElement) {
                    topPosition = 0;
                } else {
                    topPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - scrollOffset;
                }
                window.scrollTo({
                    top: topPosition,
                    behavior: "smooth"
                });
            } else if (retries > 0) {
                setTimeout(function () {
                    smoothScrollToHash(retries - 1, delay);
                }, delay);
            }
        }
    }
    setTimeout(function () { smoothScrollToHash(3, 300); }, 300);

    // A képváltó slider JavaScriptje (ha van ilyen a index.html-ben)
    const sliderImages = document.querySelectorAll('.slider-image');
    let currentImageIndex = 0;

    function showNextImage() {
        if (sliderImages.length === 0) return;
        sliderImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
        sliderImages[currentImageIndex].classList.add('active');
    }

    // Indítsa el az automatikus váltást 3 másodpercenként, ha van slider
    if (sliderImages.length > 1) {
        // Kezdetben állítsa be az első képet aktívnak, ha még nincs
        if (!document.querySelector('.slider-image.active')) {
            sliderImages[0].classList.add('active');
        }
        setInterval(showNextImage, 3500);
    }
});