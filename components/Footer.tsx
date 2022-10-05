import {
  faGithub,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: NextPage = () => {
  return (
    <div className="w-screen h-32 mt-32 flex flex-col items-center justify-center">
      <p className="font-bold">Let's Connect!</p>
      <div className="flex flex-row gap-6 mt-4 text-2xl">
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
    </div>
  );
};

export default Footer;
