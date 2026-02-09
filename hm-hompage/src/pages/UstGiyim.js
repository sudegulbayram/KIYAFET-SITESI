import React, { useState } from 'react';
import { FaHeart , FaShoppingCart } from 'react-icons/fa';


import U1 from '../images/U1.jpg';
import U1B from '../images/U1B.jpg';
import U1C from '../images/U1C.jpg';
import U2 from '../images/U2.jpg';
import U2B from '../images/U2B.jpg';
import U2C from '../images/U2C.jpg';
import U3 from '../images/U3.jpg';
import U3B from '../images/U3B.jpg';
import U3C from '../images/U3C.jpg';
import U4 from '../images/U4.jpg';
import U4B from '../images/U4B.jpg';
import U4C from '../images/U4C.jpg';
import U5 from '../images/U5.jpg';
import U5B from '../images/U5B.jpg';
import U5C from '../images/U5C.jpg';
import U6 from '../images/U6.jpg';
import U6B from '../images/U6B.jpg';
import U6C from '../images/U6C.jpg';
import U7 from '../images/U7.jpg';
import U7B from '../images/U7B.jpg';
import U7C from '../images/U7C.jpg';
import U8 from '../images/U8.jpg';
import U8B from '../images/U8B.jpg';
import U8C from '../images/U8C.jpg';
import U9 from '../images/U9.jpg';
import U9B from '../images/U9B.jpg';
import U9C from '../images/U9C.jpg';
import U10 from '../images/U10.jpg';
import U10B from '../images/U10B.jpg';
import U10C from '../images/U10C.jpg';
import U11 from '../images/U11.jpg';
import U11B from '../images/U11B.jpg';
import U11C from '../images/U11C.jpg';
import U12 from '../images/U12.jpg';
import U12B from '../images/U12B.jpg';
import U12C from '../images/U12C.jpg';
import U13 from '../images/U13.jpg';
import U13B from '../images/U13B.jpg';
import U13C from '../images/U13C.jpg';
import U14 from '../images/U14.jpg';
import U14B from '../images/U14B.jpg';
import U14C from '../images/U14C.jpg';
import U15 from '../images/U15.jpg';
import U15B from '../images/U15B.jpg';
import U15C from '../images/U15C.jpg';
import U16 from '../images/U16.jpg';
import U16B from '../images/U16B.jpg';
import U16C from '../images/U16C.jpg';
import U17 from '../images/U17.jpg';
import U17B from '../images/U17B.jpg';
import U17C from '../images/U17C.jpg';
import U18 from '../images/U18.jpg';
import U18B from '../images/U18B.jpg';
import U18C from '../images/U18C.jpg';
import U19 from '../images/U19.jpg';
import U19B from '../images/U19B.jpg';
import U19C from '../images/U19C.jpg';
import U20 from '../images/U20.jpg';
import U20B from '../images/U20B.jpg';
import U20C from '../images/U20C.jpg';
import U21 from '../images/U21.jpg';
import U21B from '../images/U21B.jpg';
import U21C from '../images/U21C.jpg';
import U22 from '../images/U22.jpg';
import U22B from '../images/U22B.jpg';
import U22C from '../images/U22C.jpg';
import U23 from '../images/U23.jpg';
import U23B from '../images/U23B.jpg';
import U23C from '../images/U23C.jpg';
import U24 from '../images/U24.jpg';
import U24B from '../images/U24B.jpg';
import U24C from '../images/U24C.jpg';
import U25 from '../images/U25.jpg';
import U25B from '../images/U25B.jpg';
import U25C from '../images/U25C.jpg';
import U26 from '../images/U26.jpg';
import U26B from '../images/U26B.jpg';
import U26C from '../images/U26C.jpg';
import U27 from '../images/U27.jpg';
import U27B from '../images/U27B.jpg';
import U27C from '../images/U27C.jpg';
import U28 from '../images/U28.jpg';
import U28B from '../images/U28B.jpg';
import U28C from '../images/U28C.jpg';
import U29 from '../images/U29.jpg';
import U29B from '../images/U29B.jpg';
import U29C from '../images/U29C.jpg';
import U30 from '../images/U30.jpg';
import U30B from '../images/U30B.jpg';
import U30C from '../images/U30C.jpg';
import U31 from '../images/U31.jpg';
import U31B from '../images/U31B.jpg';
import U31C from '../images/U31C.jpg';
import U34 from '../images/U34.jpg';
import U34B from '../images/U34B.jpg';
import U34C from '../images/U34C.jpg';




import './Giyim.css';

