import './App.css';
import { React, useState, useEffect } from 'react';
import { Cards, Charts, CountryPicker } from './components';
// import { Api } from './components/api/Api'


function App() {
  const [countryName, setcountryName] = useState("")
  const [Data, setData]=useState({})
  const url = "https://covid19.mathdro.id/api"
  useEffect(() => {
    async function getData() {
      let changeableURl = url;
      if (countryName!=="") {
        changeableURl = `${url}/countries/${countryName}`
      }
      const response = await fetch(changeableURl)
      const data = await response.json()
      const modifieddata = {
        confirmed: data.confirmed,
        recovered: data.recovered,
        deaths: data.deaths,
        lastUpdate: data.lastUpdate,
        country: countryName,
      }
      setData(modifieddata)
    }
    getData();
  }, [countryName])
  function handlecountrychange(Name) {
    setcountryName(Name)
  }
  return (
    <div className="container">
      <Cards data={Data}  />

      <CountryPicker handlecountrychange={handlecountrychange} />
      <Charts data={Data}/>
    </div>
  );
}

export default App;
