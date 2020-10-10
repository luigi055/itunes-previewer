import { MagnifyingGlass } from "components/icons";
import { ScreenReaderOnly } from "components/screen-readers-helpers";
import React, {
  FunctionComponent,
  useRef,
  useState,
  FormHTMLAttributes,
} from "react";
import {
  SearchForm,
  SearchFormInput,
  SearchLabel,
  SearchButton,
} from "./search-input-styled";
import { SearchInputProps } from "./search-input-types";

const SearchInput: FunctionComponent<
  SearchInputProps & FormHTMLAttributes<HTMLFormElement>
> = ({
  handleSubmit,
  initialValue = "",
  buttonToRight = false,
  screenReaderTitle = "",
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentValue, setCurrentValue] = useState(initialValue);

  return (
    <SearchForm
      {...props}
      onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        handleSubmit(inputRef.current?.value);
      }}
    >
      <SearchLabel
        htmlFor="searchInput"
        buttonToRight={buttonToRight}
        data-testid="search-label"
      >
        <ScreenReaderOnly data-testid="search-hidden-title">
          {screenReaderTitle}
        </ScreenReaderOnly>
        <SearchFormInput
          data-testid="search-input-element"
          value={currentValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCurrentValue(event.currentTarget.value);
          }}
          id="searchInput"
          ref={inputRef}
          autoComplete="off"
        />
        <SearchButton data-testid="search-button">
          <MagnifyingGlass />
        </SearchButton>
      </SearchLabel>
    </SearchForm>
  );
};

export default SearchInput;
