import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardMedia,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const items = [
  {
    title: 'Slide 1',
    url: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
  },
  {
    title: 'Slide 2',
    url: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
  },
  {
    title: 'Slide 3',
    url: 'https://images.unsplash.com/photo-1532614338840-ab30cf10ed36',
  },
  {
    title: 'Slide 4',
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
  },
  {
    title: 'Slide 5',
    url: 'https://images.unsplash.com/photo-1516972810927-80185027ca84',
  },
  {
    title: 'Slide 6',
    url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
  },
];

export default function HighlightCenterCarousel() {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const visible = isSmall ? 1 : 3;
  const centerIndex = Math.floor(visible / 2);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % items.length);
  };

  const getVisibleItems = () => {
    let result = [];
    for (let i = 0; i < visible; i++) {
      result.push(items[(startIndex + i) % items.length]);
    }
    return result;
  };

  const visibleItems = getVisibleItems();
  const highlightedIndex = (startIndex + centerIndex) % items.length;

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      {/* Carousel */}
      <Box sx={{ display: 'flex', width: '100%' }}>
        {visibleItems.map((item, i) => {
          const isCenter = i === centerIndex;
          return (
            <Card
              key={i}
              sx={{
                flex: isSmall ? '100%' : '0 0 33.3333%',
                transition: 'all 0.4s ease',
                transform: isCenter ? 'scale(1.05)' : 'scale(1)',
                opacity: isCenter ? 1 : 0.4,
                border: isCenter ? '1px solid #ebebeb' : 'none',
                boxShadow: isCenter ? 6 : 1,
                borderRadius: 0,
                zIndex: isCenter ? 2 : 1,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.url}
                alt={item.title}
                sx={{
                  width: '100%',
                  objectFit: 'cover',
                }}
              />
            </Card>
          );
        })}
      </Box>

      {/* Dots Indicator */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 1,
          gap: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <IconButton onClick={handlePrev}>
            <ChevronLeftIcon />
          </IconButton>

          {items.map((_, idx) => (
            <Box
              key={idx}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                bgcolor:
                  idx === startIndex % items.length
                    ? 'primary.main'
                    : 'grey.400',
                transition: 'all 0.3s ease',
              }}
            />
          ))}

          <IconButton onClick={handleNext}>
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
