import { Box, Typography } from '@mui/material';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import '../App.css';
import 'react-photo-view/dist/react-photo-view.css';

const images = [
  'https://www.mycity.com.tr/wp-content/uploads/2025/04/Banner-40.webp',
  'https://www.mycity.com.tr/wp-content/uploads/2025/04/Banner-37.jpg',
  'https://www.mycity.com.tr/wp-content/uploads/2025/04/Banner-36.webp',
  'https://www.mycity.com.tr/wp-content/uploads/2025/04/Banner-35.webp',
  'https://www.mycity.com.tr/wp-content/uploads/2025/04/Banner-34.webp',
  'https://www.mycity.com.tr/wp-content/uploads/2025/04/Banner-33.webp'
];
const imags = [
'https://www.mycity.com.tr/wp-content/uploads/2025/04/Banner-32.webp',
'https://www.mycity.com.tr/wp-content/uploads/2025/04/Banner-31.webp',
'https://www.mycity.com.tr/wp-content/uploads/2025/04/Banner-29.webp',
];

function Projet() {
  return (
    <Box  sx={{width: "100%", 
    paddingTop: "200px",
    position: "relative",
    height: "100%",
    bgcolor: 'rgba(0, 0, 0, 0.95)',
    color: "wheat",
    flexGrow: 1,
       }}>
       
        <Typography style={{marginLeft:"10%"}} variant='h5'>MYCITY</Typography>
        <Typography style={{marginLeft:"10%"}} variant='h2'>Ürün Grupları</Typography>
       <PhotoProvider maskOpacity={0.9}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '10px',
        padding: '10px' 
      }}>
        {images.map((src, i) => (
          <PhotoView key={i} src={src}>
           <Box
  component="img"
  src={src}
  alt=""
  sx={{
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: '8px',
    opacity: 0.9, // شفافية الصورة
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)', // تكبير بسيط
      opacity: 0.5, // ترجع واضحة عند الهوفر
    },
  }}
/>

            
          </PhotoView>
        ))}
      </div>

       <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '10px',
        padding: '10px'
      }}>
        {imags.map((src, i) => (
          <PhotoView key={i} src={src}>
         <Box
  component="img"
  src={src}
  alt=""
  sx={{
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: '8px',
    opacity: 0.9, // شفافية الصورة
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)', // تكبير بسيط
      opacity: 0.5, // ترجع واضحة عند الهوفر
    },
  }}
/>

          </PhotoView>
        ))}
      </div>

        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '10px',
        padding: '10px'
      }}>
        {images.map((src, i) => (
          <PhotoView key={i} src={src}>
          <Box
  component="img"
  src={src}
  alt=""
  sx={{
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: '8px',
    opacity: 0.9, // شفافية الصورة
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)', // تكبير بسيط
      opacity: 0.5, // ترجع واضحة عند الهوفر
    },
  }}
/>

          </PhotoView>
        ))}
      </div>

       <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '10px',
        padding: '10px'
      }}>
        {imags.map((src, i) => (
          <PhotoView key={i} src={src}>
          <Box
  component="img"
  src={src}
  alt=""
  sx={{
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: '8px',
    opacity: 0.9, // شفافية الصورة
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)', // تكبير بسيط
      opacity: 0.5, // ترجع واضحة عند الهوفر
    },
  }}
/>

          </PhotoView>
        ))}
      </div>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '10px',
        padding: '10px'
      }}>
        {images.map((src, i) => (
          <PhotoView key={i} src={src}>
           <Box
  component="img"
  src={src}
  alt=""
  sx={{
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: '8px',
    opacity: 0.9, // شفافية الصورة
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)', // تكبير بسيط
      opacity: 0.5, // ترجع واضحة عند الهوفر
    },
  }}
/>

          </PhotoView>
        ))}
      </div>

       <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '10px',
        padding: '10px'
      }}>
        {imags.map((src, i) => (
          <PhotoView key={i} src={src}>
           <Box
  component="img"
  src={src}
  alt=""
  sx={{
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: '8px',
    opacity: 0.9, // شفافية الصورة
    transition: 'transform 0.3s ease, opacity 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)', // تكبير بسيط
      opacity: 0.5, // ترجع واضحة عند الهوفر
    },
  }}
/>

          </PhotoView>
        ))}
      </div>
    </PhotoProvider>  
    </Box>
   
  );
}

export default Projet;