import Header from "../components/Header";
import Footer from "../components/Footer";

const resume = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Header />
      <div className="ml-4 mt-14 sm:ml-10 lg:ml-20 flex-grow">
        <div className="text-6xl mb-6">
          <p>Resume</p>
        </div>
        <div className="text-lg divide-y-4 divide-white divide-dashed pr-8 space-y-2">
          <div className="">
            <p className="mt-4 text-blue-300">technical skills</p>
            <div className="grid grid-cols-3">
                <p>python</p>
                <p>python</p>
                <p>python</p>
                <p>python</p>
            </div>
          </div>
          <div className="">
            <p className="mt-4 text-purple-300">experience</p>
            <div className="grid grid-cols-3">
                <p>python</p>
            </div>
          </div>
          <div className="">
            <p className="mt-4 text-red-300">education</p>
            <p className="">skill</p>
          </div>
          <div className="">
            <p className="mt-4 text-green-300">certifications</p>
            <p className="">skill</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default resume;
