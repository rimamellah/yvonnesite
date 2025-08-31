import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  Button, Grid } from '@mui/material';
import { useTranslation } from "react-i18next";

export default  function Skills(){
  const { t } = useTranslation();
   const data = [
    { number: t("production.item1.number"), text: t("production.item1.text") },
    { number: t("production.item2.number"), text: t("production.item2.text") },
    { number: t("production.item3.number"), text: t("production.item3.text") },
    { number: t("production.item4.number"), text: t("production.item4.text") },
  ];
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
        width={"250px"}
        alt=""
   
      /> 
             </Box>
        
               
              </Box>
   <Box textAlign={"left"} paddingLeft={"25%"} marginTop={"2%"}>
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
<Grid item size={6}  alignItems={{ md: "flex-start" }} sx={{width:{sm:"100%",md:"50%",xs:"100%"}}}>
  <Box  display="flex"
        flexDirection="column"
       >
        <Typography variant="h6" style={{ marginBottom: "2rem"}}>{t("AboutUsP")}</Typography>
  </Box>
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
 <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            {data.map((item, i) => (
              <Typography
                key={i} 
                sx={{
                  flex: 1,
                 
                  backdropFilter: "blur(4px)",
                  color: "#fbe8d3",
                  p: { xs: "20px", md: "30px 80px" },
                  textAlign: "center",
                  flexDirection: "column",
                  borderRight: i !== data.length - 1 ? { md: "1px solid gray", xs: "none" } : "none",
                  borderBottom: i !== data.length - 1 ? { xs: "1px solid gray", md: "none" } : "none",
                  "&:hover": {
                    backgroundColor: "#151515",
                    borderLeft: "4px solid wheat",
                  },
                  transition: "0.3s",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", md: "2.5rem" }, mb: 1 }}
                >
                  {item.number}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {item.text}
                </Typography>
              </Typography>
            ))}
          </Box>
    
     
     
      
    </Box>
    <hr style={{color:"gray",margin:"8% 0"}} />

   
    <Box>
  {/* Design */}
  <Grid
    container
    spacing={2}
    alignItems="center"
    sx={{
      py: "40px",
      px: { xs: 2, md: 0 },
      justifyContent: "space-around",
      backgroundImage:
        'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto20.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* النص */}
    <Grid item size={6} order={{ xs: 2, md: 1 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        sx={{ ml: { md: "25%" } }}  // نفس الهامش اللي كان عندك
      >
        <Typography variant="h5" sx={{ mb: "20px", textAlign: { xs: "center", md: "left" } }}>
          {t("Design")}
        </Typography>
        <Typography sx={{ whiteSpace: "pre-line", color: "gray", textAlign: { xs: "center", md: "left" } }}>
          {t("DesignP")}
        </Typography>
      </Box>
    </Grid>

    {/* الصورة */}
    <Grid item xs={12} md={6} textAlign="center" order={{ xs: 1, md: 2 }}>
      <Box
        component="img"
        src="foto20.jpg"
        alt="MyCity Building"
        sx={{
          width: { xs: "100%", sm: "80%", md: "600px" },
          height: { xs: "auto", md: "800px" },
          borderTopLeftRadius: "30rem",
          borderTopRightRadius: "30rem",
          objectFit: "cover",
        }}
      />
    </Grid>
  </Grid>

  {/* Cutting */}
  <Grid
    container
    spacing={2}
    alignItems="center"
    sx={{
      py: "40px",
      px: { xs: 2, md: 0 },
      justifyContent: "space-around",
      backgroundImage:
        'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto5.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* الصورة (يسار على الشاشات الكبيرة) */}
    <Grid item xs={12} md={6} textAlign="center" order={{ xs: 2, md: 1 }}>
      <Box
        component="img"
        src="foto15.jpg"
        alt="MyCity Building"
        sx={{
          width: { xs: "100%", sm: "80%", md: "600px" },
          height: { xs: "auto", md: "800px" },
          ml: { md: "8rem" }, // نفس الـ marginLeft اللي عندك
          borderTopLeftRadius: "30rem",
          borderTopRightRadius: "30rem",
          objectFit: "cover",
        }}
      />
    </Grid>

    {/* النص (يمين على الكبيرة) */}
    <Grid item size={6} order={{ xs: 1, md: 2 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        sx={{ ml: { md: "25%" } }}
      >
        <Typography variant="h5" sx={{ mb: "20px", textAlign: { xs: "center", md: "left" } }}>
          {t("Cutting")}
        </Typography>
        <Typography sx={{ whiteSpace: "pre-line", color: "gray", textAlign: { xs: "center", md: "left" } }}>
          {t("CuttingP")}
        </Typography>
      </Box>
    </Grid>
  </Grid>

  {/* Quality */}
  <Grid
    container
    spacing={2}
    alignItems="center"
    sx={{
      py: "40px",
      px: { xs: 2, md: 0 },
      justifyContent: "space-around",
      backgroundImage:
        'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto24.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* النص */}
    <Grid item size={6} order={{ xs: 2, md: 1 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        sx={{ ml: { md: "25%" } }}
      >
        <Typography variant="h5" sx={{ mb: "20px", textAlign: { xs: "center", md: "left" } }}>
          {t("Quality")}
        </Typography>
        <Typography sx={{ whiteSpace: "pre-line", color: "gray", textAlign: { xs: "center", md: "left" } }}>
          {t("QualityP")}
        </Typography>
      </Box>
    </Grid>

    {/* الصورة */}
    <Grid item xs={12} md={6} textAlign="center" order={{ xs: 1, md: 2 }}>
      <Box
        component="img"
        src="foto24.jpg"
        alt="MyCity Building"
        sx={{
          width: { xs: "100%", sm: "80%", md: "600px" },
          height: { xs: "auto", md: "800px" },
          borderTopLeftRadius: "30rem",
          borderTopRightRadius: "30rem",
          objectFit: "cover",
        }}
      />
    </Grid>
  </Grid>

  {/* Iron */}
  <Grid
    container
    spacing={2}
    alignItems="center"
    sx={{
      py: "40px",
      px: { xs: 2, md: 0 },
      justifyContent: "space-around",
      backgroundImage:
        'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto2.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* الصورة (يسار على الكبيرة) */}
    <Grid item xs={12} md={6} textAlign="center" order={{ xs: 2, md: 1 }}>
      <Box
        component="img"
        src="foto1.jpg"
        alt="MyCity Building"
        sx={{
          width: { xs: "100%", sm: "80%", md: "600px" },
          height: { xs: "auto", md: "800px" },
          ml: { md: "8rem" },
          borderTopLeftRadius: "30rem",
          borderTopRightRadius: "30rem",
          objectFit: "cover",
        }}
      />
    </Grid>

    {/* النص (يمين على الكبيرة) */}
    <Grid item size={6} order={{ xs: 1, md: 2 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        sx={{ ml: { md: "25%" } }}
      >
        <Typography variant="h5" sx={{ mb: "20px", textAlign: { xs: "center", md: "left" } }}>
          {t("Iron")}
        </Typography>
        <Typography sx={{ whiteSpace: "pre-line", color: "gray", textAlign: { xs: "center", md: "left" } }}>
          {t("IronP")}
        </Typography>
      </Box>
    </Grid>
  </Grid>

  {/* Barcoding */}
  <Grid
    container
    spacing={2}
    alignItems="center"
    sx={{
      py: "40px",
      px: { xs: 2, md: 0 },
      justifyContent: "space-around",
      backgroundImage:
        'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto23.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
  
    <Grid item size={6} order={{ xs: 1, md: 1 }}>
      <Box display="flex" flexDirection="column" alignItems={{ xs: "center", md: "flex-start" }}>
        <Typography variant="h5" sx={{ mb: "20px", textAlign: { xs: "center", md: "left" } }}>
          {t("Barcoding")}
        </Typography>
        <Typography sx={{ whiteSpace: "pre-line", color: "gray", textAlign: { xs: "center", md: "left" } }}>
          {t("BarcodingP")}
        </Typography>
      </Box>
    </Grid>

    {/* الصورة */}
    <Grid item xs={12} md={6} textAlign="center" order={{ xs: 2, md: 2 }}>
      <Box
        component="img"
        src="foto22.jpg"
        alt="MyCity Building"
        sx={{
          width: { xs: "100%", sm: "80%", md: "600px" },
          height: { xs: "auto", md: "800px" },
          borderTopLeftRadius: "30rem",
          borderTopRightRadius: "30rem",
          objectFit: "cover",
        }}
      />
    </Grid>
  </Grid>
</Box>

        </Box>
        
        </>
    )
}

