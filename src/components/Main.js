import placeholderImg from '../images/placeholderImg.webp';
import React, { useState} from 'react';
export default function Main({ title, img, year, sjanger, regissør, skuespillere, priser }) {
    const [placeholderImage, setplaceholderImage] = useState(img);
    const placeholderImageError = () => {
      setplaceholderImage(placeholderImg);
    };
    return (
      <article id="main-content">
        <img src={placeholderImage} onError={placeholderImageError} />
        <p>Publisert i året: <b>{year}</b></p>
        <h2>{title}</h2>
        <p>Skuspillere: {skuespillere}</p>
        <p>Regissør: {regissør}</p>
        <p>Sjanger: {sjanger}</p>
        <p>Priser: {priser}</p>
      </article>
    );
  }
