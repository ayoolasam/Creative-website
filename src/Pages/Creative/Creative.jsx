import React from "react";
import Nav from "../../Components/Nav/Nav";
import "./Creative.css";
import Hero from "../../Components/Hero/Hero";
import Pictures from "../../Components/ImagesContainer/Pictures";
import Create from "../../Components/CREATE/Create";
import Iphone from "../../Assets/iPhone 15 Pro .jpg";
import Iphone2 from "../../Assets/Frame 1000007991.png";
import Iphone3 from "../../Assets/Frame 1000007989.jpg";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'


const Creative = () => {
  useEffect(() => {
    AOS.init({
      duration:1000,
      easing:'ease',
      once:true
    });
  }, [])
  
  return (
   
      <div class="Creative" data-aos="fade-up">
        <Nav />
        <div class="Writings">
          <h1>Creative </h1>
          <h1>Opportunities.</h1>
        </div>
        <Hero />
        <div class="Writes">
          <h1>
            Where Every <span>Portfolio</span>
          </h1>
          <h1>unfolds A Unique Tale Of</h1>
          <h1>Creativity</h1>
        </div>
        <Pictures />
        <div class="feint">
          <p>
            Discover The Stories within each portfolio, where creativity knows
            no bounds
          </p>
          <p>
            Explore A wide range of artistic expressions, from graphic design to
          </p>
          <p>
           
            photography, and be inspired by the diversity of our creative
            community
          </p>
        </div>
        <div>
          <div class="Disco">
            <h1>Discover What</h1>
            <h1>
              <span>CR8TIVES</span> Can Do!
            </h1>
          </div>

          <Create />
        </div>
        <div class="Second-Writings">
          <h1>Ready To Spark Your Creative Journey</h1>
          <h1>Into A World Of Imagination And Opportunity</h1>
          <h1>
            With <span>CR8TIVES</span>
          </h1>
          <button>Get App</button>
        </div>

        {/* <button>Get App</button> */}

        <div class="images">
          <div class="pro">
            <div>
              <img src={Iphone} alt="image 1" />
            </div>
          </div>
          <div class="half">
            <div>
              <img class="phones" src={Iphone3} alt="image" />
            </div>
            <div>
              <img id="phoneee" src={Iphone2} alt="image" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
 
  );
};

export default Creative;
