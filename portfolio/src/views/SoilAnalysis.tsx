import SoilAnalysisVideo from "../assets/SoilAnalysis.mp4";
import "../views/home.css";
import { Logo } from "../components/navigationBar/NavBar";
import { SectionFooter } from "./ProductListing";

function SourceCodeComponent() {
  return (
    <div className="mb5">
      <p className="mb2 sans--xs font-bold uppercase">Source Code</p>
      <a
        href="https://github.com/nishimiya1/Soil-Analysis-Monitoring-System-With-Internet-Of-Things-Application"
        className="underline font-bold uppercase"
        target="_blank"
        rel="noopener noreferrer"
        aria-label=" Soil Analysis Monitoring System with Internet of Things Source Code"
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
        "Arduino Uno",
        "Raspberry Pi",
        "Google  Firebase",
        "C#",
        "Java",
        "Android Studio",
      ].map((tech, index) => (
        <p key={index} className="sans--sm mb1">
          {tech}
        </p>
      ))}
    </div>
  );
}

function PresentationLink() {
  return (
    <a
      href="https://docs.google.com/presentation/d/1GaAT4HFxER0tJHVB0Ivd-QJpbCRpKIIDQkm9d8JNNOw/edit?usp=sharinghttps://docs.google.com/presentation/d/e/2PACX-1vRzSUdPKVHT-wzWVRS6VowPrP2KnunyriwIe0qVJXDnJvdS-AS4sNbO8SIZPEh47G73UtLZ05blNfEA/pub?start=false&loop=false&delayms=3000"
      className="mb2 sans--xs font-bold uppercase underline no-focus link--opacity"
      title="Soil Analysis Monitoring System with Internet of Things"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Presentation
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
        <PresentationLink />
      </div>
    </>
  );
}
function DesktopViewSection() {
  return (
    <>
      <SourceCodeComponent />
      <TechUsedComponent />
      <PresentationLink />
    </>
  );
}

function VideoWithSourceSet({ src }: { src: string; alt: string }) {
  return (
    <div className="pt6--md pt3">
      <div className="image size--16x9">
        <video controls muted>
          <source srcSet={src} media="(min-width:1000px)" />
          <source srcSet={src} media="(min-width:400px)" />
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <p className="text-2xl font-light mb-4 opacity-[.64]">
        If browser doesn't support HTML video. Here is a{" "}
        <a
          href={SoilAnalysisVideo}
          download="SoilAnalysisVideo.mp4"
          className="underline text-blue-500 hover:text-blue-800"
        >
          download link
        </a>{" "}
        to the video instead.
      </p>
    </div>
  );
}

function SoilAnalysis() {
  const soilAnalysis = {
    soilAnalysisVideo: SoilAnalysisVideo,
  };

  const isVideoSupported = () => {
    const video = document.createElement("video");
    return !!(video && video.canPlayType);
  };
  return (
    <>
      <main id="SoilAnalysis">
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
                <h2 className="sans--xs uppercase font-bold mb2">
                  Soil Analysis Monitoring System with Internet of Things
                </h2>
                <p className="serif--md serif--lg--md">
                  This project aims to enhance farmers' field management by
                  utilizing soil sensors to monitor key parameters such as
                  moisture, temperature, and nutrient levels. Integrated with an
                  irrigation system, it automates watering based on soil
                  conditions, accessible through a mobile app for remote
                  monitoring and decision-making, enabling farmers to optimize
                  their agricultural practices.
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
            <p className="text-xl">Actual Project on rice fields</p>
            {Object.entries(soilAnalysis).map(([key, src]) => (
              <VideoWithSourceSet
                key={key}
                src={src}
                alt={`Soil Analysis Monitoring System with Internet of Things ${key}`}
              />
            ))}
            {!isVideoSupported() && (
              <p className="text-2xl font-light mb-4 opacity-[.64]">
                If browser doesn't support HTML video. Here is a{" "}
                <a
                  href={SoilAnalysisVideo}
                  download="SoilAnalysisVideo.mp4"
                  className="underline text-blue-500 hover:text-blue-600"
                >
                  download link
                </a>{" "}
                to the video instead.
              </p>
            )}

            <SectionFooter />
          </div>
        </div>
      </main>
    </>
  );
}

export default SoilAnalysis;
