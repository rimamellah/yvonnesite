import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Footer(){
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
<img src="https://www.mycity.com.tr/wp-content/uploads/2025/04/mycityWeb21.webp" width={"100px"} style={{marginTop:"100px"}} alt="" />
 <Typography variant="h1" sx={{marginTop:"20px",whiteSpace: "pre-line",}} >ALAA&{"\n"}HAMAD</Typography>
   <Typography variant="h6">modanin ruhunu sekilleniyoruz</Typography>
<Typography variant='h5' sx={{marginTop:"50px"}}>myCity</Typography>
 <Grid container spacing={2} sx={{marginTop:"70px"}}>
        <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant='h6' sx={{color:"gray"}}>Ofis</Typography>
 <Typography variant="h5" sx={{marginTop:"20px",whiteSpace: "pre-line",}} >Tekstilkent Mh.{"\n"}Demokrasi Blv. No: 147/A{"\n"}Şahinbey / GAZİANTEP</Typography>
            <Typography variant='h6' sx={{color:"gray" ,marginTop:"40px"}}>Telefon(Ofis)</Typography>
            <Typography variant='h5'>+90 531 000 00 00</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
             <Typography variant='h6' sx={{color:"gray"}}>
                Fabrika
            </Typography>
             <Typography variant="h5" sx={{marginTop:"20px",whiteSpace: "pre-line",}} >Tekstilkent Mh.{"\n"}Demokrasi Blv. No: 147/A{"\n"}Şahinbey / GAZİANTEP</Typography>
             <Typography variant='h6' sx={{color:"gray" ,marginTop:"40px"}}>Telefon(Ofis)</Typography>
            <Typography variant='h5'>+90 531 000 00 00</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
             <Typography variant='h6' sx={{color:"gray"}}>
                Toptan Satış Mağazası
            </Typography>
             <Typography variant="h5" sx={{marginTop:"20px",whiteSpace: "pre-line",}} >Tekstilkent Mh.{"\n"}Demokrasi Blv. No: 147/A{"\n"}Şahinbey / GAZİANTEP</Typography>
     <Typography variant='h6' sx={{color:"gray" ,marginTop:"40px"}}>Telefon(Ofis)</Typography>
            <Typography variant='h5'>+90 531 000 00 00</Typography>
        </Grid>
      </Grid>
      <div style={{background:"white",width:"150px",height:"0.5px",display:"flex",justifySelf:"center",marginTop:"90px",marginBottom:"20px"}}></div>
      
<Typography
  variant="h6"
  sx={{
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    gap: "4px",
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
<hr style={{ border: "none", borderTop: "1px solid gray", marginTop:"70px"}} />
<Typography variant="h6"  align="center" color='gray' marginTop="50px">
  &copy; 2025 myCity Tüm Hakları Saklıdır.
</Typography>
        </Box>
        </>
    )
}