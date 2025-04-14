function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <input
        type="text"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border w-full"
      />
    );
  }
  
  export default SearchBar;
  