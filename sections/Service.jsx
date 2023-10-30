'use client';
import { gsap } from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  useEffect(() => {
    const sections = gsap.utils.toArray(".scroll-section");
    const pin = gsap.to(
      sections,
      {
        xPercent:-100*(sections.length-1),
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          pin:true,
          end: "+=10000",
          scrub: 1,
          pin: true,
          snap: 1 / (sections.length - 1),
          repeat:-1, 
        },

      }
    );
    sections.forEach((section) => {
      // grab the scoped text
      let text =  gsap.utils.toArray(".scroll-section img");
      
      // bump out if there's no items to animate
      console.log(text)
      if(text.length === 0)  return 
      
      // do a little stagger
      gsap.to(text, {
        xPercent:40,
        rotation: 120,
        opacity: 1,
        duration: 1,
        ease: "none",
        yoyo:true,
        repeat:1,
        repeatDelay: 1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: pin,
          start: "right end",
          onEnter: () => console.log(text.length)
          
        }
      });
      // ScrollTrigger.create({
        
      //   containerAnimation: pin,
      //   trigger: ".marker1",
        
      //   onEnter: () => {
      //     gsap.to('.marker1 img', {
      //         xPercent:40,
      //         rotation: 120,
      //         opacity: 1,
      //         duration: 1,
      //         ease: "none",
      //         yoyo:true,
      //         repeat:1,
      //         repeatDelay: 1,
      //         scrollTrigger: {
      //           trigger: section,
      //           containerAnimation: pin,
      //           start: "right end",
      //           onEnter: () => console.log(text.length)
                
      //         }
      //       });
      //   },
      //   onLeaveBack: () => {
          
      //   },
       
      // });
      // ScrollTrigger.create({
        
      //   containerAnimation: pin,
      //   trigger: ".marker2",
        
      //   onEnter: () => {
      //     gsap.to('.marker2 img', {
      //       xPercent:40,
      //       rotation: 120,
      //       opacity: 1,
      //       duration: 1,
      //       ease: "none",
      //       yoyo:true,
      //       repeat:1,
      //       repeatDelay: 1,
      //       scrollTrigger: {
      //         trigger: section,
      //         containerAnimation: pin,
      //         start: "right start",
      //         onEnter: () => console.log(text.length)
              
      //       }
      //     });
      //   },
      //   onLeaveBack: () => console.log('bbbb'),
       
      // });
      
     
    });
function reverse(){

}
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  function change(e){
    console.log("aaaa")
    gsap.to(e, {
        xPercent:40,
        rotation: 120,
        opacity: 1,
        duration: 1,
        ease: "none",
        yoyo:true,
        repeat:1,
        repeatDelay: 1,
    })
  }
function rotateFunction(e){
  // gsap.to(e, {rotation: 90, ease: "none", duration: 2});
}
  return(
    <section className="scroll-section-outer  overflow-hidden  min-h-[110vh] ">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
              {/* <h1 className="service_header">Our services</h1> */}

        <div ref={sectionRef} className="scroll-section-inner">
        <div className="scroll-section">
           
          </div>
          <div className="scroll-section marker1 flex flex-col mt-11">
            <div className="self-center w-[60%] flex">
            <div className="flex flex-col gap-3 pr-6">
            <p className="service_count">01</p>
            <p className="service_text"> Meta</p>
            <p className="service_text"> Advertising</p>

            </div>
            <img  className="img1" src='/Flask.png' alt='flask'/>
            </div>
          </div>
          <div className="scroll-section marker1 flex flex-col mt-11">
            <div className="self-center w-[60%] flex">
            <div className="flex flex-col gap-3 pr-6">
            <p className="service_count">02</p>
            <p className="service_text"> Creative</p>
            <p className="service_text"> Strategy</p>

            </div>
            <img  className="img1" src='/Vessel.png' alt='flask'/>
            </div>
          </div>
          <div className="scroll-section marker1 flex flex-col mt-11">
            <div className="self-center w-[60%] flex">
            <div className="flex flex-col gap-3 pr-6">
            <p className="service_count">03</p>
            <p className="service_text"> Marketing</p>
            <p className="service_text"> Advertising</p>

            </div>
            <img  className="img1" src='/Cylinder.png' alt='Cylinder'/>
            </div>
          </div>
          <div className="scroll-section marker1 flex flex-col mt-11">
            <div className="self-center w-[60%] flex">
            <div className="flex flex-col gap-3 pr-6">
            <p className="service_count">04</p>
            <p className="service_text"> Marketing</p>
            <p className="service_text"> Advertising</p>

            </div>
            <img  className="img1" src='/Flask.png' alt='Flask'/>
            </div>
          </div>
          <div className="scroll-section marker1 flex flex-col mt-11">
            <div className="self-center w-[60%] flex">
            <div className="flex flex-col gap-3 pr-6">
            <p className="service_count">05</p>
            <p className="service_text"> Email</p>
            <p className="service_text"> Marketing</p>

            </div>
            <img  className="img1" src='/Vessel.png' alt='Vessel '/>
            </div>
          </div>
          {/* <div className="scroll-section  marker2">
          <img   className="img1"src='/Vessel.png' alt='flask'/>

          </div>
          <div className="scroll-section  ">
          <img  className="img1"src='/Cylinder.png' alt='flask'/>

          </div>
          <div className="scroll-section  ">
          <img   className="img1"src='/Flask.png' alt='flask'/>

          </div>
          <div className="scroll-section  ">
          <img   className="img1"src='/Vessel.png' alt='flask'/>

          </div> */}
        </div>
        <div className="flex justify-center">
<img src='/Beaker.png' className="self-center" alt='breaker'/>
</div>
        {/* <h1 className="service_header">Our services</h1> */}

      </div>
    </section>
);
  }
export default Service;
