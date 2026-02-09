import React, { useState } from 'react';
import { FaHeart , FaShoppingCart } from 'react-icons/fa';


import mont1 from '../images/mont1.jpg';
import mont2 from '../images/mont2.jpg';
import mont2c from '../images/mont2c.jpg';
import mont3 from '../images/mont3.jpg';
import mont4 from '../images/mont4.jpg';
import mont5 from '../images/mont5.jpg';
import mont6 from '../images/mont6.jpg';
import mont6b from '../images/mont6b.jpg';
import mont6c from '../images/mont6c.jpg';
import mont7 from '../images/mont7.jpg';
import mont7b from '../images/mont7b.jpg';
import mont7c from '../images/mont7c.jpg';
import mont8 from '../images/mont8.jpg';
import mont8b from '../images/mont8b.jpg';
import mont8c from '../images/mont8c.jpg';
import mont5b from '../images/mont5b.jpg';
import mont5c from '../images/mont5c.jpg';
import mont1b from '../images/mont1b.jpg';
import mont1c from '../images/mont1c.jpg';
import mont2b from '../images/mont2b.jpg';
import mont3b from '../images/mont3b.jpg';
import mont3c from '../images/mont3c.jpg';
import mont4b from '../images/mont4b.jpg';
import mont4c from '../images/mont4c.jpg';
import mont9 from '../images/mont9.jpg';
import mont9b from '../images/mont9b.jpg';
import mont9c from '../images/mont9c.jpg';
import mont10 from '../images/mont10.jpg';
import mont10b from '../images/mont10b.jpg';
import mont10c from '../images/mont10c.jpg';
import mont11 from '../images/mont11.jpg';
import mont11b from '../images/mont11b.jpg';
import mont11c from '../images/mont11c.jpg';
import mont12 from '../images/mont12.jpg';
import mont12b from '../images/mont12b.jpg';
import mont12c from '../images/mont12c.jpg';
import mont13 from '../images/mont13.jpg';
import mont13b from '../images/mont13b.jpg';
import mont13c from '../images/mont13c.jpg';
import mont14 from '../images/mont14.jpg';
import mont14b from '../images/mont14b.jpg';
import mont14c from '../images/mont14c.jpg';
import mont15 from '../images/mont15.jpg';
import mont15b from '../images/mont15b.jpg';
import mont15c from '../images/mont15c.jpg';
import mont16 from '../images/mont16.jpg';
import mont16b from '../images/mont16b.jpg';
import mont16c from '../images/mont16c.jpg';
import mont17 from '../images/mont17.jpg';
import mont17b from '../images/mont17b.jpg';
import mont17c from '../images/mont17c.jpg';
import mont18 from '../images/mont18.jpg';
import mont18b from '../images/mont18b.jpg';
import mont18c from '../images/mont18c.jpg';
import mont19 from '../images/mont19.jpg';
import mont19b from '../images/mont19b.jpg';
import mont19c from '../images/mont19c.jpg';
import mont20 from '../images/mont20.jpg';
import mont20b from '../images/mont20b.jpg';
import mont20c from '../images/mont20c.jpg';
import mont21 from '../images/mont21.jpg';
import mont21b from '../images/mont21b.jpg';
import mont21c from '../images/mont21c.jpg';
import mont22 from '../images/mont22.jpg';
import mont22b from '../images/mont22b.jpg';
import mont22c from '../images/mont22c.jpg';
import mont23 from '../images/mont23.jpg';
import mont23b from '../images/mont23b.jpg';
import mont23c from '../images/mont23c.jpg';
import mont24 from '../images/mont24.jpg';
import mont24b from '../images/mont24b.jpg';
import mont24c from '../images/mont24c.jpg';

import './Giyim.css';

