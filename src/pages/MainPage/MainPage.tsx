import React, { useEffect } from 'react';
import { fetchOffers, offersSelector } from 'src/ducks/hotels/hotels';
import { Layout, CitiesList, OffersList, SortingSelect, Map } from 'src/containers';
import { useDispatch, useSelector } from 'src/store';
import { EStatus } from 'src/models/common';
import { SWrapper, SOffersSection, SOffersTitle, SMapSection } from './MainPage.styled';

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const offers = useSelector(offersSelector);
  const status = useSelector((state) => state.hotels.status);
  const currentCity = useSelector((state) => state.hotels.currentCity);

  useEffect(() => {
    if (status === EStatus.IDLE) {
      dispatch(fetchOffers());
    }
  }, [dispatch, status]);

  return (
    <Layout background="#f5f5f5">
      {status === EStatus.ERROR && <p>Произошла ошибка при загрузке данных</p>}
      {status === EStatus.LOADING && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {status === EStatus.SUCCESS && (
        <>
          <CitiesList />
          <SWrapper>
            <SOffersSection>
              <SOffersTitle>
                {`${offers.length} places to stay in ${currentCity.name}`}
              </SOffersTitle>
              <SortingSelect />
              <OffersList offers={offers} />
            </SOffersSection>

            <SMapSection>
              <section>
                <Map offers={offers} />
              </section>
            </SMapSection>
          </SWrapper>
        </>
      )}
    </Layout>
  );
};

export default MainPage;
