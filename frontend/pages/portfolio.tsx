import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

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
        <div className="grid flex-wrap space-y-4 sm:space-y-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProjectCard
            href="/portfolio/this"
            projectName={'this website'}
            category={'side project'}
          />
          <ProjectCard
            href="/portfolio/movie-trailer"
            projectName={'a movie trailer site'}
            category={'side project'}
          />
          <ProjectCard
            href="/portfolio"
            projectName={'coming soon'}
            category={'side project'}
          />
          <ProjectCard
            href="/portfolio"
            projectName={'coming soon'}
            category={'client project'}
          />
          <ProjectCard
            href="/portfolio"
            projectName={'coming soon'}
            category={'side project'}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default projects;
