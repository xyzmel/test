import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Om = () => {
  return (
    <section className="about-us bg-top">
      <div className="container">
        <div className="heading-title">
          <TitleSm title="OM OSS" /> <br />
          <br />
          <Title
            title="Kreative ideer."
            className="title-bg"
          />
        </div>
        <div className="about-content">
          <div className="about-image">
            
            <img src="/images/logo.png" alt="Team" />
          </div>
          <div className="about-text">
            <p>
            Vi er et kreativt digitalt selskap som ble grunnlagt i 2021 med en lidenskap for å levere enestående visuell kommunikasjon. 
            </p>
            <br />
            <p>
            Vår reise begynte som et dronefirma, der vi spesialiserte oss på å levere video- og bildeopptak fra luften. Men etter hvert som vi vokste, oppdaget vi en økende etterspørsel etter digitale markedsføringstjenester og innholdsproduksjon.
            </p>
            <br />
            <p>
            Vi tok utfordringen med glede og utvidet våre tjenester til å omfatte digital markedsføring og innholdsproduksjon. Nå hjelper vi bedrifter med å lykkes online ved å skape effektive digitale strategier og engasjerende innhold.
            </p>
            <br />
            <p>
            Som en nyoppstartet bedrift er vi stolte av å omfavne utfordringer og strebe etter å levere resultater som imponerer våre kunder. Vi tror på kreativitet, innovasjon og personlig tilnærming i alt vi gjør.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Om;
