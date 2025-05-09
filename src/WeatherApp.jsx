import SearchBox from './SearchBox';
import InfoBox from './InfoBox.jsx';
import {useState} from 'react';

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelsLike : 24.84,
        temp : 25.05,
        tempMin : 26.08,
        tempMax : 35.05,
        humidity : 47,
        weather : "haze",
    });

    let updateInfo = (newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return(
        <div>
            <h1> Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}