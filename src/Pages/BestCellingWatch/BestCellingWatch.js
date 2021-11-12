import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/system';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const itemData = [
    {
      img: 'https://i.pinimg.com/originals/8f/ad/15/8fad1571a3650c60066beff419b4214e.jpg',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyKy3ObCEP2QW45EOcAnz237276qLuj3BFQ&usqp=CAU',
      title: 'Burger',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUnfK4feT8cVd9JMTq-XnTNLjJfY-b7XN3g&usqp=CAU',
      title: 'Camera',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUqIcnIS-RaTNbaWzLPyrjMVFCasbIM7sVMg&usqp=CAU',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDDDe4YU-i1s5rfknadi3DLnOOOvf4xXfIw&usqp=CAU',
      title: 'Basketball',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34P5Oz0pf_VGdmCKioPdGn_Ob2Tykk62aww&usqp=CAU',
      title: 'Fern',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDNRfbQXyah1KOV_0xw87nxq8J9VRvNSKrnA&usqp=CAU',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://image.shutterstock.com/image-photo/krasnodar-russia-january-18-2019-260nw-1387862768.jpg',
      title: 'Tomato basil',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3mhQEKRZMwO6VsB6ZFpC-VBsryhKP59o2g&usqp=CAU',
      title: 'Sea star',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxd0PCLbXfY1H6t0rlbvTopdg3ch_9zO6pA&usqp=CAU',
      title: 'Bike',
      cols: 2,
    },
  ];

const BestCellingWatch = () => {
    return (
        <>
        <h2>Most Expensive Watches In The World</h2>
        <Box id="bestSelling">
            <ImageList
            sx={{ width: 'auto', height: 500, m:3, borberRadious: '5px'}}
            variant="quilted"
            cols={4}
            rowHeight={121}
            >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
             </ImageList>
        </Box>
        </>
    );
};

export default BestCellingWatch;