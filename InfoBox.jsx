import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox(){
    const IMG_URL = "https://images.unsplash.com/photo-1641970304221-48dc92c14daf?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let info = {
        city : "Delhi",
        feelLike : 24.84,
        temp : 25.05,
        tempMin : 26.08,
        tempMax : 35.05,
        humidity : 47,
        weather : "haze",
    };

    return (
        <div className="info">
            <h2> Weather Info</h2>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={IMG_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component = {"span"}>
         <p>Temperature : {info.temp}&deg;C</p>
         <p>Humidity : {info.humidity}</p>
         <p>Min-Temp : {info.tempMin}</p>
         <p>Max-Temp : {info.tempMax}</p>
         <p>
            The Weather can be described as <i>{info.weather}</i> and it feels like {info.feelLike}&deg;C around.
         </p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
}