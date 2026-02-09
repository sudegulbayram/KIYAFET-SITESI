import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import axios from 'axios'; 
import './Giyim.css';

import A1 from '../images/A1.jpg';
import A1B from '../images/A1B.jpg';
import A1C from '../images/A1C.jpg';
import A2 from '../images/A2.jpg';
import A2B from '../images/A2B.jpg';
import A2C from '../images/A2C.jpg';
import A3 from '../images/A3.jpg';
import A3B from '../images/A3B.jpg';
import A3C from '../images/A3C.jpg';
import A4 from '../images/A4.jpg';
import A4B from '../images/A4B.jpg';
import A4C from '../images/A4C.jpg';
import A5 from '../images/A5.jpg';
import A5B from '../images/A5B.jpg';
import A5C from '../images/A5C.jpg';
import A6 from '../images/A6.jpg';
import A6B from '../images/A6B.jpg';
import A6C from '../images/A6C.jpg';
import A7 from '../images/A7.jpg';
import A7B from '../images/A7B.jpg';
import A7C from '../images/A7C.jpg';
import A8 from '../images/A8.jpg';
import A8B from '../images/A8B.jpg';
import A8C from '../images/A8C.jpg';
import A9 from '../images/A9.jpg';
import A9B from '../images/A9B.jpg';
import A9C from '../images/A9C.jpg';
import A10 from '../images/A10.jpg';
import A10B from '../images/A10B.jpg';
import A10C from '../images/A10C.jpg';
import A11 from '../images/A11.jpg';
import A11B from '../images/A11B.jpg';
import A11C from '../images/A11C.jpg';
import A12 from '../images/A12.jpg';
import A12B from '../images/A12B.jpg';
import A12C from '../images/A12C.jpg';
import A13 from '../images/A13.jpg';
import A13B from '../images/A13B.jpg';
import A13C from '../images/A13C.jpg';
import A14 from '../images/A14.jpg';
import A14B from '../images/A14B.jpg';
import A14C from '../images/A14C.jpg';
import A15 from '../images/A15.jpg';
import A15B from '../images/A15B.jpg';
import A15C from '../images/A15C.jpg';
import A16 from '../images/A16.jpg';
import A16B from '../images/A16B.jpg';
import A16C from '../images/A16C.jpg';
import A17 from '../images/A17.jpg';
import A17B from '../images/A17B.jpg';
import A17C from '../images/A17C.jpg';
import A18 from '../images/A18.jpg';
import A18B from '../images/A18B.jpg';
import A18C from '../images/A18C.jpg';
import A19 from '../images/A19.jpg';
import A19B from '../images/A19B.jpg';
import A19C from '../images/A19C.jpg';
import A20 from '../images/A20.jpg';
import A20B from '../images/A20B.jpg';
import A20C from '../images/A20C.jpg';
import A21 from '../images/A21.jpg';
import A21B from '../images/A21B.jpg';
import A21C from '../images/A21C.jpg';
import A22 from '../images/A22.jpg';
import A22B from '../images/A22B.jpg';
import A22C from '../images/A22C.jpg';
import A23 from '../images/A23.jpg';
import A23B from '../images/A23B.jpg';
import A23C from '../images/A23C.jpg';
import A24 from '../images/A24.jpg';
import A24B from '../images/A24B.jpg';
import A24C from '../images/A24C.jpg';
import A25 from '../images/A25.jpg';
import A25B from '../images/A25B.jpg';
import A25C from '../images/A25C.jpg';
import A26 from '../images/A26.jpg';
import A26B from '../images/A26B.jpg';
import A26C from '../images/A26C.jpg';
import A27 from '../images/A27.jpg';
import A27B from '../images/A27B.jpg';
import A27C from '../images/A27C.jpg';
import A28 from '../images/A28.jpg';
import A28B from '../images/A28B.jpg';
import A28C from '../images/A28C.jpg';





import './Giyim.css';

