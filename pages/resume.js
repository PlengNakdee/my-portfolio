import Header from "../components/Header";
import Footer from "../components/Footer";

function resume() {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Header />
      <div className="ml-4 mt-14 sm:ml-10 lg:ml-20 flex-grow">
        <div className="text-6xl mb-6">
          <p>Contact</p>
        </div>
        <div className="text-lg">
          <p className="mt-4">I'd love to hear from you.</p>
          <p>
            You can email me at{" "}
            <a href="mailto:plengwn@gmail.com" target="_blank">
              plengwn@gmail.com
            </a>{" "}
          </p>
          <p>Or connect through my</p>
          <p>
            <a href="https://www.linkedin.com/in/plengnakdee/" target="_blank">
              LinkedIn
            </a>{" "}
            and{" "}
            <a
              href="https://github.com/PlengNakdee?tab=repositories"
              target="_blank"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default resume;
