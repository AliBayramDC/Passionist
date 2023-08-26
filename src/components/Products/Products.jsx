// Products.jsx
import React, { useState } from 'react';
import './Products.css';
import winstonPorterImage from '../../assets/Winston+Porter+Ibiza.webp';
import fravelImage from '../../assets/Fravel+89+Upholstered+Sofa.webp';
import kornImage from '../../assets/Korn.webp';
import marinelliImage from '../../assets/Marinelli.webp';
import AadvikImage from '../../assets/Aadvik+77.55.webp';
import EviaImage from '../../assets/Evia.webp';
import HelselImage from '../../assets/Helsel+62.2.webp';
import WoodImage from '../../assets/Wood.webp';
import NacimoImage from '../../assets/Nacimo.webp';
import RiggleImage from '../../assets/Riggle.webp';
import KuhnhennImage from '../../assets/Kuhnhenn.webp';
import IsleyImage from '../../assets/Isley.webp';
import ValverdeImage from '../../assets/Valverde.webp';
import MelleryImage from '../../assets/Mellery.webp';
import MontaukImage from '../../assets/Montauk.webp';
import KempstImage from '../../assets/Kempst.webp';
import FalaqImage from '../../assets/Falaq.webp';



const Products = ({cartItems, setCartItems}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  // const [cartItems, setCartItems] = useState([]);
  
  const furnitureData = [
    { id: 1, name: 'Winston Porter', price: '599', category: 'living-room', image: winstonPorterImage },
    { id: 2, name: 'Fravel 89', price: '799', category: 'living-room', image: fravelImage },
    { id: 3, name: 'Korn', price: '199', category: 'living-room', image: kornImage },
    { id: 4, name: 'Korn', price: '199', category: 'living-room', image: AadvikImage },
    { id: 5, name: 'Korn', price: '199', category: 'living-room', image: EviaImage },
    { id: 6, name: 'Korn', price: '199', category: 'living-room', image: HelselImage },
    { id: 7, name: 'Korn', price: '199', category: 'living-room', image: kornImage },
    { id: 8, name: 'Marinelli', price: '299', category: 'living-room', image: marinelliImage },
    { id: 9, name: 'Wood', price: '299', category: 'kitchen', image: WoodImage },
    { id: 10, name: 'Isley', price: '299', category: 'kitchen', image: IsleyImage },
    { id: 11, name: 'Nacimo', price: '299', category: 'kitchen', image: NacimoImage },
    { id: 12, name: 'Riggle', price: '299', category: 'kitchen', image: RiggleImage },
    { id: 13, name: 'Kuhnhenn', price: '299', category: 'kitchen', image: KuhnhennImage },
    // { id: 14, name: 'Evia', price: '$299', category: 'kitchen', image: EviaImage },
    { id: 15, name: 'Falaq', price: '299', category: 'bedroom', image: FalaqImage },
    { id: 16, name: 'Mellery', price: '299', category: 'bedroom', image: MelleryImage },
    { id: 17, name: 'Montauk', price: '299', category: 'bedroom', image: MontaukImage },
    { id: 18, name: 'Kempst', price: '299', category: 'bedroom', image: KempstImage },
    { id: 19, name: 'Valverde', price: '299', category: 'bedroom', image: ValverdeImage },
    // { id: 20, name: 'Behnke', price: '299', category: 'bedroom', image: BehnkeImage },

    // ... other furniture items ...
  ];

  
  const filteredFurniture = selectedCategory === 'all' ? furnitureData : furnitureData.filter(item => item.category === selectedCategory);

  return (
    <div className="products-section" id="products-section">
        <div className="categories">
        <button className={selectedCategory === 'all' ? 'active' : ''} onClick={() => setSelectedCategory('all')}>
            All
         </button>
        <button className={selectedCategory === 'living-room' ? 'active' : ''} onClick={() => setSelectedCategory('living-room')}>
            Living Room
        </button>
        <button className={selectedCategory === 'kitchen' ? 'active' : ''} onClick={() => setSelectedCategory('kitchen')} >
            Kitchen
        </button>
        <button className={selectedCategory === 'bedroom' ? 'active' : ''} onClick={() => setSelectedCategory('bedroom')} >
            Bedroom
        </button>
    </div>
      <div className="products">
        {filteredFurniture.map(item => (
          <div key={item.id} className="product-item">
            <div className="product-image-container">
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-hover">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button
                className="add-to-cart-button"
                onClick={() => setCartItems([...cartItems, item])}
              >
                Add to Cart
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div> 
  );
};

export default Products;
