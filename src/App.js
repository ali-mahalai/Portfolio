import { useState } from "react";
import Container from "./Components/Container/Container";
import { Helmet , HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import { theme1 , theme2 } from "./mui/Them";
import { MainContext } from "./Context/Context";
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { useTheme } from "@emotion/react";
import SidebarDrawer from "./Components/SideBar/SidebarDrawer";
function App() {
 const theme = useTheme()

  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });

const [pageNumber , setPageNumber] = useState(0)
const ChangePage = (value , newValue) => {
  setPageNumber(newValue)
}

const [mod , setMod] = useState(theme1)

const modHandleChange = () => {
  setMod(mod === theme1 ? theme2 : theme1)
}

const [drawerOpen , setDrawerOpen] = useState(false)

    const drawerHandleChange =  () => {

      setDrawerOpen(true)
    }



  return (
    <MainContext.Provider value={{pageNumber , ChangePage , modHandleChange , setDrawerOpen , drawerOpen , drawerHandleChange}}>
    <CacheProvider value={cacheRtl}>
     <ThemeProvider theme={mod}>

         <HelmetProvider>
            <Helmet>
             <title>وب سایت شخصی</title>
           </Helmet>
             <Container/>
         </HelmetProvider> 
         
     </ThemeProvider>
    </CacheProvider>
    </MainContext.Provider>
  );
}

export default App;
