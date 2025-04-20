import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}){
    const IMG_URL = "https://images.unsplash.com/photo-1641970304221-48dc92c14daf?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const HOT_URL = "https://images.unsplash.com/photo-1743519827744-f44b26bfc4a1?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const COLD_URL = "https://images.unsplash.com/photo-1603726574752-a85dc808deab?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1670002344425-f274ee445f76?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   
    return (
        <div className="info">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
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
            The Weather can be described as <i>{info.weather},</i> feels like {info.feelsLike}&deg;C around.
         </p>
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
}