import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <TitleLogo title="Kvartum" caption="" className="logobg" />
              <br />
              <span>
                Spørsmål? Nå oss <br /> Mandag – Fredag fra 09 til 18
              </span>
              <br />
              <br />
              <h3>+47 958 30 043</h3>
              <br />
              <a href="/kontakt">
                <button className="button-primary">Kontakt oss</button>
              </a>
            </div>
            <ul>
              <h3>SELSKAP</h3>
              <li>
                <Link href="/om">Om Selskapet</Link>
              </li>
              <li>
                <Link href="/om">team</Link>
              </li>
              <li>
                <Link href="/">Portefølje (under arbeid)</Link>
              </li>
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
            <ul>
              <h3>Tjenester</h3>
              <li>
                <Link href="/tjenester">Digital Markedsføring</Link>
              </li>
              <li>
                <Link href="/tjenester">Innholdsproduksjon</Link>
              </li>
            </ul>
            <ul>
              <h3>NÅ OSS</h3>
              <div className="connect">
                <li>
                  <Link href="https://www.facebook.com/profile.php?id=100090084915977">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/kvartum_drone/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/96034920">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>© 2023 Quartum AS</span>
            </div>
            <div className="connect">
              <span>KVARTUM</span>
              <span> &nbsp; | &nbsp; </span>
              <span>INNLANDET</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
