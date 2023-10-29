import { useState } from "react";
import success from "../images/success.svg";
import reject from "../images/reject.svg";

function InfoTooltip() {
const [isOpen, setIsOpen] = useState(false);
const successText = 'Вы успешно зарегистрировались!';
const rejectText = "Что-то пошло не так! Попробуйте ещё раз.";
    
    
return(
    <>
      <div
        className={`popup ${isOpen ? "popup_opened" : ""}
        `}
      >
        <div className="popup__container">
          <button
            aria-label="Кнопка закрытия попапа"
            type="button"
            className="popup__button-close"
            // onClick={onClose}
          ></button>
          <div className={`popup__form`}>
            <form
              className="popup__input-wrapper popup__input-profile"
            >
                <img className="popup__sign" src={reject}  alt=""/>
                <p className="popup__sign-text">{rejectText}</p>
            </form>
          </div>
        </div>
      </div>
    </>
)
}

export default InfoTooltip;