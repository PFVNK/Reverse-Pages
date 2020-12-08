
function Search() {
  return (
    <div className='search-container'>
      <h1>Reverse Page</h1>
      <div className='search-bar'>
        <form action="/" method="get">
          <input
            type="text"
            id="header-search"
            placeholder="Search Instagram Profiles"
            name="s"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  )
}

export default Search
