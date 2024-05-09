import { Box, Button, Card, Chip, Divider, TextField, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"
import map from "../../../../img/map.svg"
import { Face6Rounded , EmailRounded , SubjectRounded } from "@mui/icons-material"
import InputAdornment from '@mui/material/InputAdornment';
import { useFormik } from "formik";
import validationSchema from "../../../yup/Yup";
import ReCAPTCHA from "react-google-recaptcha";
const ContactMe = () => {
      
 const formik = useFormik({
    initialValues:{
        email:'',
        post:"",
        fullName:"",
        subject:""
    },
    validationSchema: validationSchema,

 })


    return(
        <>
        <Divider sx={{"&::after":{borderColor:"black" , mt:4} , "&::before":{borderColor:"black" , mt:4}}}>
            <Chip label="ارتباط با من" color="secondary" sx={{mt:4}}/>
        </Divider>
        
        <Grid container  sx={{mt:4}}>
           
           <Grid  xs={12} sm={12} md={9}>

          <form autoComplete="off">
          <Card  sx={{p:2 , width:"90%", margin:"0 auto" ,direction:"ltr"}}>
                <Grid container  spacing={2}>

                    <Grid xs={12} sm={12} md={6} spacing={1} >
                        <TextField fullWidth label="نام و نام خانوادگی"
                        name="fullName"
                        InputProps={{
                            endAdornment: (
                            <InputAdornment sx={{display:"flex" , justifyContent:"end"}}>
                              <Face6Rounded/>
                             </InputAdornment>
                           ),}}

                           value={formik.values.fullName}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                           helperText={formik.touched.fullName && formik.errors.fullName}

                        />
                    </Grid>
                       
                    <Grid xs={12} sm={12} md={6} >
                        <TextField fullWidth label=" آدرس ایمیل "
                        name="email"
                         InputProps={{
                            endAdornment: (
                            <InputAdornment sx={{display:"flex" , justifyContent:"end"}}>
                              <EmailRounded/>
                             </InputAdornment>
                           ),}}
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           error={formik.touched.email && Boolean(formik.errors.email)}
                           helperText={formik.touched.email && formik.errors.email}

                        />
                    </Grid>  
                     
                    <Grid xs={12}>
                        <TextField fullWidth label="عنوان"
                        name="subject"
                         InputProps={{
                            endAdornment: (
                            <InputAdornment sx={{display:"flex" , justifyContent:"end"}}>
                              <SubjectRounded/>
                             </InputAdornment>
                           ),}}

                           value={formik.values.fullName}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           error={formik.touched.subject && Boolean(formik.errors.subject)}
                           helperText={formik.touched.subject && formik.errors.subject}
                        />
                    </Grid>

                    <Grid xs={12}>
                        <TextField fullWidth multiline rows={10} label="متن پیام"
                          name="post"
                          value={formik.values.post}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           error={formik.touched.post && Boolean(formik.errors.post)}
                           helperText={formik.touched.post && formik.errors.post}
                        />
                    </Grid>

                </Grid>
                <Button color="success" variant="contained" fullWidth sx={{mt:4}}>
                    ارسال
                </Button>
                <ReCAPTCHA
                style={{marginTop:"15px"}}
                sitekey={"6LeM5lYpAAAAAIj2cFcSPRqSrd9lJO1gxwj_owXG"}
                onChange={(value) => {formik.setFieldValue("recaptcha" , value)}}
                hl="fa"
              />
            </Card>
          </form>

           </Grid>


          <Grid sx={{display:{xs:"none" , sm:"none" , md:"block" ,}}} xs={0} sm={0} md={3}>

           <Box sx={{backgroundImage:`url(${map})` , backgroundPosition:"center" , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , height:200 , display:"flex" , alignItems:"center" , justifyContent:"center"}} >
             <Typography>یکی از راه های ارتباطی با من <a href="mailTo:ali.mahalati111@gmail.com" target="_blank" style={{color:"red"}}>ایمیل </a> میباشد</Typography>
           </Box>

          </Grid>
        </Grid>

        </>
    )
}

export default ContactMe