import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "../components/Image";

function projects() {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Header />
      <div className="ml-4 mt-14 sm:ml-10 lg:ml-20 flex-grow sm:mr-10 lg:mr-16">
        <div className="text-6xl mb-6">
          <p>Projects</p>
        </div>
        <div
          className="group flex-inline sm:grid md:grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 flex-wrap"
        >
          <Image
            href="https://netflix-clone-6ed91.web.app/"
            src="images/p1.png"
          />
          <Image
            href="https://netflix-clone-6ed91.web.app/"
            src="images/p1.png"
          />
          <Image
            href="https://netflix-clone-6ed91.web.app/"
            src="images/p1.png"
          />
          <Image
            href="https://netflix-clone-6ed91.web.app/"
            src="images/p1.png"
          />
          <Image
            href="https://netflix-clone-6ed91.web.app/"
            src="images/p1.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default projects;
