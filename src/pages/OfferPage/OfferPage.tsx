import React, { useCallback, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Reviews, ReviewForm, PlaceCard } from 'src/components';

import { Layout, Map } from 'src/containers';
import { BASE_URL } from 'src/constants';
import { useDispatch, useSelector } from 'src/store';

import { fetchComments, addComment } from 'src/ducks/comments/comments';
import { setActiveOffer, toggleFavoriteStatus, nearbyOffers } from 'src/ducks/hotels/hotels';
import { useParams } from 'react-router-dom';
import { EStatus } from 'src/models/common';

const OfferPage: React.FC = () => {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments);
  const offers = useSelector(nearbyOffers);
  const isUserAuth = useSelector((state) => state.auth.isUserAuth);
  const offer = useSelector((state) => state.hotels.activeOffer);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchComments(parseInt(id, 10)));
  }, []);

  const addCommentHandler = useCallback((hotelId, rating, comment) => {
    dispatch(addComment({ hotelId, rating, comment }));
  }, []);

  const setActiveOfferHandler = useCallback((offer) => {
    dispatch(setActiveOffer(offer));
  }, []);

  const toggleFavoriteStatusHandler = useCallback((hotelId: number, status: 1 | 0) => {
    dispatch(toggleFavoriteStatus({ hotelId, status }));
  }, []);

  return offer ? (
    <Layout>
      <main className='page__main page__main--property'>
        <section className='property'>
          <div className='property__gallery-container container'>
            <div className='property__gallery'>
              {offer.images.map((img, index) =>
                index > 5 ? null : (
                  <div key={img} className='property__image-wrapper'>
                    <img className='property__image' src={img} alt='Photo studio' />
                  </div>
                )
              )}
            </div>
          </div>
          <div className='property__container container'>
            <div className='property__wrapper'>
              {offer.isPremium ? (
                <div className='property__mark'>
                  <span>Premium</span>
                </div>
              ) : null}
              <div className='property__name-wrapper'>
                <h1 className='property__name'>{offer.title}</h1>
                {isUserAuth ? (
                  <button
                    className={`property__bookmark-button button ${
                      offer.isFavorite ? `property__bookmark-button--active` : ``
                    }`}
                    type='button'
                    onClick={() => {
                      toggleFavoriteStatusHandler(offer.id, offer.isFavorite ? 0 : 1);
                    }}
                  >
                    <svg className='property__bookmark-icon' width='31' height='33'>
                      <use xlinkHref='#icon-bookmark' />
                    </svg>
                    <span className='visually-hidden'>To bookmarks</span>
                  </button>
                ) : null}
              </div>
              <div className='property__rating rating'>
                <div className='property__stars rating__stars'>
                  <span style={{ width: `${(offer.rating * 100) / 5}%` }} />
                  <span className='visually-hidden'>Rating</span>
                </div>
                <span className='property__rating-value rating__value'>{offer.rating}</span>
              </div>
              <ul className='property__features'>
                <li className='property__feature property__feature--entire'>{offer.type}</li>
                <li className='property__feature property__feature--bedrooms'>
                  {offer.bedrooms} Bedrooms
                </li>
                <li className='property__feature property__feature--adults'>
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className='property__price'>
                <b className='property__price-value'>&euro;{offer.price}</b>
                <span className='property__price-text'>&nbsp;night</span>
              </div>
              <div className='property__inside'>
                <h2 className='property__inside-title'>What&apos;s inside</h2>
                <ul className='property__inside-list'>
                  {offer.goods.map((good, index) => (
                    <li key={`${good}_${index}`} className='property__inside-item'>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='property__host'>
                <h2 className='property__host-title'>Meet the host</h2>
                <div className='property__host-user user'>
                  <div
                    className={`property__avatar-wrapper ${
                      offer.host.isPro ? `property__avatar-wrapper--pro` : ``
                    } user__avatar-wrapper`}
                  >
                    <img
                      className='property__avatar user__avatar'
                      src={`${BASE_URL}/${offer.host.avatarUrl}`}
                      width='74'
                      height='74'
                      alt='Host avatar'
                    />
                  </div>
                  <span className='property__user-name'>{offer.host.name}</span>
                  {offer.host.isPro ? <span className='property__user-status'>Pro</span> : null}
                </div>
                <div className='property__description'>
                  <p className='property__text'>{offer.description}</p>
                </div>
              </div>
              <section className='property__reviews reviews'>
                {comments.status === EStatus.SUCCESS && <Reviews comments={comments.list} />}
                {isUserAuth ? (
                  <ReviewForm addComment={addCommentHandler} hotelId={offer.id} />
                ) : null}
              </section>
            </div>
          </div>
          <section className='property__map map'>
            <Map offers={offers} />
          </section>
        </section>

        <div className='container'>
          <section className='near-places places'>
            <h2 className='near-places__title'>Other places in the neighbourhood</h2>
            <div className='near-places__list places__list'>
              {offers?.length
                ? offers
                    .filter((item) => item.id !== parseInt(id, 10))
                    .map((offer) => (
                      <PlaceCard
                        key={offer.id}
                        offer={offer}
                        toggleFavoriteStatus={toggleFavoriteStatusHandler}
                        isUserAuth={isUserAuth}
                        setActiveOffer={setActiveOfferHandler}
                      />
                    ))
                : null}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  ) : (
    <Redirect to={BASE_URL} />
  );
};

export default OfferPage;
