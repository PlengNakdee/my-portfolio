import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageCard from "../components/ImageCard";

const projects = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header />
      <div className="ml-4 mt-24 sm:ml-10 lg:ml-20 flex-grow sm:mr-10 lg:mr-16">
        <div className="text-6xl mb-6">
          <p>Portfolio</p>
        </div>
        <div className="grid flex-wrap space-y-4 md:grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4">
          <ImageCard
            href="/portfolio/movie-trailer"
            src="images/clone-1.png"
            alt="picture of a website"
            projectName="movie trailer website"
            category="side project"
          />
          <ImageCard
            href="https://netflix-clone-6ed91.web.app/"
            src="images/p1.png"
            projectName="Project 1"
            category="side project"
          />
          <ImageCard
            href="https://netflix-clone-6ed91.web.app/"
            src="images/p1.png"
            projectName="Project 1"
            category="side project"
          />
          <ImageCard
            href="https://netflix-clone-6ed91.web.app/"
            src="images/p1.png"
            projectName="Project 1"
            category="side project"
          />
          <ImageCard
            href="https://netflix-clone-6ed91.web.app/"
            src="images/p1.png"
            projectName="Project 1"
            category="side project"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default projects;
