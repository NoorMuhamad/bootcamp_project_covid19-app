import {useState , useEffect} from 'react'

export  function Api(name) {
    const [Data, setData] = useState({})
    console.log(name)
    const url = "https://covid19.mathdro.id/api"
    useEffect(() => {
        async function getData(name) {
            let changeableURl = url;
            if (name) {
                changeableURl = `${url}/countries/${name}`
            }
            const response = await fetch(changeableURl)
            const data = await response.json()
            const modifieddata = {
                confirmed: data.confirmed,
                recovered: data.recovered,
                deaths: data.deaths,
                lastUpdate: data.lastUpdate
            }
            setData(modifieddata)
        }
        getData(name);
    }, [])
    return (Data);
}



// import axios from 'axios'
// const url = "https://covid19.mathdro.id/api"
// export const Api = async (country) => {
//     let changeableurl = url;
//     if (country) {
//         changeableurl = `${url}/countries/${country}`;
//     }
//     const data = await axios.get(changeableurl);
//     const modifieddata = {
//         confirmed: data.confirmed,
//         recovered: data.recovered,
//         deaths: data.deaths,
//         lastUpdate: data.lastUpdate
//     }
//     return modifieddata
// }









