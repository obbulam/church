import { useEffect } from "react";
import IMG from "../img2/1.png";
import IMG1 from "../img2/2.png";
import IMG2 from "../img2/3.png";
import IMG3 from "../img2/4.png";
import IMG4 from "../img2/5.png";
import IMG5 from "../img2/6.png";
import IMG6 from "../img2/7.png";

const Messager = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const videoData = [
    {
      id: 1,
      src: IMG,
      linK: "https://www.youtube.com/live/v1-DyiSr_RU?si=9xryoVXRzDZJdmte",
      article:
        "Culte dominical – Un moment puissant de louange, d’adoration et de prédication de la Parole de Dieu.",
    },

    {
      id: 2,
      src: IMG1,
      linK: "https://www.youtube.com/live/58jKDok9F-A?si=kzfz5wPPWe1BkwgL",
      article:
        "Enseignement biblique – Approfondissement des Écritures et croissance spirituelle dans la foi chrétienne.",
    },

    {
      id: 3,
      src: IMG2,
      linK: "https://www.youtube.com/live/aTXldXUF6dA?si=eBVktjkJfNpS3i1Z",
      article:
        "Soirée de prière – Intercession, communion fraternelle et recherche de la présence du Saint-Esprit.",
    },

    {
      id: 4,
      src: IMG3,
      linK: "https://www.youtube.com/live/VbFE1rRcNFg?si=jfKtcoY-LlTTmPU7",
      article:
        "Conférence chrétienne – Message d’encouragement, témoignages et édification du corps de Christ.",
    },

    {
      id: 5,
      src: IMG4,
      linK: "https://www.youtube.com/live/-I94PukoWiY?si=7pYJIbdq9L1aDh7u",
      article:
        "Programme spécial – Célébration, chants spirituels et temps de reconnaissance envers Dieu.",
    },

    {
      id: 6,
      src: IMG5,
      linK: "https://www.youtube.com/live/sloeSBycMU4?si=I09p7Vf0bXDUSDFJ",
      article:
        "Séminaire de formation – Discipulat, leadership chrétien et engagement dans le service de l’église.",
    },

    {
      id: 7,
      src: IMG6,
      linK: "https://www.youtube.com/live/1bMdonG0r9o?si=tB5iwHXTbs7dKX2S",
      article:
        "Évangélisation – Partage de l’Évangile, mission et impact dans la communauté locale.",
    },
  ];

  return (
    <>
      <button className="go-back" onClick={() => window.history.back()}>
        ← Go Back
      </button>

      <div className="article">
        <h2>NOS MESSAGES</h2>

        <a
          href="https://www.youtube.com/live/wQMyaYrdiE0?si=HNiPwk7b5Ulari4g"
          className="featured-message"
        >
          <p>MISINGI YA WOKOVU</p>
          <small>Pst.Aron Balume</small>
          <p className="featured-description">
            Laissez-vous transformer, encourager et fortifier par un message
            inspiré qui bénira votre vie spirituelle.
          </p>
        </a>

        <div className="horizontal-scroll">
          {videoData.map((item) => (
            <VideoCard
              key={item.id}
              src={item.src}
              article={item.article}
              linK={item.linK}
              item={item}
            />
          ))}
        </div>
        <a
          className="see-more-btn"
          href="https://www.youtube.com/@8%C3%A8meCEPACUGANDAMISSIONKampalaC/streams"
          target="_blank"
          rel="noreferrer"
        >
          VOIR TOUS NOS MESSAGES
        </a>
      </div>
    </>
  );
};

export function VideoCard({ item }) {
  return (
    <div className="video-card">
      <a href={item.linK} target="_blank" rel="noreferrer">
        <img src={item.src} alt="video" />
      </a>

      <p>{item.article}</p>
    </div>
  );
}

export default Messager;
