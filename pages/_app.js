import "../styles/globals.css";
import Layout from "../components/Layout";
//import { Provider } from "react-redux";
//import {store} from "../Store/index";
import ReactDOM from 'react-dom/client'
import AppContext from "../Context/store";
import { useState } from "react";

function MyApp({ Component, pageProps, }) {

  const [search, setSearch] = useState("");
  const [searchone, setSearchone] = useState("");
  const [final, setFinal] = useState("");
  const [weapon , setWeapon] = useState("");
  const [logedin , setLogedin] = useState(false);


  return (
    <AppContext.Provider value={{
      search,
      setSearch,
      searchone,
      setSearchone,
      final,
      setFinal,
      weapon,
      setWeapon,
      logedin,
      setLogedin, 
  
    }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}

export default MyApp;
