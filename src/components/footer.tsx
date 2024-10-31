export default function Footer() {
  return (
    <footer id="foter">
      <ul className="foter-ul">
        <li>
          <h1 className="foot-head">Deffaf Abderrahmane</h1>
        </li>
        <li>
          <a href="https://github.com/Abderrahmane-Deffaf/Abderrahmane-Deffaf">
            <i className="link-foot fa-brands fa-github" aria-hidden="true"></i>
            <span className="sr-only"> Github </span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/abderrahmene-deffaf-180598257/">
            <i
              className="link-foot fa-brands fa-linkedin"
              aria-hidden="true"
            ></i>
            <span className="sr-only"> LinkedIn </span>
          </a>
        </li>
        <li>
          <a href="#contact">
            <i
              className="link-foot fa-solid fa-envelope"
              aria-hidden="true"
            ></i>
            <span className="sr-only"> Contact </span>
          </a>
        </li>
        <li className="para-copy">
          <small>&copy; 2022 Deffaf Abderrahmane all right reserved 2022</small>
        </li>
      </ul>
    </footer>
  );
}
