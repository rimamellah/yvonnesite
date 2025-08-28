import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from "react-i18next";
export default function Contact(){
   const { t } = useTranslation();
    return(
        <>
            <Box
                sx={{
          width: "100%",
          height: "100%",
           position: "relative",
          bgcolor: 'rgba(0, 0, 0, 0.90)',
          color:"wheat",
           paddingTop: "50px",
          textAlign:"center",
        }}
        >
<img   src="yvonne.png" width={"400px"} style={{marginTop:"50px"}} alt="" />
            <Typography variant='h6' sx={{color:"gray"}}>{t("working")}</Typography>
  <Typography variant="h5" sx={{marginTop:"10px"}} >{t("Monday")}</Typography>
 <Typography variant="h5" sx={{marginTop:"10px"}} >{t("Tuesday")}</Typography>
  <Typography variant="h5" sx={{marginTop:"10px"}} >{t("Saturday")}</Typography>
    <Typography variant="h5" sx={{marginTop:"10px"}} >{t("Closed")}</Typography>
            <Typography variant='h6' sx={{color:"gray" ,marginTop:"20px"}}>{t("for")}</Typography>
            <Typography variant='h5' m={"10px 0px"}>+90 533 575 71 41</Typography>

       {/* <Box   sx={{
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("/bina1-scaled.webp")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
   
  }}
>
    <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.578918310048!2d36.7375!3d36.2025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1524f4ad9d78b001%3A0x8d21e49a80ae1a8a!2sGaziantep!5e0!3m2!1sen!2str!4v1699600000000"
        width="60%"
        height="60%"
        
        style={{ border: 0,marginTop:"8%" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

        </Box> */}
    <Typography variant='h4' mt={5}>{t("With")}</Typography>
        <Typography variant='h6'>{t("Shipping")}</Typography>
    <Typography variant='h6'>{t("As")}</Typography>

        </Box>
       
        </>
    )
}