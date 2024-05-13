import "../views/styles.css";
import mePic from "../assets/me.jpg";
import NavBar from "../components/navigationBar/NavBar";

function TechStacks() {
  return (
    <>
      <h2 className="caps mb-5">Tech Stacks</h2>
      <p className="italic">
        HTML, CSS, Bootstrap, TailwindCSS, Javascript, ReactJS, VueJS, PHP,
        MySQL, NodeJS, Axios, Ajax
      </p>
    </>
  );
}
function SectionHeader() {
  return (
    <section className="grid-layout col-span-full border-t pt-5 pb-[45px]  ">
      <div className="cols6 mdcols">
        <h2 className="caps mb-5">Personal Motto</h2>
        <p className="italic">"Live a life you will always remember"</p>
        <div className="md_min:hidden">
          <div className="mt-8">
            <TechStacks />
          </div>
        </div>
      </div>
      <div className="cols3 grid grid-cols-3 gap-[22px] mdcols">
        <div className="col-span-2 mdd">
          <TechStacks />
        </div>
        <div className="col-span-1">
          <h2 className="caps mb-5">Graduated</h2>
          <p>2023</p>
        </div>
      </div>
    </section>
  );
}
function SectionProfile() {
  return (
    <section className="col-span-full -mx25 pb60 lgd md-mx mdpb">
      <div className="absolute inset-0 z-10 -mt-[11px] flex items-center justify-center lg_min:hidden"></div>
      <div style={{ opacity: 1 }}>
        <img
          src={mePic}
          alt="Me"
          sizes="100vw"
          className="w-full"
          loading="lazy"
          style={{ color: "transparent" }}
        />
      </div>
    </section>
  );
}
function SectionSummary() {
  return (
    <section className="col-span-full border-t pt-5 pb230 mdpb">
      <div className="grid-layout mdgap0">
        <div className="cols5 colsfull">
          <h2 className="caps mb-5">Personal Summary</h2>
          <div className="text-headline [&>*]:leading-[1.15] [&_p]:indent-[65px] ">
            <p className="mb-7 last:mb-0">
              I recently completed my Bachelor's degree in Computer Engineering
              (BScPE), where I focused on learning Java and Python programming.
              During our capstone project, I worked as a System and Mobile App
              developer, creating the UI and functionality of a mobile app. This
              involved integrating sensors with a microprocessor to transfer
              data to a cloud database. Additionally, I gained experience as a
              Data Encoder during a senior-high school internship.
            </p>
            <p className="mb-7 last:mb-0">
              During the capstone project, I gained skills in Java, Python,
              Arduino, Raspberry Pi, Firebase, and mobile development with
              Android Studio. Currently, I'm focused on enhancing my proficiency
              in web development. My current tech stack includes HTML, CSS,
              TailwindCSS, Bootstrap, JavaScript, ReactJS, VueJs, PHP, MySQL,
              Axios, and Ajax.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <>
      <div>
        <>
          <NavBar />
        </>
        <main className="flex flex-col flex-grow">
          <article>
            <section className="pointer-events-none">
              <div className="container">
                <div className="fixed inset-0 z-10 flex items-center justify-center py-[clamp(500px,60vw,650px)] lg:hidden"></div>
              </div>
            </section>
            <section className="padt3 mdpt">
              <div className="container-full">
                <div className="grid-layout relative gap-y-0">
                  <div className="pointer-events-none absolute top-0 z-10 col-span-full h-full w-full">
                    <div className="col-span-full h-[1px] w-full bg-black transition"></div>
                  </div>
                </div>
                <SectionHeader />
                <SectionProfile />
                <SectionSummary />
              </div>
            </section>
          </article>
        </main>
      </div>
    </>
  );
}

export default About;
