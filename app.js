document.addEventListener("DOMContentLoaded", () => {
    const logoDesktop = document.getElementById("logo-desktop");
    const logoMobile = document.getElementById("logo-mobile");
    
    logoDesktop.style.opacity = "1";
    logoMobile.style.opacity = "1";

    const hideLogos = () => {
        logoDesktop.style.opacity = "0";
        logoMobile.style.opacity = "0";
    };

    const showLogos = () => {
        logoDesktop.style.opacity = "1";
        logoMobile.style.opacity = "1";
    };
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
});
