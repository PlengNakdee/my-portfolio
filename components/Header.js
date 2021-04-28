function Header() {
  return (
    <header className="font-mono flex justify-between">
      <div className="ml-4 mt-4 sm:ml-10 lg:ml-20">
        <p className="text-3xl">Pleng Nakdee</p>
      </div>
      <div
        className="flex space-x-2 mr-4 mt-6 sm:mr-10 lg:mr-20 
      sm:space-x-4 lg:space-x-6"
      >
        <a href="/" className="text-blue-300">
          about
        </a>
        <a href="/projects" className="text-red-300">
          projects
        </a>
        <a href="/contact" className="text-green-300">
          contact
        </a>
      </div>
    </header>
  );
}

export default Header;
