import About from "./Component/About";

import Intro from "./Component/Intro";
import Work from "./Component/Work";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Work />
      <About />
      <Footer />
    </>
  );
}
// TODO: 1. collect project data and display all projects only wen click view all project

export default App;
