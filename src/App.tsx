import DashboardPreview from "./components/DashboardPreview";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PropertyTypes from "./components/PropertyTypes";

import Faq from "./components/Faq"
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PropertyTypes />
      <DashboardPreview />
      
      <Faq />
      <Contact />
      <Footer />
      </>
      
  );
};

export default App;