import Footer from "../components/Footer";
import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName=""
        Hero
        HeroImg="https://1drv.ms/i/s!Ao18at5-LaPyrE1Rb5s-L4I3S5Bo?e=p12yWu"
        title="Your Journey Your Story"
        text="Choose  Your favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
