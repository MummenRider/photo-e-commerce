import React from 'react';
import StreetPhoto from 'Components/StreetPhoto/street-photo';
import LoadImage from 'Components/ImageBlock/image-block';
import { useMediaQuery } from 'react-responsive';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import img1 from 'Assets/Images/stp_1.jpg';
import { Box } from 'Components/StreetPhoto/street-photo.styles';
export function StreetPhotoContainer() {
  const isBigDevice = useMediaQuery({ query: '(min-width: 1024px)' });
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 400, 800], [0, 0, 200]);
  const y2 = useTransform(scrollY, [0, 400, 800], [0, 0, -100]);
  return (
    <StreetPhoto isBigDevice={isBigDevice}>
      <Box style={{ y: y1, x: -50 }} />
      <Box style={{ y: y2, backgroundColor: 'salmon' }} />
      {/* <StreetPhoto.ColumnOne>
        <StreetPhoto.ImageBlockOne
          src={img1}
          options={{ threshold: 0.5, rootMargin: '500px 0px 0px 0px' }}
        />
      </StreetPhoto.ColumnOne>

      <StreetPhoto.ColumnTwo>
        <StreetPhoto.TextContainer>
          <StreetPhoto.SubTitle>COMMUNITY, LOVE, RESPECT</StreetPhoto.SubTitle>
          <StreetPhoto.Title>
            Lorem Ipsum Dolor {<br />} Amet, Consetetur
          </StreetPhoto.Title>
          <StreetPhoto.SubTitle>Food Charity - Sikh</StreetPhoto.SubTitle>
        </StreetPhoto.TextContainer>
      </StreetPhoto.ColumnTwo>
      <StreetPhoto.ColumnThree></StreetPhoto.ColumnThree> */}

      {/* 
      <StreetPhoto.ImageBlockOne>
        <LoadImage
          src={require('Assets/Images/stp_1.jpg').default}
          fallback={require('Assets/Images/stp_1.webp').default}
          alt={'picture 1'}
        />
      </StreetPhoto.ImageBlockOne>

      <StreetPhoto.ImageBlockTwo>
        <LoadImage
          src={require('Assets/Images/stp_2.jpg').default}
          fallback={require('Assets/Images/stp_2.webp').default}
          alt={'picture 1'}
        />
      </StreetPhoto.ImageBlockTwo>

      <StreetPhoto.ImageBlockThree>
        <LoadImage
          src={require('Assets/Images/stp_3.jpg').default}
          fallback={require('Assets/Images/stp_3.webp').default}
          alt={'picture 1'}
        />
      </StreetPhoto.ImageBlockThree>

      <StreetPhoto.ImageBlockFour>
        <LoadImage
          src={require('Assets/Images/stp_4.jpg').default}
          fallback={require('Assets/Images/stp_4.webp').default}
          alt={'picture 1'}
        />
      </StreetPhoto.ImageBlockFour> */}
    </StreetPhoto>
  );
}
