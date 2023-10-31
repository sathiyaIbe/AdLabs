import { Footer, Navbar } from '../components';
import { Service, Blueprint, Feedback,  Hero, Contact } from '../sections';
import GetStarted from '../sections/GetStarted';

const Page = () => (
  <div>
    <Hero />
    <Service />
     <Blueprint />
    <Feedback />
    <Contact />
    <Footer /> 
     {/* <GetStarted /> */}
  </div>
);

export default Page;
