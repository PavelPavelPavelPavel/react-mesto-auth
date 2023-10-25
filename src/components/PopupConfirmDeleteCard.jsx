import PopupWithForm from "./PopupWithForm";

function PopupConfirmDeleteCard({
  isOpen,
  onClose,
  onCardDelete,
  id,
  isLoadBtn,
}) {
  function handleSubmit() {
    onCardDelete(id);
  }

  return (
    <PopupWithForm
      onClose={onClose}
      isOpen={isOpen}
      name="delete-cards"
      title="Вы уверены?"
      buttonText={isLoadBtn || "Да"}
      onSubmit={handleSubmit}
    />
  );
}

export default PopupConfirmDeleteCard;
