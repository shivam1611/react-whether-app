import classes from './LeftSection.module.css'

function LeftSection({searchQuery,handleSearch, setSearchQuery}) {
  return (
    <div className={classes.container}>
        <form className={classes.search_section} >
            
            <input type="text" placeholder='London, UK' className={classes.search_bar} value={searchQuery} onChange={(e)=>handleSearch(e)} />
            <i className={`fa-solid fa-magnifying-glass ${classes.icon}`}></i>
        </form>
    </div>
  )
}

export default LeftSection