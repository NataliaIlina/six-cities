import React, { useEffect } from 'react';
import { fetchOffers, offersSelector } from 'src/ducks/hotels/hotels';
import {
  Layout, CitiesList, OffersList, SortingSelect, Map,
} from 'src/containers';
import { useDispatch, useSelector } from 'src/store';
import { EStatus } from 'src/models/common';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const offers = useSelector(offersSelector);
  const status = useSelector((state) => state.hotels.status);
  const currentCity = useSelector((state) => state.hotels.currentCity);

  useEffect(() => {
    if (status === EStatus.IDLE) {
      dispatch(fetchOffers());
    }
  }, []);

  return (
    <Layout type="main">
      <main className="page__main page__main--index">
        {status === EStatus.ERROR && <p>Произошла ошибка при загрузке данных</p>}
        {status === EStatus.LOADING && <p style={{ textAlign: 'center' }}>Loading...</p>}
        {status === EStatus.SUCCESS && (
          <>
            <h1 className="visually-hidden">Cities</h1>
            <CitiesList />
            <div className="cities__places-wrapper">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {offers.length}
                    {' '}
                    places to stay in
                    {currentCity.name}
                  </b>
                  <SortingSelect />
                  <OffersList offers={offers} />
                </section>

                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map offers={offers} />
                  </section>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </Layout>
  );
};

export default MainPage;
