import React, { useCallback, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import PlaceCard from 'components/PlaceCard/PlaceCard';

import { Layout, Map } from 'src/containers';
import { BASE_URL } from 'src/constants';
import { useDispatch, useSelector } from 'src/hooks';

import { fetchComments, addComment } from 'src/ducks/comments/comments';
import { setActiveOffer, toggleFavoriteStatus, nearbyOffers } from 'src/ducks/hotels/hotels';
import {
  SWrapper,
  SMap,
  STitle,
  SMainTitle,
  SBookmarkButton,
} from 'pages/OfferPage/OfferPage.styled';
import Rating from 'components/Rating/Rating';

import { EStatus } from 'src/models/common';
import { Box, Flex } from 'reflexbox';
import LocationLink from 'components/LocationLink/LocationLink';
import Features from 'pages/OfferPage/components/Features/Features';
import Price from 'pages/OfferPage/components/Price/Price';
import Host from 'pages/OfferPage/components/Host/Host';
import Gallery from 'pages/OfferPage/components/Gallery/Gallery';
import InsideList from 'pages/OfferPage/components/InsideList/InsideList';
import ReviewForm from 'pages/OfferPage/components/ReviewForm/ReviewForm';
import Reviews from 'pages/OfferPage/components/Reviews/Reviews';

const OfferPage: React.FC = () => {
  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comments);
  const offers = useSelector(nearbyOffers);
  const isUserAuth = useSelector((state) => state.auth.isUserAuth);
  const offer = useSelector((state) => state.hotels.activeOffer);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchComments(parseInt(id, 10)));
  }, [dispatch, id]);

  const addCommentHandler = useCallback(
    (hotelId, rating, comment) => {
      dispatch(addComment({ hotelId, rating, comment }));
    },
    [dispatch]
  );

  const setActiveOfferHandler = useCallback(
    (o) => {
      dispatch(setActiveOffer(o));
    },
    [dispatch]
  );

  const toggleFavoriteStatusHandler = useCallback(
    (hotelId: number, status: 1 | 0) => {
      dispatch(toggleFavoriteStatus({ hotelId, status }));
    },
    [dispatch]
  );

  if (!offer) {
    return <Redirect to={BASE_URL} />;
  }

  return (
    <Layout>
      <section>
        <Gallery images={offer.images} />

        <SWrapper>
          {offer.isPremium ? <LocationLink isActive>Premium</LocationLink> : null}

          <SMainTitle>{offer.title}</SMainTitle>
          {isUserAuth ? (
            <SBookmarkButton
              isActive={offer.isFavorite}
              onClick={() => {
                toggleFavoriteStatusHandler(offer.id, offer.isFavorite ? 0 : 1);
              }}
              width={31}
              height={33}
            />
          ) : null}

          <Rating rating={offer.rating} withValue mb={24} />

          <Features offer={offer} />

          <Price price={offer.price} />

          <InsideList goods={offer.goods} />

          <Host offer={offer} />

          <Box mb={48}>
            {comments.status === EStatus.SUCCESS && <Reviews comments={comments.list} />}
            {isUserAuth ? <ReviewForm addComment={addCommentHandler} hotelId={offer.id} /> : null}
          </Box>
        </SWrapper>

        <SMap>
          <Map offers={offers} />
        </SMap>
      </section>

      <STitle>Other places in the neighbourhood</STitle>
      <Flex justifyContent="center">
        {offers?.length
          ? offers
              .filter((item) => item.id !== parseInt(id, 10))
              .map((o) => (
                <PlaceCard
                  key={o.id}
                  offer={o}
                  toggleFavoriteStatus={toggleFavoriteStatusHandler}
                  isUserAuth={isUserAuth}
                  setActiveOffer={setActiveOfferHandler}
                />
              ))
          : null}
      </Flex>
    </Layout>
  );
};

export default OfferPage;
