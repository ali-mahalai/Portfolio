import { Avatar, Box, Card, CardContent, CardMedia, Chip, Divider, Typography } from "@mui/material";
import user from "../../../../img/user.png"
import { orange, red } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import { CommentDetail } from "./CommentDetail";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Comments  = () => {
  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };


    return(
        
       <>
       <Divider sx={{"&::before":{borderColor:"black" , mt:4}, "&::after":{borderColor:"black", mt:4}}}>
        <Chip sx={{mt:4}} label="نظرات دانشجویان" color="warning"/>
       </Divider>
       <Grid container sx={{display:"flex" , mt:4 , justifyContent:"center"}}>

       

<Grid xs={6}>
    <Box>
        <Slider {...settings}>
        {
            CommentDetail.map((c) =>(
               
                <Box component="div" sx={{display:"flex" , justifyContent:"center" , flexDirection:"column" ,  alignItems:"center"}} >
                  <Box sx={{display:"flex" , justifyContent:"center"}}>
                  <Avatar sx={{width:150 , height:150}} src={user}>
                        ali
                    </Avatar>
                  </Box>
                      
                     <Box sx={{backgroundColor:"orange" , borderRadius:5 , mt:5 , textAlign:"end" , p:2}}>
                     <Typography variant="caption">
                        {c.title}
                      </Typography>
                     </Box>
                </Box>

            ))
        }
        </Slider>
    </Box>
</Grid>

</Grid>
       </>
       
      
    )
}

export default Comments