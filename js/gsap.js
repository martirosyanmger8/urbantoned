gsap.registerPlugin(ScrollTrigger);

// scroll animation for true-potencial title 
gsap.from('#true-potencial h3', {
    scrollTrigger: {
        trigger: '#true-potencial',
        start: '-50% center',
        end: '+=400px',
        scrub: true
    },
    opacity: 0,
    y: 50,    
})

// scroll animation for true-potencial orange line 
gsap.fromTo('.orange-line', {
    width: '0%'
}, {
    scrollTrigger: {
        trigger: '#true-potencial',
        start: 'top center',
        end: '+=600px',
        scrub: true
    },
    width: '100%',
    duration: 1
});

// scroll animation for true-potencial items
gsap.from('.true-potencial__item', {
    scrollTrigger: {
        trigger: '#true-potencial',
        start: '-20% center',
        end: '+=400px',
        scrub: true
    },
    scale: 0,
    transformOrigin: 'left center',
    stagger: 1,
})

