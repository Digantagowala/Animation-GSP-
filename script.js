function dd(){gsap.registerPlugin(ScrollTrigger);



    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);
    
    
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
     
    });
    
    
    
    
    
     
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    
    ScrollTrigger.refresh();}

 dd()  


let tl= gsap.timeline({
  ScrollTrigger:{
    trigger:".page1 h1",
    scroller:".main",
    markers:true,
    start:"top 30%",
    end:"top 0",
    scrub:3

  }
 })

 tl.to(".page1 h1",{
  x:-100,
 },"anim")

 tl.to(".page1 h2",{
  x:100,
 },"anim")

 






