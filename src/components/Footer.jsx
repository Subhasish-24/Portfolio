import { github, insta, twitter } from "../images";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2 text-sm">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/Subhasish-24" className="special-link">
            <img src={github} alt="github" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/Subhasishchintu" className="special-link">
            <img src={twitter} alt="twitter" className="w-1/2 h-1/2" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.instagram.com/subhasish_chintu_07/"
            className="special-link"
          >
            <img src={insta} alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>

      <p className="text-white-500 text-sm">
        © 2024 Subhasish Mallik. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
