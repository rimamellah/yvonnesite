import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Grid, ButtonBase } from '@mui/material';
import { Link } from "react-router-dom";

export default function Home() {
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
    "https://www.mycity.com.tr/wp-content/uploads/2025/04/Banner-21.webp",
    "https://www.mycity.com.tr/wp-content/uploads/2025/04/Banner-24.webp",
    "https://www.mycity.com.tr/wp-content/uploads/2025/04/Banner-32.webp",
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
                <Box sx={{m:"20% 0"}}>
                    <Typography variant="h1" sx={{marginTop:"20px",whiteSpace: "pre-line",}} >ALAA&{"\n"}HAMAD</Typography>
   <Typography variant="h6">modanin ruhunu sekilleniyoruz</Typography>  
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
            'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("/bina1-scaled.webp")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography color="gray" variant="h6">MYCITY</Typography>
        <Typography variant="h5" color="#fbe8d3" sx={{ whiteSpace: "pre-line", textAlign: "center" }}>
          Bugün, MyCity adıyla faaliyetlerimizi sürdürüyoruz ve{"\n"}
          tekstil üretiminde kaliteyi ve mükemmeliyeti ön planda{"\n"}
          tutarak çalışıyoruz. 20.000 m²'lik üretim alanımızda,{"\n"}
          450’den fazla çalışanımız, 70 örme ve 240’den fazla{"\n"}
          konfeksiyon makinemizle üretim yapıyoruz.
        </Typography>
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

      {/* Section 2: Image + Stats */}
      <Box
        sx={{
          padding: "5%",
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("/Banner-22.webp")',
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
              src="/Banner-22.webp"
              alt="MyCity Building"
              sx={{
                width: { md: "500px", sm: "100%", xs: "100%" },
                height: { md: "700px", sm: "auto", xs: "auto" },
                objectFit: "cover",
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
            'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("/bina1-scaled.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
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
            zIndex: 1000,
            padding: "5%",
          }}
        >
          <Typography variant="h6" color="gray" marginLeft="10%">
            MYCITY
          </Typography>
          <Typography variant="h5">
            Müşteri portföyümüz, yerel ve uluslararası pazarda büyümeye devam eden güçlü bir yapıya sahiptir. 45’i yerel, 10’u büyük zincir mağaza olmak üzere toplamda 55 farklı müşteriye hizmet veriyoruz. Ürünlerimizin yaklaşık %30’u, ihracat yapan müşterilerimiz aracılığıyla global pazara ulaşıyor.
          </Typography>
          <div style={{ background: "white", width: "150px", height: "0.5px", marginTop: "90px" }}></div>
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
    </Box>
  );
}
