import React, { FunctionComponent } from "react";
import { queryStringSortOptions } from "application/routes-config";
import { SortOptionLabel } from "./sort-options-styled";

const SortOptions: FunctionComponent<{
  onOptionChange: Function;
  value: string;
}> = ({ onOptionChange, value: defaultValue }) => {
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onOptionChange(event.currentTarget.value);
  };

  return (
    <SortOptionLabel htmlFor="sort-options">
      <select
        value={defaultValue}
        id="sort-options"
        data-testid="sort-options-select"
        onChange={handleOptionChange}
      >
        <option value={queryStringSortOptions.unsorted}>Unsorted tracks</option>
        <option value={queryStringSortOptions.sortByGenre}>
          Sort tracks by genre
        </option>
        <option value={queryStringSortOptions.sortByPrice}>
          Sort tracks by price
        </option>
        <option value={queryStringSortOptions.sortByDuration}>
          Sort tracks by duration
        </option>
      </select>
    </SortOptionLabel>
  );
};

export default SortOptions;
