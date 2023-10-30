import { Link } from "react-router-dom";

function PageWithEntrance ({title, children, buttonText, linkTo, capchaBtntext, name, onSubmit}) {
        
  function handleSubmit(e) {
        e.preventDefault();
        onSubmit();
        //console.log(name)
        }

        return (
            <>
            <form className={`popup__form popup__form_edit_sign popup__form_edit_${name}`} onSubmit={handleSubmit} name={`${name}`}> 
             <h2 className="popup__title-sign">{title}</h2>
             <div className={`popup__input-route popup__input-${name}`}>
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
    
