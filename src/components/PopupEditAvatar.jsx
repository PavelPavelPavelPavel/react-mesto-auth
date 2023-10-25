import PopupWithForm from "./PopupWithForm";
import React from "react";

import { useRef } from "react";

function PopupEditAvatar({ isOpen, onClose, onUpdateAvatar, isLoadBtn }) {
  const avatarRef = useRef(null);

  function handleSubmit() {
    onUpdateAvatar(
      {
        avatar: avatarRef.current.value,
      },
      avatarRef
    );
  }

  function handleClose() {
    onClose();
    avatarRef.current.value = "";
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      isLoadBtn={isLoadBtn}
    >
      <input
        id="input-url-avatar"
        type="url"
        name="link"
        ref={avatarRef}
        required
        className="popup__value popup__value_field_url"
        placeholder="URL"
      />
      <span id="input-url-avatar-error" className="popup__error"></span>
    </PopupWithForm>
  );
}

export default PopupEditAvatar;
