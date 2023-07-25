import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { BiUserCircle } from "react-icons/bi";
import { FiHeadphones, FiHelpCircle } from "react-icons/fi";
import { Title, TitleSm } from "@/components/common/Title";

const Kontakt = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const formRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace these values with your own emailjs credentials
    const serviceID = "service_ng1s37j";
    const templateID = "template_oyoybfe";
    const userID = "rvQcbsOQqp7JZbFLZ";

    // Send the email using emailjs
    emailjs
      .sendForm(serviceID, templateID, formRef.current, userID)
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Handle success, reset the form, or show a success message
        // For example, you can reset the form after successful submission:
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        // Handle error or show an error message
      });

    setIsEmailSent(true);
  };

  return (
    <>
      <section className="contact bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="KONTAKT" /> <br />
            <br />
            <Title title="La oss komme i gang!" className="title-bg" />
          </div>
          <div className="content py flex1">
            <div className="left w-30">
              <div className="contact-deatils">
                <div className="box">
                  <FiHeadphones size={30} className="icons" />
                  <h3>+47 958 30 043</h3>
                  <span>Ring oss: Man - Fre 09 - 18</span>
                </div>

                <div className="box">
                  <FiHelpCircle size={30} className="icons" />
                  <h3>post@kvartum.no</h3>
                  <span>Ta gjerne kontakt når som helst!</span>
                </div>
                <div className="box">
                  <BiUserCircle size={30} className="icons" />
                  <h3>kjetil@kvartum.no</h3>
                  <span>Jobb i Kvartum</span>
                </div>
              </div>
            </div>
            <div className="right w-70">
              <TitleSm title="Skriv en hendvendelse" />
              <p className="desc-p">
                Har du spørsmål? Ideer? Fyll ut skjemaet nedenfor for å få et
                svar!{" "}
              </p>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid-2">
                  <div className="inputs">
                    <span>Fornavn *</span>
                    <input type="text" name="firstName" required />
                  </div>
                  <div className="inputs">
                    <span>Etternavn *</span>
                    <input type="text" name="lastName" required />
                  </div>
                </div>
                <div className="grid-2">
                  <div className="inputs">
                    <span>E-post *</span>
                    <input type="text" name="email" required />
                  </div>
                  <div className="inputs">
                    <span>Bedrift</span>
                    <input type="text" name="company" />
                  </div>
                </div>
                <div className="inputs">
                  <span>Fortell litt om prosjektet ditt *</span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    required
                    placeholder="Skriv her..."
                  ></textarea>
                </div>
                <button type="submit" className="button-primary">
                  Send
                </button>
                {isEmailSent && <p>Din melding er sendt!</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
