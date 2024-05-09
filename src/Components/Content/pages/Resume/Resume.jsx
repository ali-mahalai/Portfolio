import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineDetail } from './TimeLineDetail';
import { Chip, Divider, Grid, Slide, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { School } from '@mui/icons-material';
import { red } from '@mui/material/colors';


const Resume = () => {
    const [checked, setChecked] = useState(false);

   useEffect(() =>{
    
    setChecked(true)

    return() =>{
        setChecked(false)
    }

   },[])
  
    return(
        <>
        
        <Slide appear={false} direction="up" in={checked} >
        <Divider sx={{"&::before":{borderColor:"black" , mt:4} , "&::after":{borderColor:"black",  mt:4}}}>
            <Chip label="رزومه من" sx={{backgroundColor:red[500] , mt:4}}/>
        </Divider>
        </Slide>
        
        <Grid container sx={{mt:8}}>

            <Grid xs={12} sm={6} sx={{direction:"ltr"}} >
            <Divider variant="middle" sx={{"&::before":{borderColor:"black"} , "&::after":{borderColor:"black"}}}>
                <Chip color="warning" label="رزومه من"/>
            </Divider>
            <Timeline>
          {
            TimelineDetail.map((c , index) =>(
            <Slide in={checked} direction="up"
            style={{transitionDelay: checked ? `${index +1}90ms` : 0}}
            >
                    <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="warning">
            <School/>
          </TimelineDot>
          <TimelineConnector color="warning" />
        </TimelineSeparator>
        <TimelineContent>
            <Typography>
                {c.year}
            </Typography>
            <Typography>
                {c.certif}
            </Typography>
            <Typography>
                {c.dc}
            </Typography>
            <Typography>
                {c.uni}
            </Typography>
        </TimelineContent>
      </TimelineItem>
            </Slide>
            ))
          }
      
    </Timeline>

            </Grid>

        



            <Grid xs={12} sm={6} sx={{direction:"ltr"}} >


            <Divider variant="middle" sx={{"&::before":{borderColor:"black"} , "&::after":{borderColor:"black"}}}>
                <Chip color="info" label="رزومه من"/>
            </Divider>
            <Timeline>
          {
            TimelineDetail.map((c , index) =>(
             <Slide in={checked} direction="up" style={{transitionDelay:checked? `${index + 1}99ms`  : 0}}>
                   <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="info">
            <School/>
          </TimelineDot>
          <TimelineConnector color="info" />
        </TimelineSeparator>
        <TimelineContent>
            <Typography>
                {c.year}
            </Typography>
            <Typography>
                {c.certif}
            </Typography>
            <Typography>
                {c.dc}
            </Typography>
            <Typography>
                {c.uni}
            </Typography>
        </TimelineContent>
      </TimelineItem>
             </Slide>
            ))
          }
      
    </Timeline>

            </Grid>
            






        </Grid>

        </>
    )
}

export default Resume