import {useState} from 'react';
import PageWithEntrance from "./PageWithEntrance";
import { useLocation } from 'react-router-dom';

function Register({onUserSubmit}) {
  const [regEmail, setRegEmail] = useState('');
  const [regPass, setRegPass] = useState('');
  const location = useLocation(); 
 
  function handleRegister() {
    onUserSubmit({
      password: regPass,
      email: regEmail
    })
  }
  
  return (
    <PageWithEntrance 
        onSubmit={handleRegister}
        title={"Регистрация"}
        buttonText={"Зарегистрироваться"}
        linkTo={"/sign-in"} 
        name={'signup'}
        capchaBtntext={"Уже зарегистрированы? Войти"}
       >
      <input
        id="input-regEmail"
        value={regEmail}
        onChange={(e) => setRegEmail(e.target.value)}
        type="email"
        name="regemail"
        required
        className="popup__value popup__value_type_sign"
        placeholder="Email"
      />

      <input
        id="input-regPassword"
        value={regPass}
        onChange={(e) => setRegPass(e.target.value)}
        type="password"
        name="regpassword"
        required
        className="popup__value popup__value_type_sign"
        placeholder="Пароль"
      />
    </PageWithEntrance>
  );
}
export default Register;

