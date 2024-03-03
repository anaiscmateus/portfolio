import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="flex justify-center">
      <nav className="w-full flex justify-between items-center">
        <span className="text-sm">
          Made with <FontAwesomeIcon icon={faHeart} className="text-red-500" /> by Anaïs Mateus
        </span>
        <section id="footer-socials">
          <ul className="flex gap-3 text-xl">
            <li>
              <a
                href="https://github.com/anaiscmateus"
                target="_blank"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ana%C3%AFsmateus/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="hover:text-gray-400"
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/anaiscodes"
                target="_blank"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a
                href="mailto:anaismateusc@gmail.com"
                className="hover:text-gray-400"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </footer>
  );
}

export default Footer;
