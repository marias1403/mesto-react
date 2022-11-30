import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatar = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(avatar);
    props.onUpdateAvatar({
      avatar: avatar.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      name={'avatar'}
      title={'Обновить аватар'}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        id="avatar"
        type="url"
        name="avatar"
        className="popup__input popup__input_type_avatar"
        placeholder="Ссылка на фото профиля"
        required
        aria-label="Ссылка"
        ref={avatar}/>
      <span id="avatar-error" className="popup__error" />
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
