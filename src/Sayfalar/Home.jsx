import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, ButtonBase } from '@mui/material';
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Footer from '../footer/Footer'
import { useTranslation } from "react-i18next";

const images = ["foto1.jpg","foto2.jpg","foto3.jpg","foto4.jpg","foto5.jpg","foto6.jpg","foto8.jpg","foto7.jpg","foto9.jpg","foto10.jpg","foto11.jpg","foto12.jpg","foto13.jpg","foto14.jpg","foto15.jpg","foto16.jpg","foto17.jpg","foto18.jpg","foto19.jpg","foto20.jpg","foto21.jpg","foto22.jpg","foto23.jpg","foto24.jpg","foto25.jpg",
];
export default function Home() {
    const { t } = useTranslation();
  const data = [
    { number: "1 Milyon", text: "Yıllık 1 milyon adet triko üretimi" },
    { number: "750 bin", text: "Yıllık 750 bin adet jersey üretimi" },
    { number: "750 bin", text: "Yıllık 750 bin adet dokuma giyim ürünü üretiyoruz." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    pauseOnHover: false,
  };

  const sliderImages = [
    "foto2.jpg",
    "foto1.jpg",
    "foto20.jpg",
    "foto16.jpg"
  ];

  return (
    <Box>
      {/* Hero Carousel */}
      <Box sx={{ "& .slick-dots li button:before": { color: "white" } }}>
        <Slider {...settings}>
          {sliderImages.map((url, index) => (
            <Box
              key={index}
              sx={{
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Optional Text Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
              />
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  textAlign: "center",
                  color: "white",
                }}
              >
             <Box justifyContent={"center"} mt={"20%"} display={"flex"}>
                               <img
        src="yvonne.png"
        width={"500px"}
        alt=""
   
      /> 
             </Box>
        
               
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Section 1 */}
      <Box
        sx={{
          padding: "10%",
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto22.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" color="wheat" mb={4}>
         Vizyon & Misyon & Degerleri 
        </Typography>
        
        <Grid container spacing={16}>
          <Grid size={6}>  <Box
          sx={{     
            backgroundColor: "rgba(10, 10, 39, 0.25)",
            backdropFilter: "blur(4px)",
            color: "wheat",
            flexDirection: "column",
            gap: 2,
            zIndex: 900,
            padding: "5%",
          }}
        >
          <Typography variant="h6" color="gray">
            {t("vision")}
          </Typography>
                 <Typography variant="h6" style={{ marginBottom: "1rem"}}>{t("visionp")}</Typography>
                
              
                       <Typography variant="h6" color="gray">
            {t("Reliability")}
          </Typography>
                 <Typography variant="h6" >{t("Reliabilityp")}</Typography>   
                         <Typography variant="h6" color="gray">
            {t("Career")}
          </Typography>
                 <Typography variant="h6" style={{ marginBottom: "1rem"}}>{t("Careerp")}</Typography>  
                 <div style={{ background: "white", width: "150px", height: "0.5px"}}></div>
          <Link to="/contact" style={{ textDecoration: "none", color: "wheat" }}>
            <Typography
              variant="h6"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                gap: 1,
                mt: 2,
                "&:hover .arrow": { transform: "translateY(-3px)", color: "white" },
                "&:hover": { color: "white" },
              }}
            >
              iletisim
              <ArrowForwardIcon
                className="arrow"
                sx={{ transition: "transform 0.3s ease" }}
              />
            </Typography>
          </Link> 
                   
        </Box>
        </Grid>
           <Grid size={6}>  <Box
          sx={{
            backgroundColor: "rgba(10, 10, 39, 0.25)",
            backdropFilter: "blur(4px)",
            color: "wheat",
            flexDirection: "column",
            gap: 2,
            zIndex: 900,
            padding: "5%",
          }}
        >
          <Typography variant="h6" color="gray">
            {t("mission")}
          </Typography>
                 <Typography variant="h6" style={{ marginBottom: "1rem"}}>{t("missionp")}</Typography>
                      <Typography variant="h6" color="gray">
            {t("Efficiency")}
          </Typography>
                 <Typography variant="h6" style={{ marginBottom: "1rem"}}>{t("Efficiencyp")}</Typography> 
               <Typography variant="h6" color="gray">
            {t("Innovation")}
          </Typography>
                 <Typography variant="h6" >{t("Innovationp")}</Typography>  
        </Box>
        </Grid>
         

        </Grid>
       
       
       
        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#c5c5c5dc",
            marginTop: 12,
            borderRadius: "2px",
          }}
        />
      </Box>

      
<div className="container" data-aos="fade-up" style={{ padding:"50px" ,backgroundImage:
            'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto20.jpg")',}}>

      <PhotoProvider maskOpacity={0.9}>
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          slidesPerGroup={4}
          centeredSlides={true}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 0 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1200: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <PhotoView src={src}>
                <Box
                 component="img"
                src={src}
                 alt={`gallery-${index}`}
                  sx={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    cursor: "pointer",
                    opacity: 0.9,
                    transition: "transform 0.3s ease, opacity 0.3s ease",'&:hover': {
                        transform: 'scale(1.05)',
                        opacity: 0.5,
                      },
                  }}
                   
                />
              </PhotoView>
            </SwiperSlide>
          ))}
        </Swiper>
      </PhotoProvider>
    </div>
      {/* Section 2: Image + Stats */}
      <Box
        sx={{
          padding: "5%",
            backgroundImage:
            'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto24.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box
              component="img"
              src="foto14.jpg"
              alt="MyCity Building"
              sx={{
                width: { md: "500px", sm: "100%", xs: "100%" },
                height: { md: "700px", sm: "auto", xs: "auto" },
                objectFit: "cover",
                 borderTopRightRadius:"150px"
              }}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              {data.map((item, i) => (
                <ButtonBase
                  key={i}
                  sx={{
                    flex: 1,
                    backdropFilter: "blur(4px)",
                    color: "#fbe8d3",
                    padding: "30px 80px",
                    textAlign: "center",
                    flexDirection: "column",
                    borderRight: i !== data.length - 1 ? { md: "1px solid gray", xs: "none" } : "none",
                    borderBottom: i !== data.length - 1 ? { xs: "1px solid gray", md: "none" } : "none",
                    "&:hover": {
                      backgroundColor: "#151515",
                      borderLeft: "4px solid wheat",
                    },
                    transition: "0.3s",
                    display: "flex",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", fontSize: "2.5rem", mb: 1 }}
                  >
                    {item.number}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "gray" }}>
                    {item.text}
                  </Typography>
                </ButtonBase>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Section 3 */}
      <Box
        sx={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto8.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          padding:"60px 0px",
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            borderTopLeftRadius: "35%",
            marginLeft: "18%",
            backgroundColor: "rgba(10, 10, 39, 0.25)",
            backdropFilter: "blur(4px)",
            color: "wheat",
            width: "550px",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            zIndex: 900,
            padding: "5%",
          }}
        >
          <Typography variant="h6" color="gray" marginLeft="10%">
            {t("Policy")}
          </Typography>
                 <Typography variant="h6" style={{ marginBottom: "1rem"}}>{t("ensure")}</Typography>
                  <Typography variant="h6" style={{ marginBottom: "1rem"}}>{t("take")}</Typography>
                 <Typography variant="h6" style={{ marginBottom: "1rem"}}>{t("Benefit")}</Typography>

                 <Typography variant="h6" >{t("reflect")}</Typography>

          <div style={{ background: "white", width: "150px", height: "0.5px", marginTop: "50px" }}></div>
          <Link to="/Skills" style={{ textDecoration: "none", color: "wheat" }}>
            <Typography
              variant="h6"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                cursor: "pointer",
                gap: 1,
                mt: 2,
                "&:hover .arrow": { transform: "translateY(-3px)", color: "white" },
                "&:hover": { color: "white" },
              }}
            >
              KURUMSAL
              <ArrowForwardIcon
                className="arrow"
                sx={{ transition: "transform 0.3s ease" }}
              />
            </Typography>
          </Link>
        </Box>
      </Box>
<Footer/>
    </Box>
    
  );
}
