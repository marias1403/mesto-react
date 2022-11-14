function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <figure className="popup__figure">
        <button className="popup__close-button popup__close-button_type_image button" type="button"></button>
        <img className="popup__image" />
        <figcaption className="popup__figcaption"></figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
