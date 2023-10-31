import {useState} from 'react';
import PageWithEntrance from "./PageWithEntrance";


function Login({onUserLogin}) {
  const [logEmail, setLogEmail] = useState('');
  const [logPass, setLogPass] = useState('');
  

  function handleLogin() {
    onUserLogin({
      email: logEmail, 
      password: logPass})
      setLogEmail("");
      setLogPass("");
  }
  return (
    <PageWithEntrance 
        onSubmit={handleLogin}
        title={"Вход"}
        buttonText={"Войти"}
        linkTo={""} 
        name={'signшт'}
        capchaBtntext={""}
       >
      <input
        id="input-LogEmail"
        value={logEmail}
        onChange={(e) => setLogEmail(e.target.value)}
        type="email"
        name="logemail"
        required
        className="popup__value popup__value_type_sign"
        placeholder="Email"
      />

      <input
        id="input-LogPassword"
        value={logPass}
        onChange={(e) => setLogPass(e.target.value)}
        type="password"
        name="logpassword"
        required
        className="popup__value popup__value_type_sign"
        placeholder="Пароль"
      />
    </PageWithEntrance>
  );
}
export default Login;
