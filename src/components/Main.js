import React from 'react';
import Card from './Card';
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
    </main>
);
}

export default Main;
