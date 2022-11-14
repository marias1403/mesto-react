function Card(props) {
  return (
    <li className="elements__element">
      <button className="elements__delete button" type="button"></button>
      <img className="elements__image" src={props.image} alt={props.title} />
        <div className="elements__description">
          <h2 className="elements__title">{props.title}</h2>
          <div className="elements__like-wrapper">
            <button className="elements__like button" type="button"></button>
            <p className="elements__like-counter">{props.likes.length}</p>
          </div>
        </div>
    </li>
  );
}

export default Card;
