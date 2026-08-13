import React from "react";
import Header from "../components/Header";
import "../style.css";

const Leaders = () => {
  const pictureOfLeader = [
    {
      id: 1,
      src: "/img/15.jpeg",
      name: "JOSEPH MUKENGE",
      titre: "PASTEUR FONDATEUR",
    },
    {
      id: 2,
      src: "/img/1.jpeg",
      name: "AARON BALUME",
      titre: "RESPONSABLE INTERCESSION",
    },
    {
      id: 3,
      src: "/img/8.jpeg",
      name: "MUKOBELWA MUYENGO JOHN",
      titre: "COORDINATEUR CULTE MATINAL",
    },
    {
      id: 4,
      src: "/img/4.jpeg",
      name: "RIPHIN MBILIZI",
      titre: "PASTEUR CEPAC KIDS",
    },
    {
      id: 5,
      src: "/img/5.jpeg",
      name: "ISAYA MULUME",
      titre: "PASTEUR ACCEUIL",
    },
    {
      id: 6,
      src: "/img/6.jpeg",
      name: "JOHN KYALONDAWA",
      titre: "RESPONSABLE LOUANGE",
    },
    {
      id: 7,
      src: "/img/9.jpeg",
      name: "MUBIRU RAMAZANI",
      titre: "EVANGELISTE",
    },
    {
      id: 8,
      src: "/img/10.jpeg",
      name: "DANIEL MULOMBA",
      titre: "RESPONSABLE JEUNESSE (15-25)",
    },
    {
      id: 9,
      src: "/img/7.jpeg",
      name: "JACK MAN.",
      titre: "DIRECTEUR MUSICAL",
    },
  ];

  return (
    <>
      <Header />
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

export default Leaders;
