
    var tl = gsap.timeline();

tl.from('nav h1, h4, .nav-btn',{
    y:-30,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    stagger: 0.1,
})

tl.from('.part-one h2',{
    x: -300,
    opacity: 0,
})
tl.from('.part-one p',{
    x: -300,
    opacity: 0,
})
tl.from('.part-one .hero-btn',{
    x: -300,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
})

tl.from('.part-two img',{
    x: 300,
    opacity: 0,
    duration: 0.5,
},'-=1.2')


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero2',
        scroller: 'body',
        markers: false,
        start: 'top 55%',
        end:'top 10%',
        scrub: 1,
    }
})

tl2.from('.hero2 ul li', {
    y: 30,
    opacity: 0

})

tl2.from('.hero2 div', {
    x: -100,
    opacity: 0,
})


var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.container',
        scroller: 'body',
        markers: false,
        start: 'top 50%',
        end:'top -10%',
        scrub: 1,
    }
})

tl3.from('.container .top-left',{
    x:-100,
    opacity: 0,
},'top')

tl3.from('.container .bottom-left',{
    x:-100,
    opacity: 0,
},'bottom')


tl3.from('.container .top-right',{
    x:100,
    opacity: 0,
},'top')

tl3.from('.container .bottom-right',{
    x:100,
    opacity: 0,
},'bottom')

tl3.from('.container .middle-section',{
    scale: 0,
    opacity: 0,
    duration:0.8
})

var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.bottom-section',
        scroller: 'body',
        markers: true,
        start: 'top 80%',
        end:'top 60%',
        scrub: 1,
    }
})

tl4.from('.container .left',{
    x:-100,
    opacity: 0,
},'case-study')
tl4.from('.container .right',{
    x:100,
    opacity: 0,
},'case-study')
tl4.from('.container .center',{
    scale: 0,
    opacity: 0,
},'case-study')
