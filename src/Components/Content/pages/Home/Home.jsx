import { Box} from "@mui/material"
import MainBackground from "../../../../img/bg02.jpeg"
import Typed from 'react-typed'
import Particles from "react-particles"
import { ParticlesModel } from "./Particles"
import { useCallback } from "react"
import { loadSlim } from "tsparticles-slim"


const Home = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return(
        <Box sx={{
        backgroundImage:`url(${MainBackground})` ,
        height:"100vh" , backgroundSize:"cover" , 
        backgroundRepeat:"no-repeat" , 
        backgroundPosition:"center" , 
        p:0,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
        }}>
              
        <Particles
         id="tsparticles"
         init={particlesInit}
         loaded={particlesLoaded}
         options={ParticlesModel}
        />
        <Typed 
        strings={['علی محلاتی']}
        typeSpeed={40}
        style={{cursor:'none'}}
        />
        <Typed
        strings={[
            "برنامه نویس ری اکت",
            "در سطح مبتدی",
            "آشنایی  باhtml و css"
                 ]}
          loop
          typeSpeed={40}
          backSpeed={40}       
        />


        </Box>
    )
}

export default Home