import { useState, useEffect } from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupConfirmDeleteCard from "./PopupConfirmDeleteCard";
import AddPlacePopup from "./AddPlacePopup";
import PopupEditProfile from "./PopupEditProfile";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";

function App() {
  const [cardId, setCardId] = useState("");
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isConfirmDeleteCardPopupOpen, setIsConfirmDeleteCardPopupOpen] =
    useState(false);
  const [selectedCard, setSelectedCard] = useState({
    state: false,
    name: " ",
    link: " ",
  });
  const [currentUser, setCurrentUser] = useState({ name: "", about: "" });
  const [cards, setCards] = useState([]);
  const [btnTextLoad, setBtnTextLoad] = useState("");
  useEffect(() => {
    Promise.all([api.getInfo(), api.getInfoCards()])
      .then(([res, card]) => {
        setCurrentUser(res);
        setCards(card);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleUpdateUser({ name, about }) {
    setBtnTextLoad("Сохранение...");
    api
      .setUserData(name, about)
      .then((res) => {
        setCurrentUser(res);
        setIsEditProfilePopupOpen(false);
      })

      .catch((err) => console.log(err))
      .finally(() => {
        setBtnTextLoad("");
      });
  }

  function handleAddPlaceSubmit(newCard, placeRef, linkRef) {
    setBtnTextLoad("Создаём...");
    api
      .setNewCard(newCard.link, newCard.name)
      .then((res) => {
        setCards([res, ...cards]);
        setIsAddPlacePopupOpen(false);
        placeRef.current.value = "";
        linkRef.current.value = "";
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setBtnTextLoad("");
      });
  }

  function handleApiLikeRequest(id, newCard) {
    setCards((state) => state.map((c) => (c._id === id ? newCard : c)));
  }

  function handleCardLike(id, isLiked) {
    api
      .addLikeToCard(id, !isLiked)
      .then((newCard) => {
        handleApiLikeRequest(id, newCard);
      })
      .catch((err) => console.log(err));
  }

  function handleCardDislike(id, isLiked) {
    api
      .deleteResponseLike(id, !isLiked)
      .then((newCard) => {
        handleApiLikeRequest(id, newCard);
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(id) {
    setBtnTextLoad("Удаляем...");
    api
      .deleteResponse(id)
      .then(() => {
        const res = cards.filter((card) => {
          return card._id !== id;
        });
        setCards(res);
        setIsConfirmDeleteCardPopupOpen(false);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setBtnTextLoad("");
      });
  }

  function handleCardClick({ name, link }) {
    setSelectedCard({
      state: true,
      name: `${name}`,
      link: `${link}`,
    });
  }

  function handleUpdateAvatar({ avatar }, avatarRef) {
    setBtnTextLoad("Сохранение...");
    api
      .setUserAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        setIsEditAvatarPopupOpen(false);
        avatarRef.current.value = "";
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setBtnTextLoad("");
      });
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsConfirmDeleteCardPopupOpen(false);
    setSelectedCard({
      state: false,
      name: " ",
      link: " ",
    });
  }
  function handleConfirmDeletePopupOpen(id) {
    setIsConfirmDeleteCardPopupOpen(true);
    setCardId(id);
  }

  return (
    <>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          cards,
          handleCardClick,
        }}
      >
        <div className="App">
          <div className="main">
            <div className="page">
              <Header />
              <Main
                onAddPlace={setIsAddPlacePopupOpen}
                onEditAvatar={setIsEditAvatarPopupOpen}
                onEditProfile={setIsEditProfilePopupOpen}
                onCardLike={handleCardLike}
                onCardDisLike={handleCardDislike}
                cards={cards}
                onConfirmPopup={handleConfirmDeletePopupOpen}
              />
              <Footer />
            </div>
          </div>
          <PopupEditAvatar
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
            isLoadBtn={btnTextLoad}
          />
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
            isLoadBtn={btnTextLoad}
          />
          <PopupEditProfile
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
            isLoadBtn={btnTextLoad}
          />
          <PopupConfirmDeleteCard
            isOpen={isConfirmDeleteCardPopupOpen}
            onClose={closeAllPopups}
            onCardDelete={handleCardDelete}
            id={cardId}
            isLoadBtn={btnTextLoad}
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
