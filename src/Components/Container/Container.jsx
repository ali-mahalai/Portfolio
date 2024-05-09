import Grid from "@mui/material/Unstable_Grid2"
import Content from "../Content/Content"
import SideBar from "../SideBar/SideBar"
import { grey } from "@mui/material/colors"
import SidebarDrawer from "../SideBar/SidebarDrawer"
const Container = () =>{
    return(
        <Grid container>
           <Grid textAlign={"center"} xs={0} sm={0} md={3} xl={2} lg={2} sx={{backgroundColor: grey[500] , height:"100vh" , overflow:"scroll"}}>
                 <SideBar/>
                 <SidebarDrawer/>
           </Grid>

           <Grid textAlign={"center"} xs={12} sm={12} md={9} xl={10} lg={10} sx={{backgroundColor:"whitesmoke" , height:"100vh",}}>
                 <Content/>
                 
           </Grid>
        </Grid>
    )
}

export default Container