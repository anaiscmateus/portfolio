
function Navbar() {
  return (
    <header>
      <nav className="flex justify-between">
        <ul className="flex items-center gap-6 font-semibold">
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/projects">projects</a>
          </li>
          <li>
            <a href="/resume">resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
