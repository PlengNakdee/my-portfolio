function Header() {
  return (
    <header className="font-mono flex justify-between">
      <div className="ml-5 mt-5">
        <p className="text-3xl">Pleng Nakdee</p>
      </div>
      <div className="flex space-x-2 mr-5 mt-7">
        <a href="/">about</a>
        <a href="/projects">projects</a>
        <p>contact</p>
      </div>
    </header>
  );
}

export default Header;
