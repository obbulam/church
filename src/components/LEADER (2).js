import React from "react";
import Img from "../components/Leaders/15.jpeg";
import Img1 from "../components/Leaders/1.jpeg";
import Img2 from "../components/Leaders/8.jpeg";
import Img3 from "../components/Leaders/4.jpeg";
import Img4 from "../components/Leaders/5.jpeg";
import Img5 from "../components/Leaders/6.jpeg";
import Img6 from "../components/Leaders/9.jpeg";
import Img7 from "../components/Leaders/10.jpeg";
import Img8 from "../components/Leaders/7.jpeg";

const Leader = () => {
  const pictureOfLeader = [
    {
      id: 1,
      src: Img,
      name: "JOSEPH MUKENGE",
      titre: "PASTEUR FONDATEUR",
    },
    {
      id: 2,
      src: Img1,
      name: "AARON BALUME",
      titre: "RESPONSABLE INTERCESSION",
    },
    {
      id: 3,
      src: Img2,
      name: "MUKOBELWA MUYENGO JOHN",
      titre: "COORDINATEUR CULTE MATINAL",
    },
    {
      id: 4,
      src: Img3,
      name: "RIPHIN MBILIZI",
      titre: "PASTEUR CEPAC KIDS",
    },
    {
      id: 5,
      src: Img4,
      name: "ISAYA MULUME",
      titre: "PASTEUR ACCEUIL",
    },
    {
      id: 6,
      src: Img5,
      name: "JOHN KYALONDAWA",
      titre: "RESPONSABLE MASSCHOIR",
    },
    {
      id: 7,
      src: Img6,
      name: "MUBIRU RAMAZANI",
      titre: "EVANGELISTE",
    },
    {
      id: 8,
      src: Img7,
      name: "DANIEL MULOMBA",
      titre: "RESPONSABLE JEUNESSE (15-25)",
    },
    {
      id: 9,
      src: Img8,
      name: "JACK MAN.",
      titre: "DIRECTEUR MUSICAL",
    },
  ];

  return (
    <>
      <div className="leaders-section">
        <h2>Nos Leaders</h2>

        <p>
          Rencontrez l'équipe ministérielle qui prend soin de la famille CEPAC.
        </p>

        <div className="leaders-grid">
          {pictureOfLeader.map((item) => (
            <div className="leader-card" key={item.id}>
              <img src={item.src} alt={item.name} />
              <div className="leader-info">
                <small>{item.titre}</small>
                <h3>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Leader;
