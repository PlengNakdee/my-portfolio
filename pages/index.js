import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Head>
        <title>Portfolio-Pleng-Nakdee</title>
      </Head>
      <Header />
      <div className="ml-4 mt-14 sm:ml-10 lg:ml-20 flex-grow">
        <div>
          <p className="text-9xl">Hi,</p>
          <p className="text-4xl mt-4 mr-6">
            I'm a Software Engineer...
          </p>
          <p></p>
        </div>
        <div className="text-lg mt-4 mr-6">
          <p>
            with focus on cloud. My current work involves native cloud web applications,
            which focuses on front-end. I’m also an Ai enthusiast with some
            experience in deep learning.{" "}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
