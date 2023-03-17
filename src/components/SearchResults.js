export default function SearchResults(props){
    return(
      <div className="searchInput">
        <input
          value={props.searchValue}
          onChange={(event)=> props.setSearchValue(event.target.value)}
          placeholder="søk på film..."
        />
      </div>
    )
  }
