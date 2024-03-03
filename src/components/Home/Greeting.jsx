import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Greeting() {
  return (
    <section id="greeting" className="w-full grid gap-2">
      {/* GREETING */}
      <h1 className="text-3xl font-semibold">Hello, I&apos;m Anaïs 👋</h1>
      <h2 className="text-xl text-gray-400">a software engineer based in Philadelphia</h2>
      <section id="socials">
        {/* SOCIALS */}
        <ul className="flex gap-3 text-2xl">
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
    </section>
  );
}

export default Greeting;
