import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  Button, Grid } from '@mui/material';
import { useTranslation } from "react-i18next";

export default  function Skills(){
  const { t } = useTranslation();
    return(
        <>
        <Box sx={{width: "100%", 
    paddingTop: "200px",
    position: "relative",
    height: "100%",
    bgcolor: 'rgba(0, 0, 0, 0.95)',
    color: "wheat",
    textAlign: "center",
    flexGrow: 1, backgroundImage:
   'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("/yvonnesite/foto2.jpg")',
   backgroundSize:"cover",    
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center", 
       }}>  
          <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  textAlign: "center",
                  color: "white",
                }}
              >
             <Box justifyContent={"center"}display={"flex"}>
      <img
        src="yvonne.png"
        width={"500px"}
        alt=""
   
      /> 
             </Box>
        
               
              </Box>
   <Box textAlign={"left"} paddingLeft={"25%"} marginTop={"6%"}>
     <Typography variant='body2' color='gray'>
Yvonne</Typography>
          <Typography variant='h4'>{t("AboutUs")}</Typography>
   
   </Box>
   <Grid container spacing={10} sx={{
    paddingLeft:{
    md:"20%",
   xs:"15%",
   }
} } marginTop={"2%"}>
  <Grid item size={6}  sx={{ textAlign: "left",width:"45%" }}>
        <Typography variant="h6" style={{ marginBottom: "2rem"}}>{t("AboutUsP")}</Typography>
  </Grid>
 <Grid sm={6} md={6} xs={12}>
        <Box
            component="img"
            src= "foto14.jpg"
            alt="MyCity Building"
            sx={{
             width: {md:"300px",
                sm:"200px",
                xs:"400px"
              },
              height: {md:"400px",
                sm:"330px",
                xs:"500"
              },
              alignItems:"center",
              borderTopLeftRadius: "150px",
              borderBottomRightRadius:"150px",
              objectFit:{md:"contain",sm:"cover"},
            }}
          />  
    
 </Grid>
   </Grid>
        
 

 <Box
      component="ul"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        listStyle: "none",
        padding: 0,
        margin: 0,
        gap: { xs: 4, md: 5 },
      }}
    >
      <Box
        component="li"
        sx={{
          textAlign: "center",
          alignSelf: { xs: "flex-end", md: "center" },
          mx: { md: 2 },
        }}
      >
        <Typography fontSize={{xs:"40px",md:"60px"}}>1M</Typography>
        <Typography variant="body2" color="gray">Her yıl 1 milyon triko</Typography>
      </Box>
    
      <Box
        component="li"
        sx={{
          textAlign: "center",
          alignSelf: { xs: "center", md: "center" },
          mx: { md: 2 },
        }}
      >
        <Typography fontSize={{xs:"40px",md:"60px"}}>750bin</Typography>
        <Typography variant="body2" color="gray">Her yıl 750bin Jersey</Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          borderLeft: "2px solid gray",
          height: "80px",
          mx: 2,
        }}
      />
      <Box
        component="li"
        sx={{
          textAlign: "center",
          alignSelf: { xs: "flex-start", md: "center" },
          mx: { md: 2 },
        }}
      >
        <Typography fontSize={{xs:"40px",md:"60px"}}>750bin</Typography>
        <Typography variant="body2" color="gray">Her yıl 750bin dokuma giyim kumaşı</Typography>
      </Box>
    </Box>
    <hr style={{color:"gray",margin:"8% 0"}} />

    <Box>
        <Grid spacing={2}>
             <Box style={{display:"flex",padding:"40px 0px",justifyContent:"space-around",backgroundImage:
            'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto20.jpg")',}}>
            <Grid size={6}  sx={{width:"35%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"start"}}>
                <Typography variant='h5' style={{marginLeft:"25%",marginBottom:"20px"}}>      
      {t("Design")}</Typography>
                <Typography  sx={{whiteSpace: "pre-line",}}style={{marginLeft:"25%",color:"gray"}}>
                   {t("DesignP")}
                  </Typography>
            </Grid>
         
               <Grid md={6} xs={12} sm={12}> 
            <Box
            component="img"
            src="foto20.jpg"
            alt="MyCity Building"
            sx={{
             width: {md:"600px",
                sm:"200px",
                xs:"450px"
              },
              height: {md:"800px",
                sm:"330px",
                xs:"550px"
              },
              alignItems:"center",
              borderTopLeftRadius: "30rem",
              borderTopRightRadius:"30rem",
              objectFit:"cover",
            }}
          /> 
           </Grid>
            </Box>
             
<Box style={{display:"flex",padding:"40px 0px",justifyContent:"space-around",backgroundImage:
            'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto5.jpg")',}}>
  <Grid md={6} xs={12} sm={12}> 
            <Box
            component="img"
            src="foto15.jpg"
            alt="MyCity Building"
            sx={{
             width: {md:"600px",
                sm:"200px",
                xs:"450px"
              },
              height: {md:"800px",
                sm:"330px",
                xs:"550px"
              },
          marginLeft:"8rem",
              borderTopLeftRadius: "30rem",
              borderTopRightRadius:"30rem",
              objectFit:"cover",
            }}
          /> 
           </Grid>
              <Grid size={6} sx={{width:"25%",display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <Typography variant='h5' style={{marginLeft:"25%",marginBottom:"20px"}}>{t("Cutting")}</Typography>
                <Typography  sx={{whiteSpace: "pre-line",}}style={{marginLeft:"25%",color:"gray"}}>{t("CuttingP")}  </Typography>
            </Grid>
</Box>
             <Box style={{display:"flex",padding:"40px 0px",justifyContent:"space-around",backgroundImage:
            'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto24.jpg")',}}>
                <Grid size={6}  sx={{width:"35%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"start"}}>
  <Typography variant='h5' style={{marginLeft:"25%",marginBottom:"20px"}}>{t("Quality")}</Typography>
                <Typography  sx={{whiteSpace: "pre-line",}}style={{marginLeft:"25%",color:"gray"}}>{t("QualityP")}  </Typography>
            </Grid>
              <Grid md={6} xs={12} sm={12}> 
            <Box
            component="img"
            src=  "foto24.jpg"
            alt="MyCity Building"
            sx={{
             width: {md:"600px",
                sm:"200px",
                xs:"450px"
              },
              height: {md:"800px",
                sm:"330px",
                xs:"550px"
              },
              alignItems:"center",
              borderTopLeftRadius: "30rem",
              borderTopRightRadius:"30rem",
              objectFit:"cover",
            }}
          /> 
           </Grid>
             </Box>
                           
<Box style={{display:"flex",padding:"40px 0px",justifyContent:"space-around",backgroundImage:
            'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto2.jpg")',}}>
  <Grid md={6} xs={12} sm={12}> 
            <Box
            component="img"
            src="foto1.jpg"
            alt="MyCity Building"
            sx={{
             width: {md:"600px",
                sm:"200px",
                xs:"450px"
              },
              height: {md:"800px",
                sm:"330px",
                xs:"550px"
              },
          marginLeft:"8rem",
              borderTopLeftRadius: "30rem",
              borderTopRightRadius:"30rem",
              objectFit:"cover",
            }}
          /> 
           </Grid>
              <Grid size={6} sx={{width:"25%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"start"}}>
          <Typography variant='h5' style={{marginLeft:"25%",marginBottom:"20px"}}>{t("Iron")}</Typography>
                <Typography  sx={{whiteSpace: "pre-line",}}style={{marginLeft:"25%",color:"gray"}}>{t("IronP")}  </Typography>
            </Grid>
</Box>
             <Box style={{display:"flex",padding:"40px 0px",justifyContent:"space-around",backgroundImage:
            'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto23.jpg")',}}>
                <Grid size={6}  sx={{width:"25%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"start"}}>
             <Typography variant='h5' style={{marginLeft:"25%",marginBottom:"20px"}}>{t("Barcoding")}</Typography>
                <Typography  sx={{whiteSpace: "pre-line",}}style={{marginLeft:"25%",color:"gray"}}>{t("BarcodingP")}  </Typography>
            </Grid>
              <Grid md={6} xs={12} sm={12}> 
            <Box
            component="img"
            src=  "foto22.jpg"
            alt="MyCity Building"
            sx={{
             width: {md:"600px",
                sm:"200px",
                xs:"450px"
              },
              height: {md:"800px",
                sm:"330px",
                xs:"550px"
              },
              alignItems:"center",
              borderTopLeftRadius: "30rem",
              borderTopRightRadius:"30rem",
              objectFit:"cover",
            }}
          /> 
           </Grid>
             </Box> 
        </Grid>
    </Box>
        </Box>
        
        </>
    )
}