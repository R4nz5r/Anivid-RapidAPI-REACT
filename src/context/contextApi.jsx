import  { createContext, useEffect, useState } from "react";

import {fetchDataFromAi} from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);
  const [selectCategories, setSelectCategories] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    fetchSelectedCategoryData(selectCategories);
  }, [selectCategories]);

  const fetchSelectedCategoryData = (query) =>{
      setLoading(true);
      fetchDataFromAi(`search/?q=${query}`).then(({contents}) => {
        console.log(contents);
       setSearchResults(contents);
        setLoading(false);
      })
  }

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
