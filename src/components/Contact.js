import linkedinLogo from "../images/linkedin.png";
import gmailLogo from "../images/gmail.png";
import githubLogo from "../images/github.png";

function Contact() {
  return (
    <div id="contact" className="pt-20 sm:pt-24 lg:pt-32 p-6">
      <h3 className="text-slate-900 font-extrabold text-3xl sm:text-4xl lg:text-4xl tracking-tight text-center">
        Contact me
      </h3>
      <div className="flex items-center justify-center">
        <a
          href="https://www.linkedin.com/in/koushlendra-kumar-0b4118242/"
          rel="noreferrer"
          target="_blank"
        >
          <img className="h-12 w-12 m-6" src={linkedinLogo} alt="LinkedIn" />
        </a>
        
        <a
          href="mailto:webdev.koushal+portfolio@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <img className="h-12 w-12 m-6" src={gmailLogo} alt="Gmail" />
        </a>
        <a
          href="https://github.com/Koushlendra-Kumar"
          rel="noreferrer"
          target="_blank"
        >
          <img className="h-12 w-12 m-6" src={githubLogo} alt="Github" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
