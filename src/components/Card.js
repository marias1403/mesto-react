function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="elements__element">
      <button className="elements__delete button" type="button"></button>
      <img onClick={handleClick} className="elements__image" src={props.card.image} alt={props.card.title} />
        <div className="elements__description">
          <h2 className="elements__title">{props.card.title}</h2>
          <div className="elements__like-wrapper">
            <button className="elements__like button" type="button"></button>
            <p className="elements__like-counter">{props.card.likes.length}</p>
          </div>
        </div>
    </li>
  );
}

export default Card;