const kadınData = [
  {
    title: 'MİNİ DENİM ETEK',
    images: [A1, A1B, A1C],
    price: '1499₺',
    color: 'Mavi'
  },
  {
    title: 'PAYETLİ MİNİ ETEK',
    images: [A2, A2B, A2C],
    price: '1480₺',
    color: 'Bej'
  },
  {
    title: 'KISA KLOŞ ETEK',
    images: [A3, A3B, A3C],
    price: '2299₺',
    color: 'Bej'
  },
  {
    title: 'SÜET DERİ MİNİ ETEK',
    images: [A4, A4B, A4C],
    price: '5190₺',
    color: 'Kahverengi'
  },
  {
    title: 'KRUVAZE DENİM MİDİ ETEK',
    images: [A5, A5B, A5C],
    price: '1390₺',
    color: 'Gri'
  },
  {
    title: 'PENCERE DETAYLI MİDİ ETEK',
    images: [A6, A6B, A6C],
    price: '1399₺',
    color: 'Siyah'
  },
  {
    title: 'BÜZGÜ DETAYLI MİDİ ETEK',
    images: [A7, A7B, A7C],
    price: '1199₺',
    color: 'Kahverengi'
  },
  {
    title: 'DESENLİ SATEN MİDİ ETEK',
    images: [A8, A8B, A8C],
    price: '1599₺',
    color: 'Kahverengi&Beyaz'
  },

  {
    title: 'GENİŞ PAÇA JEAN',
    images: [A9, A9B, A9C],
    price: '1699₺',
    color: 'Beyaz'
  },
  {
    title: 'PALAZZO YÜKSEK BEL JEAN',
    images: [A10, A10B, A10C],
    price: '2199₺',
    color: 'Mavi'
  },
  {
    title: 'TRF JEAN',
    images: [A11, A11B, A11C],
    price: '2099₺',
    color: 'Mavi'
  },
  {
    title: 'BAGGY ORTA BEL JEAN',
    images: [A12, A12B, A12C],
    price: '2299₺',
    color: 'Gri'
  },
  {
    title: 'PİLLİ PANTOLON',
    images: [A13, A13B, A13C],
    price: '1690₺',
    color: 'Beyaz'
  },
  {
    title: 'KETEN PALAZZO PANTOLON',
    images: [A14, A14B, A14C],
    price: '2199₺',
    color: 'Kahverengi'
  },
  {
    title: 'KIVRIK PAÇA PANTOLON',
    images: [A15, A15B, A15C],
    price: '1670₺',
    color: 'Gri'
  },
  {
    title: 'YAN ŞERİTLİ PANTOLON',
    images: [A16, A16B, A16C],
    price: '1920₺',
    color: 'Yeşil'
  },
];

const erkekData = [
  {
    title: 'BAGGY JEAN',
    images: [A17, A17B, A17C],
    price: '2099₺',
    color: 'Siyah'
  },
  {
    title: 'STRAIGHT FIT JEAN',
    images: [A18, A18B, A18C],
    price: '1980₺',
    color: 'Mavi'
  },
  {
    title: 'SLIM FIT JEAN',
    images: [A19, A19B, A19C],
    price: '1899₺',
    color: 'Beyaz'
  },
  {
    title: 'BAGGY FIT JEAN',
    images: [A20, A20B, A20C],
    price: '1990₺',
    color: 'Mavi'
  },
  {
    title: 'PAMUKLU KETEN PANTOLON',
    images: [A21, A21B, A21C],
    price: '2090₺',
    color: 'Lacivert'
  },
  {
    title: 'KETEN PANTOLON',
    images: [A22, A22B, A22C],
    price: '2299₺',
    color: 'Bej'
  },
  {
    title: 'KLASİK PANTOLON',
    images: [A23, A23B, A23C],
    price: '2399₺',
    color: 'Kahverengi'
  },
  {
    title: 'KLASİK YÜNLÜ PANTOLON',
    images: [A24, A24B, A24C],
    price: '5599₺',
    color: 'Siyah'
  },

  {
    title: 'BOL KESİM JEAN ŞORT',
    images: [A25, A25B, A25C],
    price: '1899₺',
    color: 'Siyah'
  },
  {
    title: 'YIKANMIŞ PAMUKLU ŞORT',
    images: [A26, A26B, A26C],
    price: '1599₺',
    color: 'Bej'
  },
  {
    title: 'DOKULU ŞORT',
    images: [A27, A27B, A27C],
    price: '1499₺',
    color: 'Siyah'
  },
  {
    title: 'DÜZ PAMUKLU ŞORT',
    images: [A28, A28B, A28C],
    price: '1499₺',
    color: 'Mavi'
  },
];

const AltGiyim = () => {
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

  const handleAddToCart = async (item) => {
  try {
    const response = await axios.post('http://localhost:3003/cart', {
      title: item.title,
      image: item.images[0],
      price: item.price,
      color: item.color,
      size: 'M',
      quantity: 1
    });

    console.log('✅ Sepet servisi yanıtı:', JSON.stringify(response.data, null, 2));
    alert(response.data.message || 'Ürün sepete başarıyla eklendi.');
  } catch (error) {
    console.error('❌ Sepete eklenirken hata:', error.response?.data || error.message);
    alert('Ürün sepete eklenirken bir hata oluştu.');
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
            <button className="add-button" onClick={() => handleAddToCart(item)}>
              <FaShoppingCart />
            </button>
            <div className="heart-icon"><FaHeart /></div>
          </div>
          <div className="disgiyim-label">
            <p>{item.title}</p>
            <p className="price">{item.price}</p>
            <div className="color"><label>Renk:</label><span>{item.color}</span></div>
            <div className="size">
              <label>Beden:</label>
              <select defaultValue="M">
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

export default AltGiyim;

