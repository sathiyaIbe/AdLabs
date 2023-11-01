/* eslint-disable */
'use client';
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Timeline } from "gsap/gsap-core";
import { clamp } from "gsap/gsap-core";
import { gsap, ScrollTrigger, Draggable , Power2 } from "gsap/all";
import { shape2,shape3,shape4, shape5, shape6 } from "./path";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const emptyShape=''
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
          end: "+=5000",
          scrub: 2,
        },

      }
    );

     gsap.timeline({
        scrollTrigger: {
          trigger:'.marker12 img',
          containerAnimation: pin,
          scrub: 0.1,
          onUpdate: self => {self.progress>0.5&&gsap.to("#Water", {
            attr: { d:shape2, },
            y:0,
            opacity:1,
            duration:2,
            ease:'elastic',
        }),self.progress<0.5&&self.direction===-1 &&gsap.to("#Water", {
          y:-100,
          opacity:0,
          duration:2,
          ease:'elastic',
      })},          
          start: "top 50%",
          end:'bottom 25%',
        }
      }).to('.marker12 img', {

        rotation: 120,
        duration: 5,
        ease: 'none',
        repeat:1,
        repeatDelay:0.1,
         yoyo:true,
         timeScale: 0,
         scrub:1,
         pin:true,


      })
      gsap.timeline({
        scrollTrigger: {
          trigger:'.marker13 img',
          containerAnimation: pin,
          scrub: 0.1,
          onUpdate: self => {self.progress>0.5&&gsap.to("#Water1", {
            attr: { d:shape3, },
            opacity:1,
            y:0,
            duration:2,
            ease:'elastic',
        }),self.progress<0.5&&self.direction===-1 &&gsap.to("#Water1", {
         opacity:0,
         y:-100,
          duration:2,
          ease:'elastic',
      })},
          start: "top 50%",
          end:'bottom 25%',
        }
      })
       .to(".marker13 img", {
        rotation: 120,
        duration: 1,
        ease: 'none',
        repeat:1, repeatDelay:0.1,
         yoyo:true,
         timeScale: 0,
         scrub:1,
         pin:true,
      })

      gsap.timeline({
        scrollTrigger: {
          trigger:'.marker14 img',
          containerAnimation: pin,
          scrub: 0.1,
          onUpdate: self => {self.progress>0.5&&gsap.to("#Water2", {
            attr: { d:shape4, },
            opacity:1,
            y:0,
            duration:2,
            ease:'elastic',
        }),self.progress<0.5&&self.direction===-1 &&gsap.to("#Water2", {
                   opacity:0,
         y:-100,
          duration:2,
          ease:'elastic',
      })},  
          start: "top 50%",
          end:'bottom 25%',
        }
      })
      .to(".marker14 img", {
        rotation: 120,
        duration: 5,
        ease: 'none',
        repeat:1, repeatDelay:0.1,
         yoyo:true,
         timeScale: 0,
         scrub:1,
         pin:true,
      })
      gsap.timeline({
        scrollTrigger: {
          trigger:'.marker15 img',
          containerAnimation: pin,
          scrub: 0.1,
          onUpdate: self => {self.progress>0.5&&gsap.to("#Water3", {
            attr: { d:shape5, },
            opacity:1,
            y:0,
            duration:2,
            ease:'elastic',
        }),self.progress<0.5&&self.direction===-1 &&gsap.to("#Water3", {
                   opacity:0,
         y:-100,
          duration:2,
          ease:'elastic',
      })},          
          start: "top 50%",
          end:'bottom 25%',
        }
      }).to(".marker15 img", {
        rotation: 120,
        duration: 5,
        ease: 'none',
        repeat:1, repeatDelay:0.1,
         yoyo:true,
         timeScale: 0,
         scrub:1,
         pin:true,
      })
      gsap.timeline({
        scrollTrigger: {
          trigger:'.marker16 img',
          containerAnimation: pin,
          scrub: 0.1,
          onUpdate: self => {self.progress>0.5&&gsap.to("#Water4", {
            attr: { d:shape6, },
            opacity:1,
            y:0,
            duration:2,
            ease:'elastic',
        }),self.progress<0.5&&self.direction===-1 &&gsap.to("#Water4", {
                   opacity:0,
         y:-100,
          duration:2,
          ease:'elastic',
      })},          
          start: "top 50%",
          end:'bottom 25%',
        }
      }).to(".marker16 img", {
        rotation: 120,
        duration: 5,
        ease: 'none',
        repeat:1, repeatDelay:0.1,
         yoyo:true,
         timeScale: 0,
         scrub:1,
         pin:true,
      });




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
    <section id='Services' className="scroll-section-outer  overflow-hidden  min-h-[100vh] ">   
      <div id='smooth_content' ref={triggerRef}>
        <div  className="scroll-section-inner">
        <div className="scroll-section">
           
          </div>
          <div className="scroll-section1  flex flex-col mt-11"></div>
          <div   className="scroll-section marker12  flex flex-col mt-11">
            <div className="self-end w-[60%] flex">
            <div className="flex flex-col justify-center text-right  gap-3 pr-11">
            <p className="service_count">01</p>
            <p className="service_text"> Meta</p>
            <p className="service_text"> Advertising</p>

            </div>
            <img  className="img1" src='/Flask.png' alt='flask'/>
            </div>
          </div>
          <div className="scroll-section marker13 flex flex-col mt-11">
            <div className="self-end w-[60%] flex">
            <div className="flex flex-col justify-center text-right gap-3 pr-11">
            <p className="service_count">02</p>
            <p className="service_text"> Creative</p>
            <p className="service_text"> Strategy</p>

            </div>
            <img  className="img1" src='/Vessel.png' alt='flask'/>
           
            </div>
          </div>
          <div className="scroll-section marker14 flex flex-col mt-11">
            <div className="self-center w-[60%] flex">
            <div className="flex flex-col justify-center text-right gap-3 mr-24">
            <p className="service_count">03</p>
            <p className="service_text"> Marketing</p>
            <p className="service_text"> Advertising</p>

            </div>
            <img  className="img1" src='/Cylinder.png' alt='Cylinder'/>
            </div>
          </div>
          <div className="scroll-section marker15 flex flex-col mt-11">
            <div className="self-center w-[60%] flex">
            <div className="flex flex-col justify-center text-right gap-3 pr-11">
            <p className="service_count">04</p>
            <p className="service_text"> Marketing</p>
            <p className="service_text"> Advertising</p>

            </div>
            <img  className="img1" src='/Flask.png' alt='Flask'/>
            </div>
          </div>
          <div className="scroll-section marker16 flex flex-col mt-11">
            <div className="self-center w-[60%] flex">
            <div className="flex flex-col justify-center text-right gap-3 pr-11">
            <p className="service_count">05</p>
            <p className="service_text"> Email</p>
            <p className="service_text"> Marketing</p>

            </div>
            <img  className="img1" src='/Vessel.png' alt='Vessel '/>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center items-center">
        <svg width="659" height="4" viewBox="0 0 659 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M658.488 1.99994L0.488281 2" stroke="#0618DD" stroke-width="3"/>
