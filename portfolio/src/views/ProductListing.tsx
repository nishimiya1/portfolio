import productListingHomeScreen from "../assets/productListingHomeScreen.png";
import productListingAddScreen from "../assets/productListingAddScreen.png";
import productListingAddResult from "../assets/productListingAddResult.png";
import productListingEditScreen from "../assets/productListingEditScreen.png";
import productListingEditResult from "../assets/productListingEditResult.png";
import productListingDeleteScreen from "../assets/productListingDeleteScreen.png";
import productListingDeleteResult from "../assets/productListingDeleteResult.png";
import "../views/home.css";
import { Logo } from "../components/navigationBar/NavBar";
function SourceCodeSection() {
  return (
    <div className="mb5">
      <p className="mb2 sans--xs font-bold uppercase">Source Code</p>
      <a
        href="https://github.com/nishimiya1/product-listing-system"
        className="underline font-bold uppercase"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Product Listing Source Code"
      >
        Github
      </a>
    </div>
  );
}

function TechUsedSection() {
  return (
    <div className="mb5">
      <p className="mb2 sans--xs font-bold uppercase">Tech Used</p>
      {[
        "HTML",
        "CSS",
        "Bootstrap",
        "Javascript",
        "Ajax",
        "PHP",
        "MySQL",
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
      href="https://insysmanage.000webhostapp.com/index.php"
      className="mb2 sans--xs font-bold uppercase underline no-focus link--opacity"
      title="Product Listing"
      target="_blank"
      rel="noopener noreferrer"
    >
      View Website
    </a>
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

function MobileViewSection() {
  return (
    <>
      <div className="col c6 hide--md">
        <SourceCodeSection />
      </div>

      <div className="col c6 hide--md">
        <TechUsedSection />
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
      <SourceCodeSection />
      <TechUsedSection />
      <WebsiteLink />
    </>
  );
}
export function SectionFooter() {
  return (
    <div className="grid-container contained">
      <div className="row">
        <div className="col c12 c8--md">
          <div className="rich-text-hero pb8">
            <p>
              Feel free to share any comments, opinions, or suggestions about
              this project{" "}
              <a
                href="mailto:geralddiongzon12@gmail.com"
                target="_blank"
                title="geralddiongzon12@gmail.com"
                className="text-red-500 underline"
              >
                {" "}
                via email{" "}
              </a>{" "}
              or reach out to me on{" "}
              <a
                href="https://www.instagram.com/raaald1/"
                target="_blank"
                title="https://www.instagram.com/raaald1/"
                className="text-orange-500 underline"
              >
                {" "}
                Instagram{" "}
              </a>
              . Your feedback is highly appreciated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
function ProductListing() {
  const productListingImages = {
    homeScreen: productListingHomeScreen,
    addScreen: productListingAddScreen,
    addResult: productListingAddResult,
    editScreen: productListingEditScreen,
    editResult: productListingEditResult,
    deleteScreen: productListingDeleteScreen,
    deleteResult: productListingDeleteResult,
  };
  return (
    <>
      <main id="ProductListing">
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
                  Product Listing
                </h2>
                <p className="serif--md serif--lg--md">
                  This project is a basic CRUD (Create, Read, Update, Delete)
                  operation system developed using PHP, MySQL, and AJAX
                  requests. It allows users to manage inventory by adding,
                  editing, and deleting products.
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
            {Object.entries(productListingImages).map(([key, src]) => (
              <ImageWithSourceSet
                key={key}
                src={src}
                alt={`Product Listing ${key}`}
              />
            ))}
            <SectionFooter />
          </div>
        </div>
      </main>
    </>
  );
}

export default ProductListing;
