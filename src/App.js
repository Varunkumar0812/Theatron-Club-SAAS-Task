import Contact from "./components/Contact";
import TeamMembers from "./components/TeamMembers";
import HomePage from "./components/homepage";
import Navbar from "./components/navbar";
import AboutPage from "./components/aboutpage";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-red-100 cursor-default">
      <Navbar />
      <HomePage />
      <AboutPage id="about" />
      <TeamMembers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
