
gsap.registerPlugin(ScrollTrigger);

const hero = gsap.timeline();

hero.from(".nav-logo", {
    y: -30,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})
.from(".hrefs", {
    y: -20,
    opacity: 0,
    duration: 0.7,
    stagger: 0.15,
    ease: "power2.out"
}, "-=0.6")
.from(".about-head1", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
}, "-=0.3")
.from(".about-para1", {
    y: 25,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
}, "-=0.6");

gsap.from(
    [".about-para2", ".about-head2", ".about-para3"],
    {
        scrollTrigger: {
            trigger: ".section2",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out"
    }
);

gsap.from(".about-img1", {
    scrollTrigger: {
        trigger: ".img-con",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.25,
    ease: "power3.out"
});

gsap.from(".designs", {
    scrollTrigger: {
        trigger: ".img-con",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
});

gsap.from(".about-head3", {
    scrollTrigger: {
        trigger: ".designs",
        start: "top 85%",
        toggleActions: "play none none reverse"
    },
    y: 25,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".frame-img", {
    scrollTrigger: {
        trigger: ".about-sec3",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    x: -70,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".front-img", {
    scrollTrigger: {
        trigger: ".about-sec3",
        start: "top 75%",
        toggleActions: "play none none reverse"
    },
    x: 70,
    y: 35,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power3.out"
});

gsap.from(
    [".about-para4", ".about-para5", ".about-para6"],
    {
        scrollTrigger: {
            trigger: ".text-con1",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power2.out"
    }
);



gsap.from(".about-para7", {
    scrollTrigger: {
        trigger: ".background",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 35,
    opacity: 0,
    duration: 1.1,
    ease: "power3.out"
});


gsap.from(".sec-img4", {
    scrollTrigger: {
        trigger: ".sec-img4",
        start: "top 85%",
        toggleActions: "play none none reverse"
    },
    y: 45,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
});


gsap.from(
    [".about-head4", ".about-para8", ".about-btn"],
    {
        scrollTrigger: {
            trigger: ".about-con5",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        y: 35,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out"
    }
);

gsap.from(".footer-nav a", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 85%",
        toggleActions: "play none none reverse"
    },
    y: 20,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: "power2.out"
});

gsap.from(
    [".footer-contact", ".footer-badge", ".footer-socials"],
    {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
    }
);
