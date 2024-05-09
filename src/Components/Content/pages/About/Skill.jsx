import { Avatar, Box, Chip, Divider, Typography } from "@mui/material"
import LinearProgress from '@mui/material/LinearProgress';
import { useState , useEffect } from "react";

const Skill = ({name , color, value , icon}) => {
      
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        
      setProgress((oldProgress) => {
        
        if (oldProgress === value) {
          return value;
        }
        
        return Math.min(oldProgress + 99 , value);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);






    return(
      <>
      
      <Divider textAlign="right" sx={{my:1}}>
        <Chip icon={<Avatar src={icon} sx={{width:20 , height:20 , p:2}}/>} label={name} color={color}/>
      </Divider>
       <Box sx={{display:"flex", justifyContent:"end" , alignItems:"center"}}>
       <Typography >{value}%</Typography>
       <LinearProgress  sx={{width:"98%" , height:8 , }} color={color} variant="determinate" value={progress}/>
       
       </Box>

      </>
    )
}

export default Skill