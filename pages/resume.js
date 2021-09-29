import Header from "../components/Header";
import Footer from "../components/Footer";

const resume = () => {
  return (
    <div className="font-mono flex flex-col min-h-screen">
      <Header />
      <div className="ml-4 mt-24 sm:ml-10 lg:ml-20 flex-grow">
        <div className="text-6xl mb-6">
          <p>Resume</p>
        </div>
        <div className="text-lg divide-y-4 divide-gray-600 divide-dashed pr-8 space-y-2 sm:pr-10 lg:pr-20">
          <div className="">
            <p className="mt-4 font-bold text-blue-300">technical skills</p>
            <div className="grid grid-cols-3 sm:flex sm:space-x-8">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
                <p>React</p>
                <p>Next.js</p>
                <p>AWS</p>
                <p>Azure</p>
                <p>Python</p>
                <p>Keras</p>
            </div>
          </div>
          <div className="">
            <p className="mt-4 font-bold text-purple-300">experience</p>
            <div className="pb-4">
                <p>Arctian (Iglu) | Nov 2020 - present</p>
                <p className="font-semibold">Cloud Engineer</p>
                <ul className="list-inside list-disc pl-4 sm:pl-8">
                    <li>Work in the architecture, development, implementation, automated testing, operating, and monitoring of cloud based solutions</li>
                    <li>Work with the full stack of cloud solutions: from infrastructure as code, to backend, to frontend.</li>
                    <li>Solve problems for current or proposed cloud infrastructure</li>
                    <li>Lead projects and maintain contact with customers</li>
                </ul> 
            </div>
            <div className="pb-4">
                <p>Chaos Theory | Oct 2019 - Oct 2020</p>
                <p className="font-semibold">Ai Developer</p>
                <ul className="list-inside list-disc pl-4 sm:pl-8">
                    <li>Implement deep learning technique to detect emotion, gender, and age from faces</li>
                    <li>Classify sentiment and gender from text</li>
                    <li>Develope frontend for company website</li>
                </ul> 
            </div>
            <div className="pb-4">
                <p>Inetasia Solutions | Jun 2019 - Sep 2019</p>
                <p className="font-semibold">Intern Developer</p>
                <ul className="list-inside list-disc pl-4 sm:pl-8">
                    <li>Maintaine customer websites</li>
                    <li>Develope frontend for customer websites</li>
                    <li>Design UX/UI for new websites</li>
                </ul> 
            </div>
            <div className="pb-4">
                <p>company | date</p>
                <p className="font-semibold">title</p>
                <ul className="list-inside list-disc pl-4 sm:pl-8">
                    <li>list</li>
                    <li>list</li>
                    <li>list</li>
                </ul> 
            </div>
          </div>
          <div className="">
            <p className="mt-4 font-bold text-red-300">education</p>
            <div className="pb-4">
                <p>school | date</p>
                <p>diploma</p>
            </div>
            <div className="pb-4">
                <p>school | date</p>
                <p>diploma</p>
            </div>
            <div className="pb-4">
                <p>school | date</p>
                <p>diploma</p>
            </div>
          </div>
          <div className="">
            <p className="mt-4 font-bold text-green-300">certifications</p>
            <div className="pb-4">
                <p>cert name</p>
                <a href="/">credential id</a>
            </div>
            <div className="pb-4">
                <p>cert name</p>
                <a href="/">credential id</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default resume;
