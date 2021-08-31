import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const MovieTrailer = () => {
    return (
        <div className="font-mono flex flex-col min-h-screen">
                  <Head>
        <title>Project</title>
      </Head>
            <Header />
            <div className="ml-4 mt-14 sm:ml-10 lg:ml-20 flex-grow">
            <p>project name</p>
            <p>side project</p>
            <p>image</p>
            <a href="https://movie-trailer-iota.vercel.app/">LInk</a>
            </div>
            <Footer />
        </div>
    )
};

export default MovieTrailer;