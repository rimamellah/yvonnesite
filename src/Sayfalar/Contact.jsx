
import  {IconButton,Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          bgcolor: "rgba(0, 0, 0, 0.90)",
          color: "wheat",
          pt: "50px",
          textAlign: "center",
        }}
      >
        {/* العناوين */}
        <Typography variant="h4" sx={{ my: 5 }}>
          {t("ile")}
        </Typography>

        {/* عناوين الأماكن */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: "gray" }}>
              {t("ofis")}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              Batıkent Mah. 09132 Sok. No:5/E Şehitkamil/Gaziantep
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: "gray" }}>
              {t("fabrika")}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              Tekstilkent Mah. 47009 sok.No:77 Şahinbey/Gaziantep
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ color: "gray" }}>
              {t("magaza")}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              Mehmet Nesih Özmen Mah. Selvi Sok. No:13 Merter/Güngören/İstanbul
            </Typography>
          </Grid>
        </Grid>
             <Box sx={{ display: "flex", justifyContent: "center", gap: 2 ,mt:2}}>
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
        {/* أرقام التواصل + مواعيد العمل */}
        <Grid container spacing={4} mt={7} justifyContent="center">
          <Grid item xs={12} md={6} textAlign="left">
            <Typography variant="h6" sx={{ color: "gray" }}>
              {t("ile")}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              {t("arap")} +90 534 590 9680
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              {t("tur")} +90 549 190 9582
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              {t("ing")} +90 549 190 9582
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              {t("rus")} +90 549 190 9582
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              {t("fabof")} +90 533 575 7141
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} textAlign="left">
            <Typography variant="h6" sx={{ color: "gray" }}>
              {t("working")}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              {t("Monday")}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              {t("Tuesday")}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              {t("Saturday")}
            </Typography>
            <Typography variant="h5" sx={{ mt: 1 }}>
              {t("Closed")}
            </Typography>
              
          </Grid>
        </Grid>

        {/* نص إضافي */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="30vh"
          textAlign="center"
        >
          <Box sx={{ width: { xs: "90%", sm: "70%", md: "50%" } }}>
            <Typography variant="h6" sx={{ color: "gray", mt: 2 }}>
              {t("for")}
            </Typography>
            <Typography variant="h4" sx={{ mt: 3 }}>
              {t("With")}
            </Typography>
            <Typography variant="h6">{t("Shipping")}</Typography>
            <Typography variant="h6">{t("As")}</Typography>
          </Box>
        </Box>

        {/* صورة الفوتر */}
        <img src="footer.png" width="170px" alt="footer" />

        <hr
          style={{ border: "none", borderTop: "1px solid gray", marginTop: "20px" }}
        />

        <Typography variant="h6" align="center" color="gray" mt={2}>
          &copy; 2025 Yvonne Fae Markası Tüm Hakları AEP Mühendislik Tekstil
          Enerji İnşaat San.Tic.Ltd.Şti.'ne aittir.
        </Typography>
      </Box>
    </>
  );
}
