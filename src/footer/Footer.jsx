import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from "react-i18next";

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
<img   src="yvonne.png" width={"400px"} style={{marginTop:"50px"}} alt="" />
            <Typography variant='h6' sx={{color:"gray"}}>{t("working")}</Typography>
  <Typography variant="h5" sx={{marginTop:"10px"}} >{t("Monday")}</Typography>
 <Typography variant="h5" sx={{marginTop:"10px"}} >{t("Tuesday")}</Typography>
  <Typography variant="h5" sx={{marginTop:"10px"}} >{t("Saturday")}</Typography>
    <Typography variant="h5" sx={{marginTop:"10px"}} >{t("Closed")}</Typography>
            <Typography variant='h6' sx={{color:"gray" ,marginTop:"20px"}}>{t("for")}</Typography>
            <Typography variant='h5' m={"10px 0px"}>+90 533 575 71 41</Typography>
      <div style={{background:"white",width:"150px",height:"0.5px",display:"flex",justifySelf:"center",marginTop:"50px",marginBottom:"20px"}}></div>
      
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
  İLETİŞİM
  <ArrowForwardIcon
    className="arrow"
    sx={{
      transition: "transform 0.3s ease",
        
    }}
  />
</Typography>
<hr style={{ border: "none", borderTop: "1px solid gray" ,marginTop:"20px"}} />
<Typography variant="h6"  align="center" color='gray' mt={2}>
  &copy; 2025 Yvonne Fae Markası Tüm Hakları AEP Mühendislik Tekstil Enerji İnşaat San.Tic.Ltd.Şti. 'ne aittir.
</Typography>
<hr style={{ border: "none", borderTop: "1px solid gray" ,marginTop:"20px"}} />
        </Box>
        </>
    )
}