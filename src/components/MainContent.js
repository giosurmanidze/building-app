import React, { useState, useEffect } from "react";
import CardTemplate from "./Layout/CardTemplate";
import mainImg from "../assets/images/article-photo-1280.jpg";
import sectionImg from "../assets/images/zink-section-photo-1280.jpg";
import "./styles/MainContent.css";
import { descriptions } from "../utils/constants";
import {
  LocalShipping,
  SavedSearchRounded,
  ShoppingCartOutlined,
  StarsRounded,
} from "@mui/icons-material";
import PopUp from "./Layout/PopUp";
import {Header,Banner,Footer} from '../components'



const Article = () => {

  const [size, setSize] = useState({
    width: window.innerWidth,
  });

  /// get screen size every changes
  const updateSize = () =>
    setSize({
      width: window.innerWidth,
    });
  useEffect(() => (window.onresize = updateSize), []);

  return (
    <main>
      {/*  conditional rendering  */}

      {size.width < 600 ? <PopUp /> : <Header/>}

      {/*  conditional rendering  */}
      <Banner />
      <div className="article__container wrapper">
        <div className="first__three">
          <article>
            <CardTemplate
              icon={
                <StarsRounded
                  style={{ color: "#feb600", width: "64px", height: "64px" }}
                />
              }
              title="გამოცდილება"
              desc={descriptions.desc1}
            />
          </article>
          <article>
            <CardTemplate
              icon={
                <ShoppingCartOutlined
                  style={{ color: "#feb600", width: "64px", height: "64px" }}
                />
              }
              style="center_el_style"
              title="პროდუქცია"
              desc={descriptions.desc2}
            />
          </article>
          <article>
            <CardTemplate
              icon={
                <LocalShipping
                  style={{ color: "#feb600", width: "64px", height: "64px" }}
                />
              } 
              title="ონლაინ შეკვეთა"
              desc={descriptions.desc3}
            />
          </article>
        </div>
        <div className="second__article">
          <div className="last__one">
            <SavedSearchRounded
              style={{ color: "#feb600", width: "64px", height: "64px" }}
            />
            <h3>კომპანიის შესახებ</h3>
            <p className="description__card">
              კომპანია დაფუძნდა 2009 წელს და არის PJSC “ArcelorMittal Kryviy
              Rih”-ის ოფიციალური დილერი. მისი მოღვაწეობის ძირითადი მიმართულება
              მეტალის იმპორტი და შემდგომი დისტრიბუციაა
            </p>
            <button> დეტალურად </button>
          </div>
          <article className="last">
            <img className="main__img" src={mainImg} />
            <div className="main__container__text">
              <h2>
                სამშენებლო სექტორის <br /> სანდო პარტნიორი
              </h2>
              <p className="description__card">
                კავკას მეტალთან
                <abbr>B.2.B</abbr>
                ურთიერთობით ჩვენი პარტნიორებისთვის რეალური გახდა ისეთი
                პროექტების მშენებლობა, რომელთა განხორციელება შეუძლებელი იქნებოდა
                სხვა კონკურენტებთან თანამშრომლობით
              </p>
            </div>
          </article>
        </div>
      </div>

      <section className="zink__section">
        <img src={sectionImg} />
        <article className="zink__article">
          <h2>ახალი საწარმო</h2>
          <p className="description__card">
            2022 წელს შპს „კავკას მეტალ“-მა გახსნა მავთულის მოთუთიების საწარმო,
            რომელიც აღჭურვილია თანამედროვე, მაღალტექნოლოგიური დანადგარებით.
            აღნიშნული საწარმო ერთადერთია ამიერ კავკასიაში.
          </p>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Article;
