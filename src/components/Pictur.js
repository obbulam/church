function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-section">
          <h4>ÉGLISE 8ème CEPAC</h4>
          <p>Retrouvez-nous :</p>

          <ul>
            <li>
              Le <strong>dimanche à 10 H</strong> à Chibuye pour notre culte de
              célébration !
            </li>
            <li>
              Le <strong>mardi à 19 H</strong> : mardi de l’Esprit / de la
              Parole
            </li>
            <li>
              Le <strong>vendredi à 19 H</strong> : Intercession & Adoration
            </li>
          </ul>

          <div className="social-icons">
            <a href="https://www.facebook.com/KampalaCentralChurch/?locale=fr_FR">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.youtube.com/@8%C3%A8meCEPACUGANDAMISSIONKampalaC">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.tiktok.com/@8cepac.kampala.ce">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@8cepac.kampala.ce">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-section">
          <h4>ADRESSE DES CÉLÉBRATIONS</h4>
          <ul>
            <li>Espaces INNOV</li>
            <li>Entebbe Road</li>
            <li>Opposite Chibuye</li>
            <li>Uganda</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-section">
          <h4>CONTACT</h4>
          <ul>
            <li>Kampala : chibuye@eglise8emecepac.com</li>
            <li>Ailleurs : contact@eglise8emecepac.com</li>
            <li>Partagez votre témoignage 🙏</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
