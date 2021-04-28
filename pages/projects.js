import Footer from "../components/Footer";
import Header from "../components/Header";

function projects() {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Header />
      <div className="ml-4 mt-14 sm:ml-10 lg:ml-20 flex-grow">
        <h1>Projects</h1>
      </div>

      <Footer />
    </div>
  );
}

export default projects;
