import React, { useEffect } from 'react';
import FavoriteCard from 'pages/FavoritePage/components/FavoriteCard/FavoriteCard';
import FavoritesEmpty from 'pages/FavoritePage/components/FavoritesEmpty/FavoritesEmpty';
import { Layout } from 'src/containers';
import { useDispatch, useSelector } from 'src/hooks';
import { fetchFavorite } from 'src/ducks/hotels/hotels';
import { EStatus } from 'src/models/common';

const FavoritePage: React.FC = () => {
  const dispatch = useDispatch();
  const { status, data } = useSelector((state) => state.hotels.favorite);

  useEffect(() => {
    if (status === EStatus.IDLE) {
      dispatch(fetchFavorite());
    }
  }, []);

  return (
    <Layout withFooter>
      <div className="page__favorites-container container">
        {status === EStatus.LOADING && <p>Loading...</p>}
        {status === EStatus.ERROR && <p>Error...</p>}
        {status === EStatus.SUCCESS && (
          <>
            {Object.keys(data).length ? (
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {Object.keys(data).map((key, index) => (
                    <li className="favorites__locations-items" key={`${key}_${index}`}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link">
                            <span>{key}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {data[key].map((it) => (
                          <FavoriteCard offer={it} key={it.id} />
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ) : (
              <FavoritesEmpty />
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export default FavoritePage;
