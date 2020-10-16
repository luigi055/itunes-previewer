import React, { FunctionComponent } from 'react';
import { sortQueryStringOptions } from 'application/routes-config';
import { SortOptionLabel } from './sort-options-styled';

const SortOptions: FunctionComponent<{handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void, defaultValue: string}> = 
({handleChange, defaultValue}) => {
 
  return (
    <SortOptionLabel htmlFor="sort-options">
    <select
      defaultValue={defaultValue}
      id="sort-options"
      data-testid="sort-options-select"
      onChange={handleChange}
    >
      <option value={sortQueryStringOptions.unsorted}>Unsorted tracks</option>
      <option value={sortQueryStringOptions.sortByGenre}>Sort tracks by genre</option>
      <option value={sortQueryStringOptions.sortByPrice}>Sort tracks by price</option>
      <option value={sortQueryStringOptions.sortByDuration}>Sort tracks by duration</option>
    </select>
  </SortOptionLabel>

  );
};

export default SortOptions;
