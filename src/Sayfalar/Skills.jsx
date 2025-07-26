import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {  Grid } from '@mui/material';


export default  function Skills(){
    return(
        <>
        <Box sx={{width: "100%", 
    paddingTop: "200px",
    position: "relative",
    height: "100%",
    bgcolor: 'rgba(0, 0, 0, 0.95)',
    color: "wheat",
    textAlign: "center",
    flexGrow: 1,
       }}>
 <Typography variant="h1" sx={{whiteSpace: "pre-line",}} >ALAA&{"\n"}HAMAD</Typography>
   <Typography variant="h6">modanin ruhunu sekilleniyoruz</Typography>
   <Box textAlign={"left"} paddingLeft={"25%"} marginTop={"20%"}>
     <Typography variant='body2' color='gray'>
MYCITY</Typography>
      <Typography variant='h3'>Hakkımızda</Typography>
   </Box>
   <Grid container spacing={10} sx={{
    paddingLeft:{
    md:"20%",
   xs:"15%"
   }
} } marginTop={"3%"}>
  <Grid item size={6}  sx={{ textAlign: "left" }}>
    <Typography variant='h4'  sx={{ marginBottom: "2rem" }}>
      MyCity, köklü geçmişi ve yenilikçi vizyonuyla tekstil sektöründe öncü bir üretici olarak faaliyet göstermektedir.
    </Typography>
    <Typography variant='body1' sx={{ marginBottom: "2rem" }}>
      Hikayemiz, 1985 yılında Müslüm Erdoğan ve oğlu Yaşar Erdoğan’ın Gaziantep’te, üreticilerin ürünlerini farklı şehirlere pazarlayarak iş dünyasına adım atmasıyla başladı. Türkiye’nin dört bir yanını dolaşarak siparişler aldılar, ancak o dönem kendi üretimlerini gerçekleştirmiyorlardı
    </Typography>
    <Typography variant='body1' sx={{ marginBottom: "2rem" }}>
      Sektördeki büyük potansiyeli fark eden Müslüm ve Yaşar Erdoğan, 1990 yılında kendi üretimlerini yapabilmek adına iki mekanik makine satın alarak YAŞAR TRİKO adıyla küçük bir atölye kurdu. Üretime başladıktan kısa bir süre sonra talepler artmaya başladı ve 1995 yılında makine kapasitelerini artırarak altı mekanik makineye ulaştılar.
    </Typography>
    <Typography variant='body1' sx={{ marginBottom: "2rem" }}>
      Teknolojiye ve inovasyona verdiğimiz önem, 2000’li yılların başında ilk bilgisayar destekli makinelerimizi fabrikamıza kazandırmamızı sağladı. Teknolojik altyapımızı geliştirerek daha verimli üretim yapabilmek adına büyük bir adım attık. Şirketimiz, 2006 yılında kurumsallaşarak YAŞAR ERDOĞAN ÖRME TRİKO MAKİNE SAN.TİC.LTD.ŞTİ. adıyla sektörde daha güçlü bir konuma ulaştı.
    </Typography>
    <Typography variant='body1' sx={{ marginBottom: "2rem" }}>
      Yıllar içerisinde sadece örme ürünlerle sınırlı kalmayıp, 2016 yılında jersey ve dokuma giyim üretimine de başladık. Üretim kapasitemizi artırarak, müşterilerimize geniş bir ürün yelpazesi sunmaya başladık. Sektördeki gelişmeleri yakından takip ederek, yenilikçi ve sürdürülebilir üretim anlayışını benimsedik
    </Typography>
    <Typography variant='body1' sx={{ marginBottom: "2rem" }}>
      Bugün, MyCity adıyla faaliyetlerimizi sürdürüyoruz ve tekstil üretiminde kaliteyi ve mükemmeliyeti ön planda tutarak çalışıyoruz. 20.000 m²'lik üretim alanımızda, 450’den fazla çalışanımız, 70 örme ve 240’den fazla konfeksiyon makinemizle üretim yapıyoruz.
    </Typography>
  </Grid>
 <Grid sm={6} md={6} xs={12}>
        <Box
            component="img"
            src="../../public/bina1-scaled.webp"
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
        <Grid container spacing={2}>
            <Grid size={6} item sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"start"}}>
                <Typography variant='h5' style={{marginLeft:"25%",marginBottom:"20px"}}>Vizyonumuz</Typography>
                <Typography  sx={{whiteSpace: "pre-line",}}style={{marginLeft:"25%",color:"gray"}}>Tekstil sektöründe sürdürülebilir üretim anlayışıyla dünya{"\n"}çapında bilinen ve tercih edilen bir marka olmak. Yenilikçi{"\n"}çözümler ve kaliteli üretim ile moda dünyasına yön vermeyi{"\n"}hedefliyoruz.</Typography>
            </Grid>
              <Grid md={6} xs={12} sm={12}> 
            <Box
            component="img"
            src="../../public/bina2-scaled.webp"
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
            <Grid md={6} xs={12} sm={12}> 
            <Box
            component="img"
            src="../../public/bina2_2-768x1024.webp"
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
              <Grid size={6} item sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"start"}}>
                <Typography variant='h5' style={{marginLeft:"25%",marginBottom:"20px"}}>Vizyonumuz</Typography>
                <Typography  sx={{whiteSpace: "pre-line",}}style={{marginLeft:"25%",color:"gray"}}>Tekstil sektöründe sürdürülebilir üretim anlayışıyla dünya{"\n"}çapında bilinen ve tercih edilen bir marka olmak. Yenilikçi{"\n"}çözümler ve kaliteli üretim ile moda dünyasına yön vermeyi{"\n"}hedefliyoruz.</Typography>
            </Grid>
                 <Grid size={6} item sx={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"start"}}>
                <Typography variant='h5' style={{marginLeft:"25%",marginBottom:"20px"}}>Vizyonumuz</Typography>
                <Typography  sx={{whiteSpace: "pre-line",}}style={{marginLeft:"25%",color:"gray"}}>Tekstil sektöründe sürdürülebilir üretim anlayışıyla dünya{"\n"}çapında bilinen ve tercih edilen bir marka olmak. Yenilikçi{"\n"}çözümler ve kaliteli üretim ile moda dünyasına yön vermeyi{"\n"}hedefliyoruz.</Typography>
            </Grid>
              <Grid md={6} xs={12} sm={12}> 
            <Box
            component="img"
            src="../../public/bina2_3-768x1024.webp"
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
        </Grid>
    </Box>

















        </Box>
        
        </>
    )
}