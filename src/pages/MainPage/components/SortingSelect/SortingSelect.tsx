import React, { useState } from 'react';
import { SORTING_OPTIONS, SORTING_TITLE } from 'src/constants';
import { useDispatch, useSelector } from 'src/store';
import { changeSortingValue } from 'src/ducks/hotels/hotels';

const SortingSelect: React.FC = () => {
  const [isSelectOpen, openSelect] = useState(false);
  const dispatch = useDispatch();
  const sortingValue = useSelector((state) => state.hotels.sortingValue);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        onClick={() => {
          openSelect(!isSelectOpen);
        }}
      >
        {SORTING_TITLE[sortingValue]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isSelectOpen ? 'places__options--opened' : ''
        }`}
      >
        {SORTING_OPTIONS.map((option: string) => (
          <li
            key={option}
            className={`places__option ${option === sortingValue ? 'places__option--active' : ''}`}
            onClick={() => {
              dispatch(changeSortingValue(option));
              openSelect(!isSelectOpen);
            }}
          >
            {SORTING_TITLE[option]}
          </li>
        ))}
      </ul>
    </form>
  );
};

export default SortingSelect;
