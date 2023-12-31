import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout, Navbar, Footer } from "../components";
import { navigations } from "../utils/contsants";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Navbar {...navigations} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
};

export default App;
