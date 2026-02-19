import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SORTING_OPTIONS, SortOption } from '../../../const/const';
import { selectSortOption, sortOptionChanged } from '../../../store/main-slice';

export default function PlacesSorting() {
  const dispatch = useDispatch();
  const currentOption = useSelector(selectSortOption);

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((s) => !s);

  const handleOptionClick = (option: SortOption) => {
    if (option === currentOption) {
      setIsOpen(false);
      return;
    }
    dispatch(sortOptionChanged(option));
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get" onSubmit={(e) => e.preventDefault()}>
      <span className="places__sorting-caption">Sort by</span>

      <span
        className="places__sorting-type"
        tabIndex={0}
        role="button"
        onClick={toggleOpen}
      >
        {currentOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>

      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {Object.values(SORTING_OPTIONS).map((option) => {
          const isActive = option === currentOption;
          return (
            <li
              key={option}
              className={`places__option ${isActive ? 'places__option--active' : ''}`}
              tabIndex={0}
              role="option"
              aria-selected={isActive}
              onClick={() => handleOptionClick(option as SortOption)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </form>
  );
}
