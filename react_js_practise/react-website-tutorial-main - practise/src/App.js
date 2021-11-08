import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*router use karene ke liye ha router route switch and chage represent in html an d type any thing so that we use router and 
create react jon amd we are a good jon amd use this link react javasctipt and router and we use and that rent and link that 
it is very import think because we use router and statement this root so we use ruu it lik as a tag an d link the page other to sec
other so that we can use router and page and click the page use for master branch and use for that and cream so that
*/

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
