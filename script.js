// Loading animation for 5 seconds with GSAP
window.addEventListener("load", () => {
    gsap.to("#loader", { opacity: 0, duration: 1, delay: 4, onComplete: () => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").classList.remove("hidden");

        // Sequential animations for elements on page load
        gsap.from(".animate", { 
            opacity: 0, 
            y: 50, 
            duration: 1, 
            stagger: 0.3, 
            ease: "power2.out" 
        });

        // Button pulse effect
        gsap.to("button", {
            scale: 1.1, 
            duration: 0.8, 
            yoyo: true, 
            repeat: -1,
            ease: "power1.inOut"
        });

        // Box rotation animation
        gsap.to(".box", { 
            rotation: 360, 
            duration: 5, 
            repeat: -1, 
            ease: "linear"
        });

        // Circle pulsing animation
        gsap.to(".circle", { 
            scale: 1.2, 
            duration: 1, 
            yoyo: true, 
            repeat: -1, 
            ease: "power1.inOut" 
        });
    }});
});
