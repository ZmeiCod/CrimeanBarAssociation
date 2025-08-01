import Logo from "./../assets/logo.svg";
import "./../css/components/Error.css";

export default function Error() {
  return (
    <div className="error">
      <img className="errorLogo" src={Logo} alt="logo"/>
      <p className="errorText">Такая страница не найдена, пожалуйста вернитесь на главную.</p>
    </div>
  );
}
