
import PageWithEntrance from "./PageWithEntrance";

function Register() {
  return (
    <PageWithEntrance 
    
      title={"Вход"}
      buttonText={"Войти"}
       linkTo={""} 
       capchaBtntext={""}
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
export default Register;

