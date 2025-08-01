import { Link } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import "./../css/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="footerSection footerInfo">
          <img className="footerLogo" src={Logo} alt="Logo kancelarii" />
          {/* <p className="footerDescription">
            Świadczę usługi prawne w biurze oraz zdalnie, dostosowując się do
            potrzeb klientów w całym kraju.
          </p> */}
        </div>

        <div className="footerSection footerContact">
          <h3 className="footerHeading">Контактная информация</h3>
          <address className="footerAddress">
            <p>
              Почта: <a href="mailto:martyna@gmail.com">nd-crimea@mail.ru</a>
            </p>
            <p>
              Телефон: <a href="tel:+123456789">+7(978)123-45-67</a>
            </p>
          </address>
        </div>

        <div className="footerSection footerSpecialties">
          <h3 className="footerHeading">Дополнительны ссылки</h3>
          <nav aria-label="Obszary specjalizacji">
            <ul className="footerLinks">
              <li>
                <Link to="/prawo-cywilne">Адвокатская палата РК</Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>

      <div className="footerBottom">
        <p className="footerCredit">Разработано ZGroup</p>
      </div>
    </footer>
  );
}
