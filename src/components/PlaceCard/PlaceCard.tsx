import React from 'react';
import { TOffer } from 'src/ducks/hotels/hotelsModels';
import { useHistory } from 'react-router-dom';

type TProps = {
  offer: TOffer;
  setActiveOffer?: (offer: TOffer) => void;
  toggleFavoriteStatus: (id: number, status: 1 | 0) => void;
  isUserAuth: boolean;
};

const PlaceCard: React.FC<TProps> = ({
  offer,
  toggleFavoriteStatus,
  setActiveOffer,
  isUserAuth,
}) => {
  const history = useHistory();

  return (
    <article className="cities__place-card place-card">
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a
          className="place-card__link"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();

            setActiveOffer(offer);
          }}
        >
          <img
            className="place-card__image"
            src={offer.previewImage}
            width="260"
            height="200"
            alt="Place preview"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              &euro;
              {offer.price}
            </b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {isUserAuth ? (
            <button
              className={`place-card__bookmark-button button ${
                offer.isFavorite ? 'place-card__bookmark-button--active' : ''
              }`}
              type="button"
              onClick={() => {
                toggleFavoriteStatus(offer.id, offer.isFavorite ? 0 : 1);
              }}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          ) : null}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(offer.rating * 100) / 5}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a
            onClick={(e) => {
              e.preventDefault();
              setActiveOffer(offer);
              history.replace(`/offer/${offer.id}`);
            }}
          >
            {offer.title}
          </a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
