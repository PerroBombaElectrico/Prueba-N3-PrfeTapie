import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Destinations from "../components/Destinations";
import Itinerary from "../components/Itinerary";
import PackageModal from "../components/PackageModal";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel />
      <Destinations />
      <Itinerary />
      <PackageModal />
      <Footer />
    </>
  );
}

export default Home;
