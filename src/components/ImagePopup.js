function ImagePopup(props) {
  return (
    props.card
      ? <div onClick={props.onClose} className="popup popup_opened popup_type_image">
        <figure className="popup__figure">
          <button onClick={props.onClose} className="popup__close-button popup__close-button_type_image button" type="button"></button>
          <img className="popup__image" src={props.card.image} alt={props.card.title} />
          <figcaption className="popup__figcaption">{props.card.title}</figcaption>
        </figure>
      </div>
      : ''
  );
}

export default ImagePopup;
