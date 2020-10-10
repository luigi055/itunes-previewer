import MagnifyingGlass from "components/icons/magnifying-glass/magnifying-glass";
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

interface SearchInputProps {
  handleSubmit: (value?: string) => void;
  initialValue?: string;
  buttonToRight?: boolean;
  maxWidth?: string;
}

const SearchInput: FunctionComponent<
  SearchInputProps & FormHTMLAttributes<HTMLFormElement>
> = ({
  handleSubmit,
  initialValue = "",
  buttonToRight = false,
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
