import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
export default function Footer(){
      const { t } = useTranslation();
  
    return(
        <>
        <Box
                sx={{
          width: "100%",
          height: "100%",
          bgcolor: 'rgba(0, 0, 0, 0.95)',
          color:"wheat",
          textAlign:"center", flexGrow: 1 
        }}
        >
<img   src="yvonne.png" width={"200px"} style={{marginTop:"50px"}} alt="" />
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

  <div style={{background:"white",width:"150px",height:"0.5px",display:"flex",justifySelf:"center",marginTop:"50px",marginBottom:"20px"}}></div>
  <Link to={"Contact"}   style={{ textDecoration: "none", color: "inherit" }} >
<Typography
  variant="h6"
  sx={{
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    gap: "2px",
    "&:hover .arrow": {
      transform: "translateY(-3px)",
      color:"white"
    },
       "&:hover": {
          color:"white", 
    },
  }}
>
{t("ile")}
  <ArrowForwardIcon
    className="arrow"
    sx={{
      transition: "transform 0.3s ease",
        
    }}
  />
</Typography>
</Link>    

  </Grid>
    <Grid size={4} width={"25%"}>
 <Typography variant='h6' sx={{color:"gray"}}>{t("magaza")}</Typography>
  <Typography variant="h5" sx={{marginTop:"10px"}} >
Mehmet Nesih Özmen Mah. Selvi Sok. No:13 Merter/Güngören/İstanbul
</Typography>
  </Grid>
</Grid>
<hr style={{ border: "none", borderTop: "1px solid gray" ,marginTop:"20px"}} />
<Typography variant="h6"  align="center" color='gray' mt={2}>
  &copy; 2025 Yvonne Fae Markası Tüm Hakları AEP Mühendislik Tekstil Enerji İnşaat San.Tic.Ltd.Şti. 'ne aittir.
</Typography>
<hr style={{ border: "none", borderTop: "1px solid gray" ,marginTop:"20px"}} />
        </Box>
        </>
    )
}