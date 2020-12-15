import { React, useEffect,useState } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

const CountryPicker = ({handlecountrychange}) => {
    const [CountryData, setCountryData] = useState([])
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://covid19.mathdro.id/api/countries")
            const data = await response.json()
            const countryname = data.countries.map((CountryData) => CountryData.name)
            setCountryData(countryname)
        }
        getData();
    }, [])

    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e)=> handlecountrychange(e.target.value)} >
                <option value="global">Global</option>
                {CountryData.map((country, index)=><option key={index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;