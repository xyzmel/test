import React from "react";
import { Title } from "./common/Title";

const CollaborationSection = () => {
  return (
    <>
      <section className="collaboration-section">
        <div className="container">
          <div className="heading-title">
            <Title title="Hvordan vi samarbeider" />
          </div>
          <div className="collaboration-content">
            <p>
              Vi setter stor pris på våre kunders unike behov og ønsker, og
              samarbeider tett med dere for å forstå virksomhetens mål og
              visjon. Før vi starter prosjektet, utfører vi grundig forskning og
              analyser for å sikre at våre løsninger er skreddersydd for å møte
              deres behov.
            </p>
            <br />
            <p>
              Gjennom hele samarbeidsprosessen holder vi dere informert og
              involvert, og vi setter stor vekt på å motta tilbakemeldinger og
              innspill underveis. Vår åpne kommunikasjonskanal sikrer at vi
              alltid er på samme side og at prosjektet beveger seg i riktig
              retning.
            </p>
            <p>
              Vårt dedikerte team av fagfolk arbeider med entusiasme for å
              levere høykvalitets løsninger som overstiger forventningene. Vi
              holder også prosjektfrister nøye for å sikre at leveransen er i
              tide og oppfyller de avtalte milepælene.
            </p>
          </div>
        </div>
      </section>
      <section className="progress-section">
        <div className="container">
          <div className="heading-title">
            <Title title="Fremgang" />
          </div>
          <div className="progress-content">
            <p>
              Gjennom hele prosjektet vil vi jevnlig oppdatere dere om
              fremdriften og vise dere vårt arbeid i sanntid. Vi forstår
              viktigheten av å holde dere informert om prosjektets status og
              sørge for at vi oppfyller deres forventninger.
            </p>
            <br />
            <p>
              Vi ønsker å sikre at dere føler dere trygge og komfortable med
              prosjektets retning, og derfor prioriterer vi klare
              kommunikasjonskanaler og åpen dialog. Hvis det oppstår
              utfordringer eller endringer underveis, vil vi arbeide sammen med
              dere for å finne de beste løsningene.
            </p>
            <br />
            <p>
              Målet er å skape en positiv og effektiv arbeidsflyt, slik at
              prosjektet blir en suksess. Vi tror på å bygge langsiktige
              relasjoner med våre kunder, og vi vil gå langt for å sikre deres
              tilfredshet med vårt arbeid.
            </p>
          </div>
        </div>
      </section>
      <section className="progress-section">
        <div className="container">
          <div className="heading-title">
            <Title title="Hvem vi er" />
          </div>
          <div className="progress-content">
            <p>
            Fra ydmyke røtter i Gudbrandsdalen startet vi som et dronefirma. Med to dedikerte personer bak roret, skapte vi fantastiske luftopptak og bilder, men vår lidenskap for det digitale vokste, og vi utvidet oss til å bli et fullverdig digitalt byrå som betjener Innlandet.
            </p>
            <br />
            <p>
            Vi tilbyr innholdsproduksjon, markedsføring, og mer. Selv med denne utviklingen glemmer vi aldri våre røtter i Gudbrandsdalen, og vår dedikasjon til førsteklasses tjenester forblir uendret.
            </p>
            <br />
            <p>
            Vi er stolte av vår reise, og ser frem til å skape bemerkelsesverdige digitale opplevelser for våre kunder i Innlandet videre. Vårt mål er å være en pålitelig partner som skaper verdi og suksess for alle våre kunder.
            </p>
          </div>
        </div>
      </section>
      <style jsx>{`
        .collaboration-content,
        .progress-content {
          /* Add the same CSS styles here as in your previous code */
          /* For example, you can set the max-width and margin */
          max-width: 700px;
          margin: 0 auto;
        }

        @media screen and (min-width: 400px) {
          /* Adjust styles for larger screens */
          .collaboration-content,
          .progress-content {
            text-align: left;
          }
        }

        @media screen and (min-width: 1024px) {
          /* Further adjust styles for even larger screens */
          .collaboration-content,
          .progress-content {
            max-width: 900px;
          }
        }
      `}</style>
    </>
  );
};

export default CollaborationSection;
