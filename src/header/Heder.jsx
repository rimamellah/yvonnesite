// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import Drawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import CloseIcon from '@mui/icons-material/Close';
// import { Link, } from 'react-router-dom';
// import { useTranslation } from "react-i18next";
// import {  Button, Box,Grid} from '@mui/material';


// export default function Header({ darkMode }) {
//   const { t ,i18n} = useTranslation();
// const pages = [
//   { name: t("pages.home"), link: "/" },
//   { name: t("pages.about"), link: "/Skills" },
//   { name: t("pages.projects"), link: "/project" },
//   { name: t("pages.contact"), link: "/contact" },
// ];
//     const changeLang = (lng) => {
//       i18n.changeLanguage(lng);
//     };
//   const [openDrawer, setOpenDrawer] = React.useState(false);
//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }
//     setOpenDrawer(open);
//   };

//   return (
//     <>
// <AppBar
//   position="fixed"
//   sx={{
//     backgroundColor: "rgba(1, 7, 39, 0.15)", // شفاف
//     backdropFilter: "blur(4px)",
//         zIndex: 1000,
//     boxShadow: "none",
//   }}
// >
//   <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//     {/* شعار الموقع */}
 
//       <img    src="yvonne.png" width={"100px"}
//         alt=""
//       />

//     {/* زر القائمة للهواتف */}
//     <IconButton
//       onClick={toggleDrawer(true)}
//       color="inherit"
//       sx={{
//         display: { xs: "block", md: "none",sm:"block" },
//         color: "white", 
//       }}
//     >
//       <MenuIcon fontSize="large" />
//     </IconButton>

//     {/* القائمة للكمبيوتر */}
//     <Toolbar sx={{ display: { xs: "none", md: "flex" } }}>
//       {pages.map((page) => (
         
//         <Typography
//           key={page.name}
//           component={Link}
//         to={page.link}
//           sx={{
//             color: "white",
//             marginX:"20px",
//             transition: ".5s",
//             textDecoration: "none",
//             "&:hover": {
//               color: "wheat",
//             },
//           }}
//         >
//           {page.name}
//         </Typography>
//       ))}
//     </Toolbar>
// <Box display="flex" gap={2}> 
//          <Button
//         variant={i18n.language === "tr" ? "contained" : "outlined"}
//         onClick={() => changeLang("tr")}color='inherit'
//         style={{}}
//       >
//         TR
//       </Button>

//       <Button
//         variant={i18n.language === "en" ? "contained" : "outlined"}
//         onClick={() => changeLang("en")} color='inherit'
//       >
//         EN
//       </Button>
//         </Box>
//     {/* أيقونة واتساب بلون أبيض */}
// <IconButton
//       component="a"
//       href="https://wa.me/905335757141" // استبدل بالرقم تبعك
//       target="_blank"
//       rel="noopener noreferrer"
//       sx={{ color: "white" }}
//     >
//       <WhatsAppIcon fontSize="medium" />
//     </IconButton> 
//      </Toolbar>
// </AppBar>
//       {/* Drawer الجانبي */}
//       <Drawer
//   anchor="left"
//   open={openDrawer}
//   onClose={toggleDrawer(false)}
//   sx={{
//     '& .MuiDrawer-paper': {
//       width: '50%',
//       backgroundColor: darkMode ? "#333" : "#fff",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center", // يجعل المحتوى في منتصف العمود
//       alignItems: "center",     // يجعل العناصر في المنتصف أفقيًا
//       position: "relative",     // للسماح بوضع زر الإغلاق بشكل مطلق
//     },
//   }}
// >
//   {/* زر إغلاق */}
//   <IconButton
//     onClick={toggleDrawer(false)}
//     sx={{
//       position: "absolute",
//       top: 8,
//       right: 8,
//       color: darkMode ? "#fff" : "#000",
//     }}
//   >
//     <CloseIcon /> {/* أو استخدم CloseIcon لو حبيت */}
//   </IconButton>

//   {/* القائمة في منتصف الدرج */}

//   <List sx={{ width: "100%" }}>
//     {pages.map((page) => (
//       <ListItem key={page.name} disablePadding sx={{ justifyContent: "center" }}>
//         <ListItemButton component={Link}  to={page.link} sx={{ textAlign: "center" }}>
//           <ListItemText primary={page.name} />
//         </ListItemButton>
//       </ListItem>
//     ))}
//   </List>
// </Drawer>

//     </>
//   );
// }
import * as React from "react";
import { useEffect } from "react";
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
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Button, Box } from '@mui/material';

export default function Header({ darkMode }) {
  const { t, i18n } = useTranslation();
  const location = useLocation(); // لمراقبة تغييرات الرابط

  const pages = [
    { name: t("pages.home"), link: "/" },
    { name: t("pages.about"), link: "/Skills" },
    { name: t("pages.projects"), link: "/project" },
    { name: t("pages.contact"), link: "/contact" },
  ];

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

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

  // يغلق الـ Drawer عند تغيير المسار
  useEffect(() => {
    if (openDrawer) {
      setOpenDrawer(false);
    }
  }, [location]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(1, 7, 39, 0.15)",
          backdropFilter: "blur(4px)",
          zIndex: 1000,
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <img src="ri.png" width={"140px"} alt="" />

          {/* زر القائمة للهواتف */}
          <IconButton
            onClick={toggleDrawer(true)}
            color="inherit"
            sx={{ display: { xs: "block", md: "none", sm: "block" }, color: "white" }}
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
                  marginX: "20px",
                  transition: ".5s",
                  textDecoration: "none",
                  "&:hover": { color: "wheat" },
                }}
              >
                {page.name}
              </Typography>
            ))}
          </Toolbar>

          <Box display="flex" gap={2}>
            <Button
              variant={i18n.language === "tr" ? "contained" : "outlined"}
              onClick={() => changeLang("tr")}
              color='inherit'
            >
              TR
            </Button>
            <Button
              variant={i18n.language === "en" ? "contained" : "outlined"}
              onClick={() => changeLang("en")}
              color='inherit'
            >
              EN
            </Button>
          </Box>

          <IconButton
            component="a"
            href="https://wa.me/905335757141"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <WhatsAppIcon fontSize="medium" />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer الجانبي */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '50%',
            backgroundColor: darkMode ? "#333" : "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
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
          <CloseIcon />
        </IconButton>

        {/* القائمة */}
        <List sx={{ width: "100%" }}>
          {pages.map((page) => (
            <ListItem key={page.name} disablePadding sx={{ justifyContent: "center" }}>
              <ListItemButton
                component={Link}
                to={page.link}
                sx={{ textAlign: "center" }}
                onClick={toggleDrawer(false)} // يسكر عند الضغط على أي رابط
              >
                <ListItemText primary={page.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
