import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <div className="page__container">

        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
      </div>
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        name={'profile'}
        title={'Редактировать профиль'}
        onClose={closeAllPopups}
      >
        <input
          id="name"
          type="text"
          name="name"
          minLength="2"
          maxLength="40"
          className="popup__input popup__input_type_name"
          placeholder="Ваше имя"
          required
          aria-label="Имя"/>
        <span id="name-error" className="popup__error" />
        <input
          id="status"
          type="text"
          name="status"
          minLength="2"
          maxLength="200"
          className="popup__input popup__input_type_status"
          placeholder="Ваша должность"
          required
          aria-label="Статус"/>
        <span id="status-error" className="popup__error"/>
      </PopupWithForm>

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        name={'add-card'}
        title={'Новое место'}
        onClose={closeAllPopups}
      >
        <input
          id="title"
          type="text"
          name="title"
          minLength="2"
          maxLength="30"
          className="popup__input popup__input_type_image-title"
          placeholder="Название"
          required
          aria-label="Название" />
        <span id="title-error" className="popup__error" />
        <input
          id="link"
          type="url"
          name="link"
          className="popup__input popup__input_type_image-link"
          placeholder="Ссылка на картинку"
          required
          aria-label="Ссылка" />
        <span id="link-error" className="popup__error" />
      </PopupWithForm>

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        name={'avatar'}
        title={'Обновить аватар'}
        onClose={closeAllPopups}
      >
        <input
          id="avatar"
          type="url"
          name="avatar"
          className="popup__input popup__input_type_avatar"
          placeholder="Ссылка на фото профиля"
          required
          aria-label="Ссылка" />
        <span id="avatar-error" className="popup__error" />
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
