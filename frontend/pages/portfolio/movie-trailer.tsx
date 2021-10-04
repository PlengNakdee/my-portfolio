import Head from 'next/head';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const MovieTrailer = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Head>
        <title>Project-Movie Trailer</title>
      </Head>
      <Header />
      <div className="ml-4 mt-24 sm:ml-10 lg:ml-20 flex-grow sm:mr-10 lg:mr-16">
        <p className="text-6xl mb-6">A Movie Trailer Site</p>
        <p>text explain website functioanlity</p>
        <p>frontend</p>
        <p>backend/aws</p>
        <div className="mt-4">
          <a href="https://movie-trailer-iota.vercel.app/" target="_blank">
            Website
          </a>
          <span className="px-4">|</span>
          <a
            href="https://github.com/PlengNakdee/movie-trailer"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
      <a href="/portfolio" className="flex justify-center">
        &#8592; back to projects
      </a>
      <Footer />
    </div>
  );
};

export default MovieTrailer;
