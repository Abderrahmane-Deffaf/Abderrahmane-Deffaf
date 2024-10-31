import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav id="nav-bar" className="shared_nav">
        <ul className="our-links">
          <li>
            <h1 className=" mx-auto font-bold text-3xl w-fit">
              <Link className="name" href="/">
                Deffaf Abderrahmane
              </Link>
            </h1>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/abderrahmene-deffaf-180598257/">
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
              <span className="sr-only"> LinkedIn </span>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/Abderrahmane-Deffaf/Abderrahmane-Deffaf">
              <i className="fa-brands fa-github" aria-hidden="true"></i>
              <span className="sr-only"> Github </span>
            </Link>
          </li>
          <li>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="cv.pdf"
              className="button"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="gradient"></div>
    </>
  );
}
