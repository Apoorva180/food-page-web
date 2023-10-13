import TestimonialDetail from "./components/TestimonialDetail/TestimonialDetail";
import FeedbackDetail from "./components/FeedbackDetail/FeedbackDetail";
import MenuDetail from "./components/MenuDetail/MenuDetail";
import FeauturesDetail from "./components/FeauturesDetail/FeauturesDetail";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Header />
      <WelcomePage />
      <FeauturesDetail />
      <MenuDetail />
      <FeedbackDetail />
      <TestimonialDetail />
      <ContactDetail />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
