import "./styles.css";
import Footer from "./components/footer";
import BlogPostCopy from "./components/BlogPostCopy";
import Header from "./components/Headernav";
function App() {
  return (
    <div className="App">
      <Header />
      <BlogPostCopy />
      <Footer />
    </div>
  );
}

export default App;
