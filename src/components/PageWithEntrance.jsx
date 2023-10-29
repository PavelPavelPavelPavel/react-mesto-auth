import { Link } from "react-router-dom";

function PageWithEntrance ({title, children, buttonText, linkTo, capchaBtntext}) {
    
        return (
            <>
            <form className="popup__form popup__form_edit_signup"> 
             <h2 className="title">{title}</h2>
             <div className="popup__input-route">
                {children}
            </div>
            <button
                    type="submit"
                    className={`popup__button popup__button_theme_dark`}
                  >
                    {buttonText}
                  </button>
                  <Link to={linkTo} className="button-return button-return_place_popup">{capchaBtntext}</Link>
            </form>
            
            </>
        )
    }
    export default PageWithEntrance;
    
