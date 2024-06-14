
import { useEffect, useState } from 'react'
import './App.css'
import LeftSection from'./Components/Left_section/LeftSection'
import RightSection from './Components/Right_section/RightSection'
function App() {

  const [searchQuery, setSearchQuery] = useState("")

  const API_key = "c2479d6587724b909ed65314241306"

  function handleSearch(e){
    e.preventDefault()
    setSearchQuery(e.target.value)
    if(searchQuery.length > 3){
      fetch(`http://api.weatherapi.com/v1/current.json?key=${API_key}&q=${searchQuery}&aqi=yes`)
    .then(response=>response.json())
    .then(data=> console.log(data))
    }
    return
  }
  return (
    <div className="app">
      <LeftSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch}/>
      <RightSection/>
    </div>
  )
}

export default App