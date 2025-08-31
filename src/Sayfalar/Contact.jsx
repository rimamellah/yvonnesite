import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from "react-i18next";

import { Link } from 'react-router-dom';
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
          
       <Box
                      sx={{
                width: "100%",
                height: "100%",
                color:"wheat",
                textAlign:"center", flexGrow: 1 
              }}
              >
                <Typography variant="h4" m="5% 0px">{t("ile")}</Typography>
      <Grid continer spacing={2} display={"flex"} justifyContent={"space-around"}>
        <Grid size={4} width={"25%"}>
       <Typography variant='h6' sx={{color:"gray"}}>{t("ofis")}</Typography>
        <Typography variant="h5" sx={{marginTop:"10px"}} >
      Batıkent Mah. 09132 Sok. No:5/E Şehitkamil/Gaziantep
      </Typography>
      
        </Grid>
          <Grid size={4} width={"25%"}>
       <Typography variant='h6' sx={{color:"gray"}}>{t("fabrika")}</Typography>
        <Typography variant="h5" sx={{marginTop:"10px"}} >
      Tekstilkent Mah. 47009 sok.No:77 Şahinbey/Gaziantep
      </Typography>
        </Grid>
          <Grid size={4} width={"25%"}>
       <Typography variant='h6' sx={{color:"gray"}}>{t("magaza")}</Typography>
        <Typography variant="h5" sx={{marginTop:"10px"}} >
      Mehmet Nesih Özmen Mah. Selvi Sok. No:13 Merter/Güngören/İstanbul
      </Typography>
        </Grid>
      </Grid>
                  </Box>
           <Grid container spacing={2} mt={"7%"}>
             <Grid size={6}>
              <Typography variant='h6' sx={{color:"gray"}}>{t("ile")}</Typography>
               <Typography variant="h5" sx={{marginTop:"10px"}} >{t("arap")} +90 534 590 9680</Typography>
 <Typography variant="h5" sx={{marginTop:"10px"}} >{t("tur")} +90 549 190 9582 </Typography>

  <Typography variant="h5" sx={{marginTop:"10px"}} >{t("ing")} +90 549 190 9582</Typography>

      <Typography variant="h5" sx={{marginTop:"10px"}} >{t("rus")} +90 549 190 9582</Typography>
      <Typography variant="h5" sx={{marginTop:"10px"}} >{t("fabof")} +90 533 575 7141</Typography>
             </Grid>
      
      <Grid size={6} display={"flex"} flexDirection={"column"}> <Typography variant='h6' sx={{color:"gray"}}>{t("working")}</Typography>
  <Typography variant="h5" sx={{marginTop:"10px"}} >{t("Monday")}</Typography>
 <Typography variant="h5" sx={{marginTop:"10px"}} >{t("Tuesday")}</Typography>
  <Typography variant="h5" sx={{marginTop:"10px"}} >{t("Saturday")}</Typography>
      <Typography variant="h5" sx={{marginTop:"10px"}} >{t("Closed")}</Typography>

  </Grid>
      
          
        
           </Grid>

          {/* <Box textAlign={"center"}>
              <Typography variant='h6' sx={{color:"gray" ,marginTop:"20px"}}>{t("for")}</Typography>
    <Typography variant='h4'  width={"50%"} mt={5}>{t("With")}</Typography>
        <Typography variant='h6'  width={"50%"}>{t("Shipping")}</Typography>
    <Typography variant='h6'  width={"50%"} >{t("As")}</Typography>
          </Box> */}
<Box 
  display="flex" 
  justifyContent="center" 
  alignItems="center" 
  minHeight="30vh"   // ekranın tamamını kaplar
  textAlign="center"
>
  <Box width="50%">   {/* yazı alanını daraltır */}
    <Typography variant="h6" sx={{ color: "gray", mt: 2 }}>
      {t("for")}
    </Typography>

    <Typography variant="h4" sx={{ mt: 3 }}>
      {t("With")}
    </Typography>

    <Typography variant="h6">{t("Shipping")}</Typography>
    <Typography variant="h6">{t("As")}</Typography>
  </Box>
</Box>

<img   src="footer.png" width={"170px"} alt="" />

  <hr style={{ border: "none", borderTop: "1px solid gray" ,marginTop:"20px"}} />
      <Typography variant="h6"  align="center" color='gray' mt={2}>
        &copy; 2025 Yvonne Fae Markası Tüm Hakları AEP Mühendislik Tekstil Enerji İnşaat San.Tic.Ltd.Şti. 'ne aittir.
      </Typography>
        </Box>
       
        </>
    )
}