
import { Box, Typography } from '@mui/material';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const allImages = ['foto1.jpg','foto2.jpg','foto3.jpg','foto4.jpg', 'foto5.jpg', 'foto6.jpg','foto7.jpg','foto8.jpg','foto9.jpg', 'foto10.jpg',  'foto11.jpg','foto12.jpg','foto13.jpg','foto14.jpg', 'foto15.jpg',  'foto16.jpg','foto17.jpg','foto18.jpg','foto19.jpg', 'foto20.jpg',  'foto21.jpg','foto22.jpg','foto23.jpg','foto24.jpg', 'foto25.jpg',

];

// النمط المطلوب: 5 صور – 3 صور – 5 صور – 5 صور – 3 صور – باقي الصور
const pattern = [5, 3, 5, 5, 3, 4]; 

function Projet() {
  let startIndex = 0;

  return (
    <Box
      sx={{
        width: "100%",
        paddingTop: "200px",
        position: "relative",
        bgcolor: 'rgba(0, 0, 0, 0.95)',
        color: "wheat",
      }}
    >
       
             <Box m={"0px 5%"}>
                               <img
        src="yvonne.png"
        width={"200px"}

        alt=""
   
      /> 
             
        
               
              </Box>
      <Typography sx={{ marginLeft: "10%" }} variant='h2'>Ürün Grupları</Typography>

      <PhotoProvider maskOpacity={0.9}>
        {pattern.map((count, rowIndex) => {
          const rowImages = allImages.slice(startIndex, startIndex + count);
          startIndex += count;
          return (
            <div
              key={rowIndex}
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${count}, 1fr)`, // عدد الأعمدة حسب النمط
                gap: '10px',
                padding: '10px'
              }}
            >
              {rowImages.map((src, i) => (
                <PhotoView key={i} src={src}>
                  <Box
                    component="img"
                    src={src}
                    alt=""
                    sx={{
                      width: '100%',
                      height: '450px',
                      objectFit:'cover',
                      cursor: 'pointer',
                      borderRadius: '8px',
                      opacity: 0.9,
                      transition: 'transform 0.3s ease, opacity 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        opacity: 0.5,
                      },
                    }}
                  />
                </PhotoView>
              ))}
            </div>
          );
        })}
      </PhotoProvider>
    </Box>
  );
}

export default Projet;
