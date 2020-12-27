import React from 'react';
import {useDispatch, useSelector} from 'src/store';
import {changeCurrentCity} from 'src/ducks/hotels/hotels';

const CitiesList: React.FC = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.hotels.cities);
  const currentCity = useSelector((state) => state.hotels.currentCity);

  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city, index) => (
            <li className="locations__item" key={`${city.name}_${index}`}>
              <a
                className={`locations__item-link tabs__item ${
                  currentCity.name === city.name ? 'tabs__item--active' : ''
                }`}
                href="#"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  dispatch(changeCurrentCity(city));
                }}
              >
                <span>{city.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CitiesList;
