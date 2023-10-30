import { Footer, Navbar } from '../components';
import { Service, Explore, Feedback,  Hero, Insights } from '../sections';

const Page = () => (
  <div>
    <Hero />
    <Service />
   <Explore />
   <Feedback />
   <Insights />
   <Footer />
     {/* <GetStarted />
    <WhatsNew />
    <World />
    
    <Feedback />
    <Footer /> */}
  </div>
);

export default Page;
