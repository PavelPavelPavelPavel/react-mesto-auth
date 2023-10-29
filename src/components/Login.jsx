import { Link } from "react-router-dom";
import PageWithEntrance from "./PageWithEntrance";

function Login() {
  return (
    <PageWithEntrance 
    
      title={"Регистрация"}
      buttonText={"Зарегистрироваться"}
       linkTo={"/sign-in"} 
       capchaBtntext={"Уже зарегистрированы? Войти"}
       >
      <input
        id="input-email"
        //value={email}
        //onChange={(e) => setName(e.target.value)}
        type="email"
        name="email"
        required
        className="popup__value popup__value_field_email"
        placeholder="Email"
      />

      <input
        //id="input-password"
        //value={password}
        //onChange={(e) => setDescription(e.target.value)}
        type="text"
        name="password"
        required
        className="popup__value popup__value_field_password"
        placeholder="Пароль"
      />
    </PageWithEntrance>
  );
}
export default Login;
