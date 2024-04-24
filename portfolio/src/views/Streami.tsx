import streamiHomeScreen from "../assets/streamiHomepage.png";
import streamiGenerator from "../assets/streamiGenerator.png";
import streamiArchive from "../assets/streamiArchive.png";
import streamiAbout from "../assets/streamiAbout.png";
import streamiWatchVideo from "../assets/streamiWatchVideo.png";
import "../views/home.css";
import { Logo } from "../components/navigationBar/NavBar";
import { SectionFooter } from "./ProductListing";
function SourceCodeComponent() {
  return (
    <div className="mb5">
      <p className="mb2 sans--xs font-bold uppercase">Source Code</p>
      <a
        href="https://github.com/nishimiya1/Streami"
        className="underline font-bold uppercase"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Streami Source Code"
      >
        Github
      </a>
    </div>
  );
}
function TechUsedComponent() {
  return (
    <div className="mb5">
      <p className="mb2 sans--xs font-bold uppercase">Tech Used</p>
      {[
        "HTML",
        "CSS",
        "TailwindCSS",
        "VueJS",
        "TypeScript",
        "Axios",
        "REST API",
        "VSCode",
      ].map((tech, index) => (
        <p key={index} className="sans--sm mb1">
          {tech}
        </p>
      ))}
    </div>
  );
}
function WebsiteLink() {
  return (
    <a
      href="https://streaaami.netlify.app"
      className="mb2 sans--xs font-bold uppercase underline no-focus link--opacity"
      title="Streami"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Website
    </a>
  );
}
function MobileViewSection() {
  return (
    <>
      <div className="col c6 hide--md">
        <SourceCodeComponent />
      </div>
      <div className="col c6 hide--md">
        <TechUsedComponent />
      </div>
      <div className="col c12 mb6 mt2 hide--md">
        <WebsiteLink />
      </div>
    </>
  );
}
function DesktopViewSection() {
  return (
    <>
      <SourceCodeComponent />
      <TechUsedComponent />
      <WebsiteLink />
    </>
  );
}

function ImageWithSourceSet({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="pt6--md pt3">
      <div className="image size--16x9">
        <picture>
          <source srcSet={src} media="(min-width:1000px)" />
          <source srcSet={src} media="(min-width:400px)" />
          <img src={src} alt={alt} />
        </picture>
      </div>
    </div>
  );
}
function Streami() {
  const streamiImages = {
    homeScreen: streamiHomeScreen,
    generator: streamiGenerator,
    archive: streamiArchive,
    about: streamiAbout,
    watchVideo: streamiWatchVideo,
  };

  return (
    <>
      <main id="Streami">
        <nav
          className="fixed top-0 left-0 w-full z-[30]"
          style={{ color: "rgb(21, 20, 23)" }}
        >
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-gr1 p-md1 max-w-container mx-auto">
            <Logo />
          </div>
        </nav>
        <div className="grid-container contained">
          <div className="df fdc jcb ais mb4--md">
            <div className="df fdc">
              <header className="mb19--md mb11 mt5"></header>
            </div>
            <div className="row x">
              <div className="col c9--md c12 mb4 mb0--md">
                <h2 className="sans--xs uppercase font-bold mb2">Streami</h2>
                <p className="serif--md serif--lg--md">
                  Explore captivating videos on Streami, a platform designed for
                  an enriched streaming experience. With a minimalist design and
                  the power of the YouTube API, Streami offers exceptional
                  content curated for your enjoyment.
                </p>
              </div>

              <MobileViewSection />

              <div className="col c1--md show--md"></div>
              <div className="col c2--md show--md">
                <DesktopViewSection />
              </div>
            </div>
          </div>
          <div className="grid-container contained flush padded--md mb11--md mb6 ">
            {Object.entries(streamiImages).map(([key, src]) => (
              <ImageWithSourceSet key={key} src={src} alt={`Streami ${key}`} />
            ))}
            <SectionFooter />
          </div>
        </div>
      </main>
    </>
  );
}

export default Streami;
