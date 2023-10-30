/* eslint-disable */
'use client';
import Navbar from '../components/Navbar'
const Hero = () => (
  <section className="hero-main-container  bg-black">
    <div className='flex justify-center ' >
      <div className=' flex flex-col justify-between w-[92%]  h-[100%]'>
      <div className="min-h-[20vh] flex flex-col justify-center">

   <Navbar  />
   </div>
<div className=' min-h-[60vh] flex flex-col justify-center'>
   <div className='flex flex-col gap-8 w-[80%] h-full self-center'>
    <h1 className='hero_header'>You grow your brand, </h1>
    <h1 className='hero_header'>
we’ll help you get the numbers</h1>
<p className='hero_text'>Ad Labs is a Paid Advertising Agency that will 
bring your brand forward with a Return on Ad Spend. We turn your ad dollars into conversions. </p>
   </div>
   </div>
   </div>
   </div>
  </section>
);

export default Hero;
