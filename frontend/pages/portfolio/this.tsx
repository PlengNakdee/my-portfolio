import Head from 'next/head';
import Link from 'next/link';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const This = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Head>
        <title>Project-This Website</title>
      </Head>
      <Header />
      <div className="ml-4 mt-24 sm:ml-10 lg:ml-20 flex-grow sm:mr-10 lg:mr-16">
        <p className="text-6xl mb-6">This Website</p>
        <p>text explain website functioanlity</p>
        <p>frontend</p>
        <p>backend/aws</p>
        <div className="mt-4">
          <a href="https://github.com/PlengNakdee/my-portfolio" target="_blank">
            Github
          </a>
        </div>
      </div>
      <Link href="/portfolio">
        <a className="flex justify-center">&#8592; back to projects</a>
      </Link>
      <Footer />
    </div>
  );
};

export default This;
