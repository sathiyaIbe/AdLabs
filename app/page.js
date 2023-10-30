import { Footer, Navbar } from '../components';
import { Service, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

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
