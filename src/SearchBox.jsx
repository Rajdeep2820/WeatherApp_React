import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react"
import "./SearchBox.css"
export default function SearchBox({updateInfo}){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"; 
    const API_KEY = "cd3c59302d279de4530566dafea98986";
    let [city , setCity] = useState("");
    let [error , setError] = useState(false);

    let getWeatherInfo = async (evt)=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            humidity : jsonResponse.main.humidity,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description
        }
        console.log(result);
        return result;
        } catch{
            throw(error)
        } 
    }
    let handleChange = (evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            setError(false);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        }
        catch{
            setError(true);
        }
       
    }
    return(
        <div>
            <form onSubmit={handleSubmit}
            className='Form'>
            <TextField id="city" 
            label="Search City Name" 
            variant="outlined" 
            required 
            value={city} 
            onChange={handleChange} />
            &nbsp; &nbsp; &nbsp;

            <Button variant="contained"
             type='submit'>Search</Button>
            </form>
            {error && <p style = {{color : "red"}}>No such Place exists in our API!</p>}
        </div>
    )
}