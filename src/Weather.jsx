import { useEffect, useState } from "react"
import { Button, Input, TextInput } from '@mantine/core';
import axios from "axios";
import useFetch from "./useFetch";
//https://api.weatherapi.com/v1/current.json?key=7d80e451ec6a4c2fb6e35425220203&q=London&aqi=no

export default function Weather() {
    const [city, setCity] = useState('')
    const [allCities, setAllCities] = useState([])
    const fetcher = useFetch()


    const addNewCity = async () => {
        // try {
        //     var response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=7d80e451ec6a4c2fb6e35425220203&q=${city}&aqi=no`)
        //     var data = response.data
        //     setAllCities([...allCities, {city: data.location.name, temp_c: data.current.temp_c, temp_f: data.current.temp_f}])
        // } catch {
        //     return
        // }
        
        var data = await fetcher.GET(`https://api.weatherapi.com/v1/current.json?key=7d80e451ec6a4c2fb6e35425220203&q=${city}&aqi=no`)

        if (!data) {
            console.log("failed to fetch")
        }

        console.log("successful fetch")
    
    }

    return (
        <div>
            
                <h5>{JSON.stringify(fetcher.loading)}</h5>
            
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <div className="flex justify-center items-center">
                        <div className="w-[300px] p-5 flex">
                            <Input placeholder="City" onChange={(e) => setCity(e.target.value)}/>
                            <Button onClick={() => addNewCity()}>Add</Button>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                  {
                    allCities && allCities.map(eachCity => {
                        return <p>City: {eachCity.city}, Temp (C): {eachCity.temp_c}, Temp (F): {eachCity.temp_f}</p>
                     
                    })
                  }
                </div>
            </div>
        

        </div>
    )
}