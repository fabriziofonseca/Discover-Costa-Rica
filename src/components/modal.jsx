const Modal = ({ isOpen, onClose, place, onFavoriteToggle, isFavorite }) => {
  if (!isOpen || !place) return null;

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const starIcon = (isFav) => (
    <svg 
      className={`h-6 w-6 ${isFav ? 'text-yellow-500' : 'text-gray-300'}`} 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path d="M11.049 2.927c-.396-.802-1.702-.802-2.098 0L5.658 6.342l-3.612.525c-.845.123-1.184 1.158-.571 1.752l2.614 2.549-0.615 3.592c-.113.66.585 1.165 1.196 0.855l3.226-1.696 3.225 1.696c.611.31 1.309-.195 1.196-0.855l-0.615-3.592 2.614-2.549c.613-.594.274-1.629-.571-1.752l-3.612-.525L11.049 2.927z"></path>
    </svg>
  );

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content bg-white">
        <button className="close-button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="modal-body">
          <div className="text-section">
            <p className="modal-title">{place.title}</p>
            <button
              onClick={() => onFavoriteToggle(place)}
              className="favorite-button"
            >
            
            </button>
            <p className="modal-description">{place.long_description}</p>
          </div>
          <div className="image-section">
            <img src={place.img} alt={place.title} className="modal-image" />
            <img src={place.img2} alt={place.title} className="modal-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
