import NavBar from "../components/navigationBar/NavBar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import "../views/home.css";

interface Project {
  to: string;
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

function ProjectListItem({ to, title, description, imageSrc, alt }: Project) {
  return (
    <>
      <Link to={to} className="pr db cursor-pointer project-list__item">
        <div className="grid-container contained">
          <div className="row pt2 pb2">
            <div className="col c3--md">
              <h3 className="dib sans--sm sans--md--md">{title}</h3>
            </div>
            <div className="col c9--md show--md">
              <p className="dib sans--sm sans--md--md">{description}</p>
            </div>
          </div>
        </div>
        <img
          src={imageSrc}
          alt={alt}
          className="pa right project-list__hover-image z2"
        />
      </Link>
      <hr />
    </>
  );
}

function HeroHeader() {
  return (
    <div className="pt11--md pt8">
      <div className="grid-container contained">
        <div className="row">
          <div className="col c9--lg c10--md mb11">
            <div className="rich-text-hero">
              <p>
                I'm an aspiring web developer, focusing on honing my web-dev
                skills. I'm passionate about minimalist design and
                neo-brutalism. I'm committed to crafting unique digital
                experiences. If you'd like to collaborate,
                <a
                  className="mail underline"
                  href="mailto:geralddiongzon12@gmail.com"
                >
                  feel free to reach out.
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const projects: Project[] = [
    {
      to: "/ProductListing",
      title: "Product Listing",
      description: "Personal Project",
      imageSrc: "../src/assets/productListing.png",
      alt: "Product Listing",
    },
    {
      to: "/SoilAnalysis",
      title: "Soil Analysis Monitoring System with Internet of Things",
      description: "Capstone Project",
      imageSrc: "../src/assets/SoilAnalysis.png",
      alt: "Soil Analysis Monitoring System with IoT",
    },
    {
      to: "/Streami",
      title: "Streami",
      description: "Personal Project",
      imageSrc: "../src/assets/Streami.png",
      alt: "Streami",
    },
  ];
  return (
    <>
      <NavBar />
      <main id="home">
        <HeroHeader />
        <div className="grid-container contained">
          <div className="row pb3 pt1">
            <div className="col c12">
              <h2 className="uppercase font-medium sans--xs">
                Select Projects
              </h2>
            </div>
          </div>
        </div>
        <hr />
        {projects.map((project, index) => (
          <ProjectListItem key={index} {...project} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Home;
