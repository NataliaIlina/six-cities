import React from 'react';
import { useDispatch, useSelector } from 'src/hooks';
import { changeCurrentCity } from 'src/ducks/hotels/hotels';
import LocationLink from 'components/LocationLink/LocationLink';
import { Box } from 'reflexbox';
import { SList } from './CitiesList.styled';

const CitiesList: React.FC = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.hotels.cities);
  const currentCity = useSelector((state) => state.hotels.currentCity);

  return (
    <Box px={36}>
      <SList>
        {cities.map((city) => (
          <Box mr={32} key={city.name}>
            <li>
              <LocationLink
                isActive={currentCity.name === city.name}
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  dispatch(changeCurrentCity(city));
                }}
              >
                {city.name}
              </LocationLink>
            </li>
          </Box>
        ))}
      </SList>
    </Box>
  );
};

export default CitiesList;
