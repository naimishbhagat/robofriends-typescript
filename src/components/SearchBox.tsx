import React from "react";
interface Props {
  searchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchField: string;
}
const SearchBox: React.FC<Props> = ({ searchField, searchChange }) => {
  return (
    <div className="pa2" data-testid="searchBox">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        data-testid="search"
        placeholder="search robots"
        value={searchField}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
