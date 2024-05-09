import { Drawer } from "@mui/material"
import { Avatar, Box, IconButton, Chip, Divider, Icon, Tab, Tabs, Typography, Switch } from "@mui/material"
import user from "../../img/download.png"
import {
     Instagram 
    , Telegram 
    , WhatsApp 
    , GitHub
    ,
    FavoriteRounded,
    CopyrightRounded,
    HomeRounded,
    LightMode,
    DarkMode
    } from "@mui/icons-material"
import { blue, grey, red } from "@mui/material/colors"
import TabsData from "./TabsData"
import { useContext } from "react"
import { MainContext } from "../../Context/Context"
import { useTheme } from "@emotion/react"

const SidebarDrawer = () => {
    const  theme = useTheme()

    const {pageNumber , ChangePage , modHandleChange , drawerOpen , setDrawerOpen} = useContext(MainContext)
    return(
        <>
        <Drawer onClose={() => {setDrawerOpen(false)}} variant="temporary" open={drawerOpen} >
        <Box sx={{width:"320px"}}>
          <IconButton sx={{position:"absolute" , top:60 , left: 15}}  onClick={modHandleChange}>
            {theme.palette.mode === "dark" ? <DarkMode/> : <LightMode/>}
          </IconButton>
        <Avatar  src={user} sx={{margin:" 0 auto" , mt:5 , mb:3 , width:150,height:150}}>
            al
        </Avatar>
        </Box>

         <Box  sx={{mb:3 , margin:"0 auto"}}>
         <Typography>
            علی محلاتی
        </Typography>

        <Typography>
            توسعه دهنده اماتور ری اکت
        </Typography>
         </Box>

        <Box sx={{margin:"0 auto"}}>
       <IconButton >
        <Instagram  sx={{color: red[300]}}/>
       </IconButton>
       
       <IconButton  color="info">
        <Telegram />
       </IconButton>
       
       <IconButton>
        <GitHub sx={{color: red[400]}}/>
       </IconButton>

       <IconButton color="success">
        <WhatsApp/>
       </IconButton>
         
        </Box>

        <Divider variant="middle"/>
        
        <Tabs value={pageNumber} onChange={ChangePage} variant="scrollable"  orientation="vertical">
          
          {
            TabsData.map((c) =>(
                <Tab onClick={() => {setDrawerOpen(false)}}  sx={{display:"flex" , justifyContent:"start" , color:grey[900]}} label={c.lable} icon={c.Icon} iconPosition={c.IconPosition}/>
            ))
          }
          
 
        </Tabs>
        
          <Divider variant="middle"/>

          <Box sx={{mt:3 , marginLeft:"20px"}} >
            <Typography>
                این سایت توس{<FavoriteRounded sx={{verticalAlign:"middle", color:red[500]}}/>} طراحی شده است
            </Typography>
            <Typography>
                قانون کپی رایت 1402 {< CopyrightRounded sx={{color:blue[700]}}/>}
            </Typography>
          </Box>

        </Drawer>
        </>
    )
}

export default SidebarDrawer