const kadınData = [
  {
    title: 'KEMERLİ YARI UZUN TRENÇKOT',
    images: [mont1, mont1b, mont1c],
    price: '2099₺',
    color: 'Lacivert'
  },
  {
    title: 'YÜN KARIŞIMLI KRUVAZE KABAN',
    images: [mont2, mont2b, mont2c],
    price: '6480₺',
    color: 'Bordo'
  },
  {
    title: 'YARI UZUN BOUCLÉ KABAN',
    images: [mont3, mont3b, mont3c],
    price: '1599₺',
    color: 'Bej'
  },
  {
    title: 'ÇİFT TARAFLI ZW KOLEKSİYON CEKET',
    images: [mont4, mont4b, mont4c],
    price: '4700₺',
    color: 'Kahverengi'
  },
  {
    title: 'YÜN KARIŞIMLI OVERSIZE KABAN',
    images: [mont5, mont5b, mont5c],
    price: '9999₺',
    color: 'Pembe'
  },
  {
    title: 'RÜZGARA DAYANIKLI SU GEÇİRMEZ ŞİŞME YELEK',
    images: [mont6, mont6b, mont6c],
    price: '2099₺',
    color: 'Pembe'
  },
  {
    title: 'LIMITED EDITION SUNİ KÜRK TOP',
    images: [mont7, mont7b, mont7c],
    price: '6999₺',
    color: 'Siyah'
  },
  {
    title: 'KISA SUNİ DERİ TRENÇKOT',
    images: [mont8, mont8b, mont8c],
    price: '3099₺',
    color: 'Kahverengi'
  },

  {
    title: 'KISA KEMERLİ TRENÇKOT',
    images: [mont17, mont17b, mont17c],
    price: '2099₺',
    color: 'Kahverengi'
  },
  {
    title: 'SUNİ DERİ CROP BIKER CEKET',
    images: [mont18, mont18b, mont18c],
    price: '3099₺',
    color: 'Bordo'
  },
  {
    title: '%100 SÜET DERİ BOMBER CEKET',
    images: [mont19, mont19b, mont19c],
    price: '8099₺',
    color: 'Kahverengi'
  },
  {
    title: 'YIKANMIŞ GÖRÜNÜMLÜ KAPİTONE CEKET',
    images: [mont20, mont20b, mont20c],
    price: '2099₺',
    color: 'Beyaz'
  },
];

const erkekData = [
  {
    title: 'KARELİ CROP FIT TRENÇKOT – LIMITED EDITION',
    images: [mont9, mont9b, mont9c],
    price: '6899₺',
    color: 'Beyaz'
  },
  {
    title: 'TEKNİK KISA TRENÇKOT',
    images: [mont10, mont10b, mont10c],
    price: '2499₺',
    color: 'Siyah'
  },
  {
    title: 'KONTRAST YAKALI MUMLU GÖRÜNÜMLÜ TRENÇKOT',
    images: [mont11, mont11b, mont11c],
    price: '3499₺',
    color: 'Siyah'
  },
  {
    title: 'RELAXED FIT TRENÇKOT',
    images: [mont12, mont12b, mont12c],
    price: '3599₺',
    color: 'Bej'
  },
  {
    title: 'YÜN KARIŞIMLI KABAN',
    images: [mont13, mont13b, mont13c],
    price: '3699₺',
    color: 'Siyah'
  },
  {
    title: 'KAPÜŞONLU AÇIK DOKULU CEKET',
    images: [mont14, mont14b, mont14c],
    price: '2499₺',
    color: 'Siyah'
  },
  {
    title: 'KIRIŞIK YIKAMALI RELAXED FIT CEKET',
    images: [mont15, mont15b, mont15c],
    price: '3390₺',
    color: 'Mavi'
  },
  {
    title: 'SUNİ DERİ BOMBER CEKET',
    images: [mont16, mont16b, mont16c],
    price: '3299₺',
    color: 'Siyah'
  },


  {
    title: 'SOLUK GÖRÜNÜMLÜ DENIM İNCE CEKET',
    images: [mont21, mont21b, mont21c],
    price: '2299₺',
    color: 'Gri'
  },
  {
    title: 'CEPLİ SOLUK İNCE CEKET',
    images: [mont22, mont22b, mont22c],
    price: '1299₺',
    color: 'Mavi'
  },
  {
    title: 'BALIK SIRTI ÇİZGİLİ İNCE CEKET',
    images: [mont23, mont23b, mont23c],
    price: '2099₺',
    color: 'Bej'
  },
  {
    title: 'FERMUARLI DOKULU İNCE CEKET',
    images: [mont24, mont24b, mont24c],
    price: '2299₺',
    color: 'Gri'
  },
];

const DisGiyim = () => {
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

export default DisGiyim;



