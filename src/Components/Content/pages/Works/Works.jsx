import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Unstable_Grid2"
import { WorksDetail } from './WorksDetail';
import { Button, Chip, Divider, Typography } from '@mui/material';
import EllipsisText from "react-ellipsis-text";
import Slide from '@mui/material/Slide';
import { useEffect, useState } from 'react';
const Works  = () => {

    const [check , setCheck] = useState(false)

    useEffect(() =>{
       setCheck(true)

       return () =>{
        setCheck(false)
       }
    },[])

    return(
        <>
         
         <Divider sx={{"&::before":{borderColor:"black", mt:4} , "&::after":{borderColor:"black", mt:4}}}>
            <Chip sx={{mt:4}} label="نمونه کارها" color='success'/>
         </Divider>

        <Grid container>


          {

           WorksDetail.map((c , index) => (
              
            <Grid sx={{display:"flex" , justifyContent:"center"}} xs={12} sm={6} md={6} lg={4} xl={4} >
                
               <Slide in={check} direction="up" style={{transitionDelay: check ? `${index + 1}99ms` : 0}}  >
                 
               <Card  sx={{ width:"95%" , mt:5 }} >
                   <CardMedia
                     image={c.image}
                     title = {c.title}
                     sx={{height:200}}
                   />

                   <CardContent>
                    <Typography variant='body1'>
                        {c.title}
                    </Typography>
                    <Typography sx={{direction:"ltr"}} variant='body2'>
                        <EllipsisText text={c.info} length={100}/>
                    </Typography>
                   </CardContent>
                   <CardActions>
                    <Button variant='text' href={c.link} target='_blank'>
                       
                            <Typography>اطلاعات بیشتر</Typography>
                    
                    </Button>
                   </CardActions>
                </Card>
               </Slide>


            </Grid>

           ))

          }

      

        </Grid>
        </>
    )
}

export default Works