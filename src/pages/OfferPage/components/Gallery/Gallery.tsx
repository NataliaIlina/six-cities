import React from 'react';
import { SOfferImage, SOffersGallery } from './Gallery.styled';

const Gallery: React.FC<{ images: string[] }> = ({ images }) => (
  <SOffersGallery>
    {images.map((img, index) =>
      index > 5 ? null : (
        <SOfferImage key={img}>
          <img src={img} alt="Preview studio" />
        </SOfferImage>
      )
    )}
  </SOffersGallery>
);

export default Gallery;
