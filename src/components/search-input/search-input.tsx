import React, { FunctionComponent, useRef, useState } from "react";

interface SearchInputProps {
  initialValue: string;
  handleSubmitCallback: (value?: string) => void;
}

const SearchInput: FunctionComponent<SearchInputProps> = ({
  handleSubmitCallback: readValueCallback,
  initialValue,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentValue, setCurrentValue] = useState(initialValue);

  return (
    <form
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        readValueCallback(inputRef.current?.value);
      }}
    >
      <label htmlFor="searchInput">
        <input
          data-testid="search-input-element"
          value={currentValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentValue(event.currentTarget.value);
          }}
          id="searchInput"
          ref={inputRef}
          autoComplete="off"
        />
        <button data-testid="search-button">Search</button>
      </label>
    </form>
  );
};

export default SearchInput;
