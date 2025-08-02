import { motion } from "framer-motion";
import AboutImg from "./../assets/About.png";
import "./../css/sections/homepage/About.css";

export default function About() {
  return (
    <div className="aboutSection" id="about">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img className="aboutImg" src={AboutImg} alt="О нас" />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="aboutText__section"
      >
        <h1 className="h2About">
          Крымская коллегия адвокатов "Трушляков, Панченко и партнеры"
        </h1>
        <p className="aboutText">
          Наша коллегия была основана с убеждением, что права и интересы каждого
          клиента заслуживают защиты и внимания. Мы понимаем, что правовые
          вопросы могут быть стрессовыми и запутанными, поэтому мы готовы
          предложить профессиональное руководство и поддержку на каждом этапе
          сотрудничества.
        </p>
        <hr className="hrElement" />
        <h4 className="educationTitle">Наша практика</h4>
        <p className="educationAbout">
          Мы предлагаем широкий спектр юридических услуг, включая консультации,
          представительство в суде, сопровождение бизнеса и правовое
          регулирование сделок. Наша команда специализируется на гражданском,
          уголовном и административном праве.
        </p>
        <h4 className="educationTitle">Почему мы?</h4>
        <p className="educationAbout">
          Выбирая нас, вы выбираете надёжность, профессионализм и стремление к
          результату. Доверьте свои юридические вопросы команде, которая
          заботится о вас и ваших интересах!
          <br />
        </p>
      </motion.div>
    </div>
  );
}
