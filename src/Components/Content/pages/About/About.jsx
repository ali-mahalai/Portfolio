import { Avatar, Box, Chip, Divider, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import user from  "../../../../img/download.png"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { blue, green, grey, red } from "@mui/material/colors";
import { LocalCafeRounded , School , DataObject , Terminal } from "@mui/icons-material";
import CountUp from 'react-countup';
import SkillInfo from "./SkillInfo";
import Skill from "./Skill";





const About = () => {
  
   

    return(
        <>
                <Divider variant="middle" sx={{"&::before":{borderColor:"black", mt:4 } , "&::after":{borderColor:"black" , mt:4}}}>
                    <Chip sx={{mt:4}} color="info" label="درباره من"/>
                </Divider>
      <Grid container sx={{direction:"rtl"}}>
                  
     


                 <Grid xs={0} sm={0} md={2} sx={{justifyContent:"center", flexDirection:"column" , alignItems:"center" , display:"flex" }}>

                   
                   <Box sx={{display:{xs:"none" , sm:"none" , md:"block" , lg:"block" , xl:"block"}}}>
                   <Chip icon={<LocalCafeRounded/>} sx={{width:1 , backgroundColor:red[500]}}  label={<CountUp end={1200} duration={5}/>}/>
                   <Chip icon={<School/>} sx={{width:1 , mt:2 , backgroundColor:blue[500]}}    label={<CountUp end={25} duration={5}/>} />
                   <Chip icon={<DataObject/>} sx={{width:1, mt:2 , backgroundColor:grey[500]}} label={<CountUp end={34} duration={5}/>} />
                   <Chip icon={<Terminal/>} sx={{width:1 , mt:2 , backgroundColor:green[500]}} label={<CountUp end={12} duration={5}/>} />
                   </Box>
                   
                    
                

                 </Grid>
                 


                <Grid xs={12} sm={12} md={7} sx={{display:"flex" , justifyContent:"space-between",alignItems:"end", flexDirection:"column" , mt:4 }}>
              
                <Typography>
                    نام: علی محلاتی {<ArrowBackIosNewIcon color="info" sx={{verticalAlign:"middle" , fontSize:"15px"}}/>}
                </Typography>

                <Typography>
                سن: 26  {<ArrowBackIosNewIcon color="info" sx={{verticalAlign:"middle" , fontSize:"15px"}}/>}
                </Typography>

                <Typography>
                    شهر:  شیراز {<ArrowBackIosNewIcon color="info" sx={{verticalAlign:"middle" , fontSize:"15px"}}/>}
                </Typography>

                <Typography>
                    شماره تلفن: 09399715537 {<ArrowBackIosNewIcon color="info" sx={{verticalAlign:"middle" , fontSize:"15px"}}/>}
                </Typography>

                <Typography>
                    آدرس ایمیل: ali.mahalati111@gmail.com  {<ArrowBackIosNewIcon color="info" sx={{verticalAlign:"middle" , fontSize:"15px"}}/>}
                </Typography>
                
                
                </Grid>
     
            <Grid xs={12} sm={0} md={3} sx={{justifyContent:"center" , display:"flex" , mt:4 }} >
             <Avatar   src={user} sx={{width:200, height:200 , display:{xs:"none", sm:"none" , md:"block" , lg:"block" ,  xl:"block"}}}>
                al
             </Avatar>
           </Grid>
      



           <Grid xs={12} sx={{mt:4}}>

            <Divider textAlign="center" sx={{"&::before":{borderColor:"black"} ,"&::after":{borderColor:"black"}}} >
                <Chip color="secondary" label="مهارت های من "/>
            </Divider>
 
            <Skill name={SkillInfo.html.name} color={SkillInfo.html.color} value={70} icon={SkillInfo.html.icon}/>
            <Skill name={SkillInfo.css.name} color={SkillInfo.css.color} value={30} icon={SkillInfo.css.icon}/>
            <Skill name={SkillInfo.js.name} color={SkillInfo.js.color} value={90} icon={SkillInfo.js.icon}/>
            <Skill name={SkillInfo.nodeJs.name} color={SkillInfo.nodeJs.color} value={60} icon={SkillInfo.nodeJs.icon}/>
            <Skill name={SkillInfo.react.name} color={SkillInfo.react.color} value={40} icon={SkillInfo.react.icon}/>
            <Skill name={SkillInfo.gt.name} color={SkillInfo.gt.color} value={85} icon={SkillInfo.gt.icon}/>

           </Grid>
          
      </Grid>
      </>
    )
}

export default About