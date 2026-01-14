document.addEventListener('DOMContentLoaded', function () {
    // -----------------------------------------------------
    // Scroll Restoration kezelése
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // -----------------------------------------------------
    // Hamburger menü funkcionalitás
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');

    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active'); 
        });

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
    // Smooth scroll logika
    const scrollOffset = 120; // Itt hagytam a 120-as értéket

    function performScrollTo(targetElement, offset, behavior = "smooth") {
        if (!targetElement) return;

        let topPosition;
        if (targetElement === document.documentElement) {
            topPosition = 0;
        } else {
            topPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
        }

        window.scrollTo({
            top: topPosition,
            behavior: behavior
        });

        if (mobileNav && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    }

    // 1. Kattintások kezelése az aktuális oldalon
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.hostname !== window.location.hostname || this.pathname !== window.location.pathname) {
                return;
            }

            e.preventDefault();
            const targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetId === '#home' || targetId === '#') {
                targetElement = document.documentElement;
            }

            performScrollTo(targetElement, scrollOffset, "smooth");
        });
    });

    // 2. ÚJ: Másik oldalról érkezés kezelése (pl. index.html#about)
    if (window.location.hash) {
        // Kis késleltetés, hogy a böngésző alapértelmezett ugrása után mi korrigálhassunk
        setTimeout(function() {
            const targetId = window.location.hash;
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                performScrollTo(targetElement, scrollOffset, "smooth");
            }
        }, 200); // 200ms biztonsági tartalék a teljes betöltődéshez
    }

    // -----------------------------------------------------
    // A képváltó slider JavaScriptje
    const sliderImages = document.querySelectorAll('.slider-image');
    let currentImageIndex = 0;

    function showNextImage() {
        if (sliderImages.length === 0) return;
        sliderImages[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
        sliderImages[currentImageIndex].classList.add('active');
    }

    if (sliderImages.length > 1) {
        if (!document.querySelector('.slider-image.active')) {
            sliderImages[0].classList.add('active');
        }
        setInterval(showNextImage, 3500);
    }
});