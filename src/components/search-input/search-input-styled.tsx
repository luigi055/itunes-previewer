import styled from "styled-components";

export const SearchForm = styled.form<{ maxWidth?: string }>`
  max-width: ${({ maxWidth }) => maxWidth || "100%"}
`;

export const SearchLabel = styled.label<{ buttonToRight: boolean }>`
  background: ${({ theme }) => theme.primaryVariantColor};
  border-radius: 50px;
  display: flex;
  flex-direction: ${({ buttonToRight }) =>
  buttonToRight ? "row" : "row-reverse"};
  overflow: hidden;
  z-index: 9;
`;

export const SearchButton = styled.button`
  background: transparent;
  padding: 9px 15px 5px 15px;

  &:focus {
    outline-color: transparent;
    outline-style: none;
  }
`;

export const SearchFormInput = styled.input`
  background: transparent;
  color: ${({ theme }) => theme.onPrimaryColor};
  font-size: 1.25rem;
  padding: 5px 2px;
  width: 100%;

  &:focus {
    outline-color: transparent;
    outline-style: none;
  }
`;
