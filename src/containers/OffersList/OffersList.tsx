import React from "react";
import { PlaceCard } from "src/components";
import { IOffer } from "src/interfaces";
import { getOffersForCurrentSorting } from "reducer/data/selectors";
import { getUserAuth } from "reducer/user/selectors";
import { connect } from "react-redux";
import { setActiveOffer, toggleFavoriteStatus } from "src/actions";

interface OffersListProps {
  offers: IOffer[];
  setActiveOffer: () => void;
  toggleFavoriteStatus: () => void;
  isUserAuth: boolean;
}

const OffersList: React.FC<OffersListProps> = ({
  offers,
  setActiveOffer,
  toggleFavoriteStatus,
  isUserAuth
}) => (
  <div className="cities__places-list places__list tabs__content">
    {offers.map((offer: IOffer) => (
      <PlaceCard
        offer={offer}
        key={offer.id}
        setActiveOffer={setActiveOffer}
        toggleFavoriteStatus={toggleFavoriteStatus}
        isUserAuth={isUserAuth}
      />
    ))}
  </div>
);

const mapStateToProps = (state, ownProps) =>
  Object.assign({}, ownProps, {
    offers: getOffersForCurrentSorting(state),
    isUserAuth: getUserAuth(state)
  });

const mapDispatchToProps = dispatch => ({
  setActiveOffer: id => {
    dispatch(setActiveOffer(id));
  },
  toggleFavoriteStatus: (hotelId, status) => {
    dispatch(toggleFavoriteStatus(hotelId, status));
  }
});

export { OffersList };

export default connect(mapStateToProps, mapDispatchToProps)(OffersList);
