import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const pages = [
        { name: "ANA SAYFA", link: "/" },
  { name: "KURUMSAL", link: "/Skills" },
  { name: "ÜRÜN GRUPLARI", link: "/project" },
  { name: "İLETİŞİM", link: "/contact" },
      ];

export default function Header({ darkMode }) {
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <>
   
<AppBar
  position="absolute"
  sx={{
    backgroundColor: "rgba(1, 7, 39, 0.15)", // شفاف
    backdropFilter: "blur(4px)",
        zIndex: 1000,
    boxShadow: "none",
  }}
>
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    {/* شعار الموقع */}
    <Typography variant="h6" sx={{ textDecoration: "none" }}>
      <img
        src="https://www.mycity.com.tr/wp-content/uploads/2025/04/mycityWeb21.webp#73"
        width={"150px"}
        alt=""
        style={{ filter: "brightness(0) invert(1)" }} // تحويل الشعار ليكون أبيض
      />
    </Typography>

    {/* زر القائمة للهواتف */}
    <IconButton
      onClick={toggleDrawer(true)}
      color="inherit"
      sx={{
        display: { xs: "block", md: "none",sm:"block" },
        color: "white", 
      }}
    >
      <MenuIcon fontSize="large" />
    </IconButton>

    {/* القائمة للكمبيوتر */}
    <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Typography
          key={page.name}
          component={Link}
        to={page.link}
          sx={{
            color: "white",
            marginX: 2,
            transition: ".5s",
            textDecoration: "none",
            "&:hover": {
              color: "wheat",
            },
          }}
        >
          {page.name}
        </Typography>
      ))}
    </Toolbar>

    {/* أيقونة واتساب بلون أبيض */}
    <WhatsAppIcon fontSize="medium" sx={{ color: "white" }} />
  </Toolbar>
</AppBar>
      {/* Drawer الجانبي */}
      <Drawer
  anchor="left"
  open={openDrawer}
  onClose={toggleDrawer(false)}
  sx={{
    '& .MuiDrawer-paper': {
      width: '250px',
      backgroundColor: darkMode ? "#333" : "#fff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // يجعل المحتوى في منتصف العمود
      alignItems: "center",     // يجعل العناصر في المنتصف أفقيًا
      position: "relative",     // للسماح بوضع زر الإغلاق بشكل مطلق
    },
  }}
>
  {/* زر إغلاق */}
  <IconButton
    onClick={toggleDrawer(false)}
    sx={{
      position: "absolute",
      top: 8,
      right: 8,
      color: darkMode ? "#fff" : "#000",
    }}
  >
    <CloseIcon /> {/* أو استخدم CloseIcon لو حبيت */}
  </IconButton>

  {/* القائمة في منتصف الدرج */}
  <List sx={{ width: "100%" }}>
    {pages.map((page) => (
      <ListItem key={page.name} disablePadding sx={{ justifyContent: "center" }}>
        <ListItemButton component={Link}  to={page.link} sx={{ textAlign: "center" }}>
          <ListItemText primary={page.name} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
</Drawer>

    </>
  );
}
