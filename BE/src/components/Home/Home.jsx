import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Section from "../Section/Section";
import SlideShow from "../SlideShow/SlideShow";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <SlideShow />
        <Section />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
