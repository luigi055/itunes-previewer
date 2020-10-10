export interface SearchInputProps {
  handleSubmit: (value?: string) => void;
  initialValue?: string;
  buttonToRight?: boolean;
  maxWidth?: string;
  screenReaderTitle?: string;
}
