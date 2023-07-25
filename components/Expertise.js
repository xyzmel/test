import React from "react";
import { Title } from "./common/Title";

const Expertise = () => {
  return (
    <>
      <section className="expertise">
        <div className="container">
          <div className="heading-title">
            <Title title="Vår ekspertise" />
          </div>
          <div className="content">
            {" "}
            {/* Remove 'text-center' class */}
            <p>
              Vår ekspertise omfatter markedsføring, innholdsproduksjon og
              søkemotoroptimalisering, som spiller avgjørende roller i dagens
              digitale verden.
            </p>
            <br />
            <p>
              Med vår markedsføringsekspertise når vi ut til din målgruppe, øker
              synligheten av din bedrift og tiltrekker potensielle kunder. Vi
              utvikler skreddersydde markedsføringsstrategier for å maksimere
              din online tilstedeværelse og oppnå konkrete resultater.
            </p>
            <br />
            <p>
              Når det gjelder innholdsproduksjon, skaper vi engasjerende og
              relevant innhold som fanger interessen til dine kunder. Vi
              produserer innhold for din bedrift med hjelp av drone og kamera,
              og tilpasser det for å nå dine forretningsmål.
            </p>
            <br />
            <p>
              Vi forstår også hvor viktig det er å bli funnet på nettet. Vår
              ekspertise innen søkemotoroptimalisering hjelper deg med å øke
              synligheten i søkemotorer, forbedre rangeringen av din nettside og
              øke organisk trafikk til din bedrift.
            </p>
            <br />
            <p>
              Uansett hvilket område du trenger hjelp med, er vi dedikert til å
              skape en komplett digital strategi som gir deg en
              konkurransedyktig fordel og hjelper din bedrift til suksess i den
              digitale verden.
            </p>
          </div>
        </div>
      </section>
      <style jsx>{`
        .content {
          /* Add the same CSS styles here as in your previous code */
          /* For example, you can set the max-width and margin */
          max-width: 900px;
          margin: 0 auto;
        }

        @media (max-width: 400px) {
          /* Adjust styles for mobile devices */
          .content {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
};

export default Expertise;
