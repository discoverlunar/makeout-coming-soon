(function () {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const logos = document.querySelectorAll('.js-logos');

    const hideLogos = () => {
        setOpacityOfLogos('0');
    };

    const showLogos = () => {
        setOpacityOfLogos('1');
    };

    const setOpacityOfLogos = (value) => {
        logos.forEach(logo => {
            logo.style.opacity = value;
        });
    }

    const handleTimings = () => {
        setTimeout(hideLogos, 2000);
        setTimeout(showLogos, 9000);
        setTimeout(hideLogos, 11000);
        setTimeout(showLogos, 18000);
        setTimeout(hideLogos, 20000);
        setTimeout(showLogos, 28000);
        setTimeout(hideLogos, 31000);
    };

    handleTimings();
    setInterval(handleTimings, 28000);
})();
