import { useState } from "react";
import Navbar from "../componentes/Navbar";
import Hero from "../componentes/Hero";
import Carousel from "../componentes/Carousel";
import Destinations from "../componentes/Destinations";
import Itinerary from "../componentes/Itinerary";
import Contact from "../componentes/Contacts";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <Hero />
      <Carousel />
      <Destinations search={search} />
      <Itinerary />
      <Contact />
    </>
  );
}

export default Home;