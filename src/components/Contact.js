import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import IMG from "../img/img/43.jpeg";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2848g8v",
        "template_9m6yqij",
        form.current,
        "pTYhcNCKfDJe26coI",
      )
      .then(
        () => {
          alert("Message envoyé !");
        },
        (error) => {
          alert("Erreur...");
          console.log(error.text);
        },
      );
  };

  return (
    <>
      <article className="contact-section">
        <h3>CONTACT</h3>

        <p>
          Vous habitez <strong>dans la ville de Kampala</strong> et vous avez
          besoin d'aide ? Nous sommes là pour vous.
        </p>

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label>Nom:</label>
            <input type="text" name="user_name" placeholder="Votre nom" />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="user_email" placeholder="Votre email" />
          </div>

          <div className="form-group">
            <label>Cellulaire:</label>
            <input type="tel" name="user_phone" placeholder="Votre numéro" />
          </div>

          <button type="submit">Envoyer</button>
        </form>
      </article>
      <div className="Lastbackground">
        <img src={IMG} alt="CEPAC Church" />

        <div className="Lastbackground-content">
          <h4>IL Y A UNE PLACE POUR TOI À CEPAC</h4>
          <p>ENTEBBE ROAD OPPOSITE PETROCY</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
