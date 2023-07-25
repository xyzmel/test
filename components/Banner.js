import React from "react";
import Link from "next/link"; // Import the Link component
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="Vi ser frem til å starte et nytt prosjekt" /> <br />
            
          </div>

          <div>
            <Link href="/kontakt"> {/* Use "href" instead of "to" */}
              <button className="button-primary">Kontakt oss</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
