import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Portfolio />
      <About />
      <Footer />
    </>
  );
}

export default Home;
