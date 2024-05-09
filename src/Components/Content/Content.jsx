import { Box, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import TabPanel from "../SideBar/TabPanel"
import { useContext } from "react"
import { MainContext } from "../../Context/Context"
import SwipeableViews from "react-swipeable-views"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Resume from "./pages/Resume/Resume"
import Works from "./pages/Works/Works"
import Comments from "./pages/Comments/Comments"
import ContactMe from "./pages/ContactMe/ContactMe"
const Content = () => {

    const {pageNumber , ChangePage} = useContext(MainContext)

    return(
       
    
           <>
            <SwipeableViews index={pageNumber} onChangeIndex={ChangePage}>

                
            <TabPanel   value={pageNumber} index={0}>
               <Home/>
            </TabPanel>
           
            <TabPanel value={pageNumber} index={1}>
               <Box sx={{height:"100vh"}} >
               <About/> 
               </Box>
            </TabPanel>
            
            <TabPanel value={pageNumber} index={2}>
              <Box sx={{height:"100vh"}}>
              <Resume/>
              </Box>
            </TabPanel>

            <TabPanel value={pageNumber} index={3}>
              <Box sx={{height:"100vh"}}>
              <Works/>
              </Box>
            </TabPanel>

            

            <TabPanel value={pageNumber} index={4}>
                <Box sx={{height:"100vh"}}>
                <ContactMe/>
                </Box>
            </TabPanel>

            </SwipeableViews>
                  


            
            

           
           
           
           </>
             
    
       
    )
}
export default Content