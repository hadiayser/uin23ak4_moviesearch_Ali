export default function setsøkeResultat(søk){
    return(
      <div>
        <input className="searchInput"
          value={søk.searchValue}
          onChange={(event)=> søk.setsøkeResultat(event.target.value)}
          placeholder="søk på film..."
        />
      </div>
    )
  }
