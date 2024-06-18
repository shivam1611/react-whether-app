import { useState } from "react";
import "./App.css";
import LeftSection from "./Components/Left_section/LeftSection";
import RightSection from "./Components/Right_section/RightSection";
import { MyContext } from "./context/Context";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [content, setContent] = useState();

  const API_key = "c2479d6587724b909ed65314241306";

  function handleSearch(e) {
    e.preventDefault();
    setSearchQuery(e.target.value);
    if (searchQuery.length > 3) {
      setIsLoading(true);
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_key}&q=${searchQuery}&aqi=yes`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setContent(data);
          setIsLoading(false);
          setSearchQuery("");
        });
    }
    return;
  }
  return (
    <MyContext.Provider
      value={{
        searchQuery: searchQuery,
        setSearchQuery: setSearchQuery,
        handleSearch: handleSearch,
        isloading: isloading,
        setIsLoading: setIsLoading,
        content: content,
        // location:location;
      }}
    >
      <div className="app">
        <LeftSection />
        <RightSection  />
      </div>
    </MyContext.Provider>
  );
}

export default App;
