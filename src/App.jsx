import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Place from "./components/Place";
import Product from "./components/Product";
import Section from "./components/Section";
import Special from "./components/Special";

function App() {
  return (
  <>
  <Header/>
  <main className="main">
  <Section/>
  <Special/>
  <Product/>
  <Place/>
  <Blog/>
 
  </main>
  <Footer/>
  </>
  );
}

export default App;
