import React from 'react';

type TProps = {
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const BookmarkButton: React.FC<TProps> = ({ isActive, onClick }) => (
  <button
    className={`property__bookmark-button button ${
      isActive ? 'property__bookmark-button--active' : ''
    }`}
    type="button"
    onClick={onClick}
  >
    <svg className="property__bookmark-icon" width="31" height="33">
      <use xlinkHref="#icon-bookmark" />
    </svg>
  </button>
);

export default BookmarkButton;