const kadınData = [
  {
    title: 'KETEN BÜZGÜLÜ BÜSTİYER TOP',
    images: [U1, U1B, U1C],
    price: '1299₺',
    color: 'Kahverengi'
  },
  {
    title: 'HALTER YAKALI DAR YELEK',
    images: [U2, U2B, U2C],
    price: '1480₺',
    color: 'Beyaz'
  },
  {
    title: 'DRAPELİ HALTER TOP',
    images: [U3, U3B, U3C],
    price: '1199₺',
    color: 'Siyah'
  },
  {
    title: 'BANT TİPİ POLİAMİD BODY',
    images: [U4, U4B, U4C],
    price: '1400₺',
    color: 'Siyah&Beyaz'
  },
  {
    title: 'KETEN KUMAŞLI KISA KOLLU TRİKO TOP',
    images: [U5, U5B, U5C],
    price: '1390₺',
    color: 'Bej'
  },
  {
    title: 'ÇİZGİLİ TRİKO KISA KOLLU',
    images: [U6, U6B, U6C],
    price: '1099₺',
    color: 'Siyah&Beyaz'
  },
  {
    title: 'KISA MÜCEVHERLİ ELBİSE',
    images: [U7, U7B, U7C],
    price: '2099₺',
    color: 'Beyaz'
  },
  {
    title: 'ÇİÇEK DESENLİ ÖRGÜ MİDİ ELBİSE',
    images: [U8, U8B, U8C],
    price: '2299₺',
    color: 'Kırmızı'
  },

  {
    title: 'DESENLİ FULARLI UZUN ELBİSE',
    images: [U9, U9B, U9C],
    price: '3099₺',
    color: 'Pembe'
  },
  {
    title: 'UZUN SATEN YÜZEYLİ ELBİSE',
    images: [U10, U10B, U10C],
    price: '2199₺',
    color: 'Siyah'
  },
  {
    title: 'PUANTİYELİ MİDİ ELBİSE ZW COLLECTION',
    images: [U11, U11B, U11C],
    price: '2099₺',
    color: 'Siyah&Beyaz'
  },
  {
    title: 'ZW COLLECTION HACİMLİ KISA ELBİSE',
    images: [U12, U12B, U12C],
    price: '2299₺',
    color: 'SİYAH'
  },
  {
    title: 'HELLO KITTY T-SHIRT',
    images: [U29, U29B, U29C],
    price: '1090₺',
    color: 'Pembe'
  },
  {
    title: 'BASKILI DİRSEK BOY KOLLU T-SHIRT',
    images: [U30, U30B, U30C],
    price: '1199₺',
    color: 'Beyaz'
  },
  {
    title: 'KISA KOLLU VİSKOZ T-SHIRT',
    images: [U31, U31B, U31C],
    price: '520₺',
    color: 'Mavi&Beyaz'
  },
  {
    title: 'YIKANMIŞ ASİMETRİK T-SHIRT',
    images: [U34, U34B, U34C],
    price: '920₺',
    color: 'Kahverengi'
  },
];

const erkekData = [
  {
    title: 'ÇİZGİLİ TRİKO T-SHIRT',
    images: [U13, U13B, U13C],
    price: '1599₺',
    color: 'Beyaz'
  },
  {
    title: 'KONTRAST RIBLİ BASIC T-SHIRT',
    images: [U14, U14B, U14C],
    price: '880₺',
    color: 'Beyaz'
  },
  {
    title: 'DÜZ RENK T-SHIRT',
    images: [U15, U15B, U15C],
    price: '499₺',
    color: 'Bordo'
  },
  {
    title: 'KONTRAST BASKILI T-SHIRT',
    images: [U16, U16B, U16C],
    price: '1000₺',
    color: 'Lacivert'
  },
  {
    title: 'LOGOLU T-SHIRT',
    images: [U17, U17B, U17C],
    price: '1290₺',
    color: 'Beyaz'
  },
  {
    title: 'KABARTMALI YAMALI T-SHIRT',
    images: [U18, U18B, U18C],
    price: '1399₺',
    color: 'Kahverengi'
  },
  {
    title: 'YAMALI T-SHIRT',
    images: [U19, U19B, U19C],
    price: '1399₺',
    color: 'Siyah'
  },
  {
    title: 'ÇİZGİLİ GÖMLEK',
    images: [U20, U20B, U20C],
    price: '1899₺',
    color: 'Kahverengi'
  },

  {
    title: 'KONTRAST İŞLEMELİ GÖMLEK',
    images: [U21, U21B, U21C],
    price: '1799₺',
    color: 'Kahverengi'
  },
  {
    title: 'ÇİÇEK NAKIŞLI GÖMLEK',
    images: [U22, U22B, U22C],
    price: '2199₺',
    color: 'Beyaz'
  },
  {
    title: 'ÇİZGİ NAKIŞLI GÖMLEK',
    images: [U23, U23B, U23C],
    price: '2299₺',
    color: 'Bej'
  },
  {
    title: 'NAKIŞLI GÖMLEK',
    images: [U24, U24B, U24C],
    price: '2099₺',
    color: 'Lacivert'
  },
  {
    title: 'FERMUARLI SWEATSHIRT',
    images: [U25, U25B, U25C],
    price: '2099₺',
    color: 'Siyah'
  },
  {
    title: 'FERMUARLI YAKA İŞLEMELİ SWEATSHIRT',
    images: [U26, U26B, U26C],
    price: '2099₺',
    color: 'Yeşil'
  },
  {
    title: 'RACING BASKILI BİSİKLET YAKA SWEATSHIRT',
    images: [U27, U27B, U27C],
    price: '2099₺',
    color: 'Mavi'
  },
  {
    title: 'BOXY FIT BASKILI SWEATSHIRT',
    images: [U28, U28B, U28C],
    price: '2199₺',
    color: 'Yeşil'
  },
];

const UstGiyim = () => {
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

export default UstGiyim;
