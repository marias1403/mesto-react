import React from 'react';
import Card from './Card';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then(user => {
      setUserName(user.name);
      setUserDescription(user.about);
      setUserAvatar(user.avatar);
    })
      .catch((err) => {
      console.log(err);
    })
  })

  React.useEffect(() => {
    api.getInitialsCards()
      .then(data => {
        setCards(data.map((cardData) => ({
          idCard: cardData._id,
          image: cardData.link,
          title: cardData.name,
          likes: cardData.likes,
          owner: cardData.owner._id,
        })))
        console.log(setCards);
    })
      .catch((err) => {
        console.log(err);
      })
  })

  return (
    <main className="content page__content">
      <section className="profile section content__section">
        <div onClick={props.onEditAvatar} className="profile__avatar-overlay">
          <img src={userAvatar} className="profile__avatar" alt="Аватарка"/>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button onClick={props.onEditProfile} className="profile__edit-button edit-button button"
                  type="button"></button>
          <p className="profile__status">{userDescription}</p>
        </div>
        <button onClick={props.onAddPlace} className="profile__add-button add-button button" type="button"></button>
      </section>

      <section className="section content__section">
        <ul className="elements page__elements">
          {cards.map((card) => <Card key={card.idCard} card={card} onCardClick={props.onCardClick} />)}
        </ul>
      </section>

      <PopupWithForm
        isOpen={props.isEditProfilePopupOpen}
        name={'profile'}
        title={'Редактировать профиль'}
        onClose={props.onClose}
      >
        <input id="name" type="text" name="name" minLength="2" maxLength="40" className="popup__input popup__input_type_name" placeholder="Ваше имя" required aria-label="Имя"/>
        <span id="name-error" className="popup__error" />
        <input id="status" type="text" name="status" minLength="2" maxLength="200" className="popup__input popup__input_type_status" placeholder="Ваша должность" required aria-label="Статус"/>
        <span id="status-error" className="popup__error"/>
      </PopupWithForm>

      <PopupWithForm
        isOpen={props.isAddPlacePopupOpen}
        name={'add-card'}
        title={'Новое место'}
        onClose={props.onClose}
      >
        <input id="title" type="text" name="title" minLength="2" maxLength="30" className="popup__input popup__input_type_image-title" placeholder="Название" required aria-label="Название" />
        <span id="title-error" className="popup__error" />
        <input id="link" type="url" name="link" className="popup__input popup__input_type_image-link" placeholder="Ссылка на картинку" required aria-label="Ссылка" />
        <span id="link-error" className="popup__error" />
      </PopupWithForm>

      <PopupWithForm
        isOpen={props.isEditAvatarPopupOpen}
        name={'avatar'}
        title={'Обновить аватар'}
        onClose={props.onClose}
      >
        <input id="avatar" type="url" name="avatar" className="popup__input popup__input_type_avatar" placeholder="Ссылка на фото профиля" required aria-label="Ссылка" />
        <span id="avatar-error" className="popup__error" />
      </PopupWithForm>

      <ImagePopup
        card={props.selectedCard}
        onClose={props.onClose}
      />
    </main>
);
}

export default Main;
