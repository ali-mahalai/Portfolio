import { Typography , Box, IconButton } from "@mui/material";
import { useState } from "react";
import { List } from "@mui/icons-material";
import { MainContext } from "../../Context/Context";
import { useContext } from "react";
function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    const {drawerHandleChange} = useContext(MainContext)
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        
      >
        {value === index && (
          <Box sx={{position:"relative"}}>
           <Box sx={{position:"absolute" , top:0 , left:0 , display:{xs:"block" ,sm:"block" , md:"none" , }}} >
           <IconButton  onClick={drawerHandleChange} >
              <List sx={{fontSize:30}} color="error"/>
            </IconButton>
           </Box>
            {children}
          </Box>
        )}
      </div>
    );
  }

  export default TabPanel