</svg>
        <svg width="182" height="265" viewBox="0 0 182 265" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.48828 158L-656.512 158" stroke="#0618DD" stroke-width="3"/>
<path d="M842.488 158L180.488 158" stroke="#0618DD" stroke-width="3"/>
<path d="M1.15137 61.5665L1.93405 211.563C1.86772 224.869 10.6099 238.188 28.1871 248.336C63.2222 268.566 120.013 268.566 155.035 248.336C172.612 238.188 181.368 224.869 181.288 211.563V57.2949" stroke="#0618DD" stroke-width="3.97975" stroke-miterlimit="10"/>

<g >
<path id="Water" d="" fill="#E41C1C"/>
<path id="Water1" d="" fill="#E41C1C"/>
<path id="Water2" d="" fill="#E41C1C"/>
<path id="Water3" d="" fill="#E41C1C"/>
<path id="Water4" d="" fill="#E41C1C"/>


</g>
<path d="M152.09 7.7205C148.442 7.98582 144.794 8.2246 141.132 8.03888C135.72 7.7603 130.745 6.10207 125.545 4.78876C114.349 1.96314 102.781 0.663086 91.2396 0.663086C68.2101 0.663086 46.3878 5.92962 29.8055 15.5075C11.3263 26.1865 1.15137 41.0177 1.15137 57.2949C1.15137 73.572 11.3263 88.4165 29.8055 99.0822C46.3878 108.66 68.2101 113.927 91.2396 113.927C114.269 113.927 136.091 108.647 152.674 99.0822C171.153 88.4165 181.328 73.572 181.328 57.2949C181.328 48.8445 178.436 40.7126 173.607 33.8276C171.405 30.6969 168.234 27.1284 167.04 23.5599C165.661 19.474 165.674 15.7463 165.236 11.5411C165.13 10.5196 164.931 9.45833 164.294 8.66238C163.154 7.24293 161.058 7.16334 159.24 7.24293C156.866 7.34906 154.491 7.54805 152.116 7.7205H152.09Z" stroke="#0618DD" stroke-width="3.97975" stroke-miterlimit="10"/>
<path opacity="0.8" d="M152.09 7.7205C148.442 7.98582 144.794 8.2246 141.132 8.03888C135.72 7.7603 130.745 6.10207 125.545 4.78876C114.349 1.96314 102.781 0.663086 91.2396 0.663086C68.2101 0.663086 46.3878 5.92962 29.8055 15.5075C11.3263 26.1865 1.15137 41.0177 1.15137 57.2949C1.15137 73.572 11.3263 88.4165 29.8055 99.0822C46.3878 108.66 68.2101 113.927 91.2396 113.927C114.269 113.927 136.091 108.647 152.674 99.0822C171.153 88.4165 181.328 73.572 181.328 57.2949C181.328 48.8445 178.436 40.7126 173.607 33.8276C171.405 30.6969 168.234 27.1284 167.04 23.5599C165.661 19.474 165.674 15.7463 165.236 11.5411C165.13 10.5196 164.931 9.45833 164.294 8.66238C163.154 7.24293 161.058 7.16334 159.24 7.24293C156.866 7.34906 154.491 7.54805 152.116 7.7205H152.09Z" stroke="#0618DD" stroke-width="3.97975" stroke-miterlimit="10"/>
<path d="M175.186 58.4759C174.562 73.3336 162.703 84.6096 150.604 91.6007C148.521 92.7946 146.386 93.9222 144.157 94.9569C113.42 109.403 69.1255 109.417 38.3488 94.9835C36.0936 93.9355 33.9313 92.8079 31.8486 91.6007C-0.93129 72.6703 -0.93129 41.96 31.8486 23.0296C46.6002 14.4997 63.7661 10.4404 80.6535 9.20665C93.2163 8.29131 105.912 8.9148 118.275 11.369C125.227 12.7486 131.939 14.7385 139.103 14.8977C143.202 15.0038 147.274 14.6324 151.374 14.3936C153.403 14.2609 155.46 14.1415 157.502 14.1283C159.068 14.115 160.514 14.2609 161.177 15.9192C161.469 16.5957 161.442 17.3917 161.416 18.1345C161.23 21.6633 160.792 25.4042 162.437 28.5482C162.941 29.5299 163.645 30.4054 164.308 31.3075C166.895 34.8362 169.216 38.7894 171.312 42.6365C173.939 47.4653 175.451 52.9573 175.212 58.4892L175.186 58.4759Z" stroke="#0618DD" stroke-width="3.97975" stroke-miterlimit="10"/>
<defs>
<clipPath id="clip0_57_7685">
<rect width="156.125" height="168.211" fill="white" transform="translate(13.7539 82.248)"/>
</clipPath>
</defs>
</svg>
<svg width="659" height="4" viewBox="0 0 659 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M658.488 1.99994L0.488281 2" stroke="#0618DD" stroke-width="3"/>
</svg>

</div>
        {/* <h1 className="service_header">Our services</h1> */}

      </div>
    </section>
);
  }
export default Service;
