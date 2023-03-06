import Header from "./NavBar/Header";
import "./Home.css";
import Footer from "./Footer";
import Responsiblity from "./Responsiblity";
import Social from "./Social";
import OurApproch from "./OurApproch";

function Home() {
  return (
    <>
      <Header />
      <div className="hero min-h-screen color-change-2x">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h className="text-2xl text-info">Our Work With Novelty</h>
            <h1 className="mb-5 text-5xl font-bold text-uppercase ">
              Just To Illuminate the community
            </h1>
            <p className="mb-5 text-light">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-info mb-5">Explore</button>
            <div className="flex justify-center mt-5 ">
              <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Responsiblity />
      <Social />
      <OurApproch />
      <Footer />
    </>
  );
}

export default Home;
