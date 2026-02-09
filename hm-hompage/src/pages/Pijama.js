import React, { useState } from 'react';
import { FaHeart , FaShoppingCart } from 'react-icons/fa';


import P1 from '../images/P1.jpg';
import P1B from '../images/P1B.jpg';
import P2 from '../images/P2.jpg';
import P2B from '../images/P2B.jpg';
import P3 from '../images/P3.jpg';
import P3B from '../images/P3B.jpg';
import P4 from '../images/P4.jpg';
import P4B from '../images/P4B.jpg';
import P5 from '../images/P5.jpg';
import P5B from '../images/P5B.jpg';
import P6 from '../images/P6.jpg';
import P6B from '../images/P6B.jpg';
import P7 from '../images/P7.jpg';
import P7B from '../images/P7B.jpg';
import P8 from '../images/P8.jpg';
import P8B from '../images/P8B.jpg';
import P9 from '../images/P9.jpg';
import P9B from '../images/P9B.jpg';
import P10 from '../images/P10.jpg';
import P10B from '../images/P10B.jpg';
import P11 from '../images/P11.jpg';
import P11B from '../images/P11B.jpg';
import P12 from '../images/P12.jpg';
import P12B from '../images/P12B.jpg';
import P13 from '../images/P13.jpeg';
import P13B from '../images/P13B.jpeg';
import P14 from '../images/P14.jpeg';
import P14B from '../images/P14B.jpeg';
import P15 from '../images/P15.jpeg';
import P15B from '../images/P15B.jpeg';
import P16 from '../images/P16.jpeg';
import P16B from '../images/P16B.jpeg';






import './Giyim.css';

const kadınData = [
  {
    title: 'SATEN PİJAMA SETİ',
    images: [P1, P1B],
    price: '1999₺',
    color: 'Açık Yeşil'
  },
  {
    title: 'ASKILI SATEN PİJAMA SETİ',
    images: [P2, P2B],
    price: '2280₺',
    color: 'Gri'
  },
  {
    title: 'KARELİ PİJAMA SETİ',
    images: [P3, P3B],
    price: '2299₺',
    color: 'Mavi'
  },
  {
    title: 'ÇİZGİLİ PİJAMA SETİ',
    images: [P4, P4B],
    price: '2190₺',
    color: 'Pembe'
  },
  {
    title: 'İPEK PİJAMA SETİ',
    images: [P5, P5B],
    price: '4590₺',
    color: 'Bordo'
  },
  {
    title: 'KETEN PİJAMA SETİ',
    images: [P6, P6B],
    price: '2099₺',
    color: 'Kahverengi'
  },
  {
    title: 'İŞLEMELİ PİJAMA SETİ',
    images: [P7, P7B],
    price: '2299₺',
    color: 'Beyaz'
  },
  {
    title: 'ÇİZGİLİ PİJAMA SETİ',
    images: [P8, P8B],
    price: '2199₺',
    color: 'Mavi'
  },

];

const erkekData = [
 {
    title: 'TEMEL PİJAMA SETİ',
    images: [P9, P9B],
    price: '2199₺',
    color: 'Gri'
  },
  {
    title: 'KONTRAST RENKLİ PİJAMA SETİ',
    images: [P10, P10B],
    price: '2280₺',
    color: 'Mavi'
  },
  {
    title: 'KONTRAST PİJAMA SETİ',
    images: [P11, P11B],
    price: '2099₺',
    color: 'Haki'
  },
  {
    title: 'DÜZ PİJAMA SETİ',
    images: [P12, P12B],
    price: '2190₺',
    color: 'Kahverengi'
  },
  {
    title: 'PAMUKLU PİJAMA SETİ',
    images: [P13B, P13],
    price: '1890₺',
    color: 'Mavi'
  },
  {
    title: 'PAMUKLU PİJAMA SETİ',
    images: [P14, P14B],
    price: '1899₺',
    color: 'Gri'
  },
  {
    title: 'BASKILI PİJAMA SETİ',
    images: [P15, P15B],
    price: '1999₺',
    color: 'Bej'
  },
  {
    title: 'PAMUKLU PİJAMA SETİ',
    images: [P16, P16B],
    price: '1499₺',
    color: 'Mavi&Lacivert'
  },
];

const Pijama = () => {
  const [kadınIndexes, setKadınIndexes] = useState(Array(kadınData.length).fill(0));
  const [erkekIndexes, setErkekIndexes] = useState(Array(erkekData.length).fill(0));

  const handleNext = (index, isKadın) => {
    if (isKadın) {
      setKadınIndexes((prev) => {
        const newIndexes = [...prev];
        const total = kadınData[index].images.length;
        newIndexes[index] = (newIndexes[index] + 1) % total;
        return newIndexes;
      });
    } else {
      setErkekIndexes((prev) => {
        const newIndexes = [...prev];
        const total = erkekData[index].images.length;
        newIndexes[index] = (newIndexes[index] + 1) % total;
        return newIndexes;
      });
    }
  };

  const handlePrev = (index, isKadın) => {
    if (isKadın) {
      setKadınIndexes((prev) => {
        const newIndexes = [...prev];
        const total = kadınData[index].images.length;
        newIndexes[index] = (newIndexes[index] - 1 + total) % total;
        return newIndexes;
      });
    } else {
      setErkekIndexes((prev) => {
        const newIndexes = [...prev];
        const total = erkekData[index].images.length;
        newIndexes[index] = (newIndexes[index] - 1 + total) % total;
        return newIndexes;
      });
    }
  };

  const renderItems = (items, indexes, isKadın) => (
    <>
      {items.map((item, index) => (
        <div className="disgiyim-item" key={`${isKadın ? 'kadın' : 'erkek'}-${index}`}>
          <div className="image-wrapper">
            <img
              src={item.images[indexes[index]]}
              alt={item.title}
              className="disgiyim-image"
              onClick={() => handleNext(index, isKadın)}
            />
            <button className="nav-button prev" onClick={(e) => { e.stopPropagation(); handlePrev(index, isKadın); }}>◀</button>
            <button className="nav-button next" onClick={(e) => { e.stopPropagation(); handleNext(index, isKadın); }}>▶</button>
            <button className="add-button"><FaShoppingCart /></button>
            <div className="heart-icon"><FaHeart /></div>
          </div>
          <div className="disgiyim-label">
            <p>{item.title}</p>
            <p className="price">{item.price}</p>
            <div className="color"><label>Renk:</label><span>{item.color}</span></div>
            <div className="size">
              <label>Beden:</label>
              <select>
                <option>S</option><option>M</option><option>L</option><option>XL</option>
              </select>
            </div>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <main className="disgiyim-grid">
      <h2 className="disgiyim-heading">KADINLAR</h2>
      {renderItems(kadınData, kadınIndexes, true)}

      <h2 className="disgiyim-heading">ERKEKLER</h2>
      {renderItems(erkekData, erkekIndexes, false)}
    </main>
  );
};

export default Pijama;
