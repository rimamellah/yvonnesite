
import  {IconButton,Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "rgba(0, 0, 0, 0.95)",
          color: "wheat",
          textAlign: "center",
          flexGrow: 1,
          py: 5,
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src="yvonne.png"
          alt="logo"
          sx={{ width: { xs: "120px", md: "200px" }, mb: 4 }}
        />

        {/* Grid Layout */}
        <Grid container spacing={4} justifyContent="center">
          {/* Ofis */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: "gray" }}>
              {t("ofis")}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              Batıkent Mah. 09132 Sok. No:5/E Şehitkamil/Gaziantep
            </Typography>
          </Grid>

          {/* Fabrika */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: "gray" }}>
              {t("fabrika")}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              Tekstilkent Mah. 47009 sok.No:77 Şahinbey/Gaziantep
            </Typography>
          </Grid>

          {/* Mağaza */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: "gray" }}>
              {t("magaza")}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              Mehmet Nesih Özmen Mah. Selvi Sok. No:13 Merter/Güngören/İstanbul
            </Typography>
          </Grid>
          
        </Grid>
  {/* Divider */}
            <Box
              sx={{
                background: "white",
                width: "150px",
                height: "1px",
                mx: "auto",
                my: 3,
              }}
            />
            {/* Contact Link */}
            <Link
              to="/Contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  cursor: "pointer",
                  gap: "4px",
                  "&:hover .arrow": {
                    transform: "translateY(-3px)",
                    color: "white",
                  },
                  "&:hover": {
                    color: "white",
                  },
                }}
              >
                {t("ile")}
                <ArrowForwardIcon
                  className="arrow"
                  sx={{ transition: "transform 0.3s ease" }}
                />
              </Typography>
            </Link>
            
               <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
      {/* Instagram */}
      <IconButton
        component="a"
        href="https://www.instagram.com/yvonnefaetoptan/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "white", "&:hover": { color: "wheat" } }}
      >
        <InstagramIcon fontSize="large" />
      </IconButton>

      {/* Facebook */}
      <IconButton
        component="a"
        href="https://www.facebook.com/share/16uRs2wvwK/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "white", "&:hover": { color: "wheat" } }}
      >
        <FacebookIcon fontSize="large" />
      </IconButton>

      {/* Telegram */}
      <IconButton
        component="a"
        href="https://t.me/yvonnefae"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "white", "&:hover": { color: "wheat" } }}
      >
        <TelegramIcon fontSize="large" />
      </IconButton>

      {/* WhatsApp */}
      <IconButton
        component="a"
        href="https://wa.me/905335757141"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: "white", "&:hover": { color: "wheat" } }}
      >
        <WhatsAppIcon fontSize="large" />
      </IconButton>
    </Box>
           
        {/* Footer Line */}
        <hr
          style={{
            border: "none",
            borderTop: "1px solid gray",
            marginTop: "30px",
          }}
        />
        <Typography variant="h6" align="center" color="gray" mt={2}>
          &copy; 2025 Yvonne Fae Markası Tüm Hakları AEP Mühendislik Tekstil
          Enerji İnşaat San.Tic.Ltd.Şti.'ne aittir.
        </Typography>
       
      </Box>
    </>
  );
}
