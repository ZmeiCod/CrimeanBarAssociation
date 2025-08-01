import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import civilIcon from "./../../assets/icons/civilIcon.svg";
import economIcon from "./../../assets/icons/economicIcon.svg";
import estateIcon from "./../../assets/icons/estateIcon.svg";
import familyIcon from "./../../assets/icons/familyIcon.svg";
import jobIcon from "./../../assets/icons/jobIcon.svg";
import dataIcon from "./../../assets/icons/personaldataIcon.svg";
import "./../../css/sections/homepage/Expertise.css";

export default function Expertise() {
  return (
    <section
      className="expertiseSection"
      id="expertise"
      aria-labelledby="expertise-heading"
      role="region"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 id="expertise-heading" className="expertiseTitle subheading">
          Области специализации
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="gridSection">
          {[
            {
              icon: civilIcon,
              alt: "Ikona przedstawiająca prawo cywilne",
              to: "/prawo-cywilne",
              title: "Гражданское право",
              description:
                "Представление клиентов по гражданским делам в суде, рассмотрение претензий и защита личных прав",
            },
            {
              icon: familyIcon,
              alt: "Ikona przedstawiająca prawo rodzinne",
              to: "/prawo-rodzinne",
              title: "Семейное право",
              description:
                "Помощь при разводе, установлении опеки над детьми, алиментов и разделе имущества",
            },
            {
              icon: economIcon,
              alt: "Ikona przedstawiająca prawo gospodarcze",
              to: "/prawo-gospodarcze",
              title: "Какое то право",
              description: "Краткое описание",
            },
            {
              icon: jobIcon,
              alt: "Ikona przedstawiająca prawo pracy",
              to: "/prawo-pracy",
              title: "Уголовное право",
              description:
                "Помощь в защите подозреваемого/обвиняемого или представление интересов постродавшей стороны",
            },
            {
              icon: estateIcon,
              alt: "Ikona przedstawiająca prawo nieruchomości",
              to: "/prawo-nieruchomosci",
              title: "Ещё одна область",
              description: "Ахуительный текст",
            },
            {
              icon: dataIcon,
              alt: "Ikona przedstawiająca ochronę danych osobowych",
              to: "/prawo-danych",
              title: "Не шарю что ещё",
              description: "Потом придумаем",
            },
          ].map((item, index) => (
            <Link className="gridElement" key={index} to={item.to}>
              <img className="gridImg" src={item.icon} alt={item.alt} />
              <h3 className="lawTitle">{item.title}</h3>
              <p className="lawDescription">{item.description}</p>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
