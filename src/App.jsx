import Header from "./component/header";
import HeroSection from "./component/section";
import JobCategories from "./component/jobCategory";
import FeaturedJobs from "./component/featuredJobs";
import FeaturedEmployers from "./component/featuredEmployer";
import Footer from "./component/footer";
import "./App.css";
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <JobCategories />
      <FeaturedJobs />
      <FeaturedEmployers />
      <Footer />
    </div>
  );
}

export default App;
