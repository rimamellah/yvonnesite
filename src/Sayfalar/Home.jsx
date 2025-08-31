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
    { number: t("production.item1.number"), text: t("production.item1.text") },
    { number: t("production.item2.number"), text: t("production.item2.text") },
    { number: t("production.item3.number"), text: t("production.item3.text") },
    { number: t("production.item4.number"), text: t("production.item4.text") },
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
    "foto20.jpg",
    "foto16.jpg"
  ];

return (
  <Box sx={{}}>
    {/* Hero Carousel */}
    <Box sx={{}}>
          
              <Slider {...settings}>
        {sliderImages.map((url, index) => (
          <Box
            key={index}
            sx={{
              height: { xs: "50vh", sm: "70vh", md: "100vh" }, // مرن مع حجم الشاشة
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "relative",
            }}
          />
         
        ))}
       
      </Slider>
        
      
    </Box>
    {/* Section 1 */}
    <Box
      sx={{
        padding: { xs: "5%", md: "10%" },
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto22.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: { xs: "60vh", md: "50vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        
      }}
    >
      <Typography variant="h3" color="white" mb={2} textAlign="center">
         {t("vsms")}
      </Typography>

      <Grid container spacing={4} mt={2}>
        <Grid item size={6}>
          <Box
            sx={{
              backgroundColor: "rgba(10, 10, 39, 0.25)",
              backdropFilter: "blur(4px)",
              color: "wheat",
              flexDirection: "column",
              gap: 2,
              padding: { xs: "5%", md: "10%" },
            }}
          >
            <Typography variant="h6" color="gray">
              {t("vision")}
            </Typography>
            <Typography variant="body1" mb={2}>
              {t("visionp")}
            </Typography>

            <Typography variant="h6" color="gray">
              {t("Reliability")}
            </Typography>
            <Typography variant="body1" mb={2}>
              {t("Reliabilityp")}
            </Typography>

            <Typography variant="h6" color="gray">
              {t("Career")}
            </Typography>
            <Typography variant="body1">{t("Careerp")}</Typography>

            <Box
              sx={{
                background: "white",
                width: "150px",
                height: "0.5px",
                mt: 3,
              }}
            />
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
                  {t("about")}
                <ArrowForwardIcon
                  className="arrow"
                  sx={{ transition: "transform 0.3s ease" }}
                />
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item size={6}>
          <Box
            sx={{
              backgroundColor: "rgba(10, 10, 39, 0.25)",
              backdropFilter: "blur(4px)",
              color: "wheat",
              flexDirection: "column",
              gap: 2,
              padding: { xs: "5%", md: "10%" },
            }}
          >
            <Typography variant="h6" color="gray">
              {t("mission")}
            </Typography>
            <Typography variant="body1" mb={2}>
              {t("missionp")}
            </Typography>

            <Typography variant="h6" color="gray">
              {t("Innovation")}
            </Typography>
            <Typography variant="body1" mb={2}>
              {t("Innovationp")}
            </Typography>

            <Typography variant="h6" color="gray">
              {t("Efficiency")}
            </Typography>
            <Typography variant="body1">{t("Efficiencyp")}</Typography>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "#c5c5c5dc",
          mt: 6,
        }}
      />
    </Box>
    {/* Gallery Section */}
    <Box
      sx={{
        p: { xs: 2, md: 6 },
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto20.jpg")',
      }}
    >
      <PhotoProvider maskOpacity={0.9}>
        <Swiper
          modules={[Autoplay, Pagination]}
  loop
  speed={600}
  autoplay={{ delay: 5000 }}
  
  pagination={{ clickable: true }}

  breakpoints={{
     0:   { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 10 },  // أصغر من 320
  320: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },  // من 320px
    768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 20 },
    1200: { slidesPerView: 5, slidesPerGroup: 4, spaceBetween: 20 }, // خليها 5
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
                    height: { xs: 300, sm: 400, md: 500 },
                    objectFit: "cover",
                    borderRadius: "8px",
                    cursor: "pointer",
                    opacity: 0.9,
                    transition: "transform 0.3s ease, opacity 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      opacity: 0.5,
                    },
                  }}
                />
              </PhotoView>
            </SwiperSlide>
          ))}
        </Swiper>
      </PhotoProvider>
    </Box>
    {/* Section 2: Image + Stats */}
    <Box
      sx={{
        p: { xs: 2, md: "5%" },
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("foto24.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="foto14.jpg"
            alt="MyCity Building"
            sx={{
              width: { xs: "100%", md: "500px" },
              height: { xs: "auto", sm: 400, md: 700 },
              objectFit: "cover",
              borderTopRightRadius: { xs: "50px", md: "150px" },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
            {data.map((item, i) => (
              <ButtonBase
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
        backgroundSize: "cover",
        backgroundPosition: "center",
        p: { xs: 4, md: 8 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          borderTopLeftRadius: { xs: "20%", md: "35%" },
          width: { xs: "100%", md: "550px" },
          backgroundColor: "rgba(10, 10, 39, 0.25)",
          backdropFilter: "blur(4px)",
          color: "wheat",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: { xs: "5%", md: "5%" },
        }}
      >
        <Typography variant="h6" color="gray">
          {t("Policy")}
        </Typography>
        <Typography variant="body1" mb={2}>
          {t("ensure")}
        </Typography>
        <Typography variant="body1" mb={2}>
          {t("take")}
        </Typography>
        <Typography variant="body1" mb={2}>
          {t("Benefit")}
        </Typography>
        <Typography variant="body1">{t("reflect")}</Typography>

        <Box sx={{ background: "white", width: "150px", height: "0.5px", mt: 4 }} />
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
          
          {t("about")}
      
            <ArrowForwardIcon
              className="arrow"
              sx={{ transition: "transform 0.3s ease" }}
            />
          </Typography>
        </Link>
      </Box>
    </Box>

    <Footer />
  </Box>
);


}
