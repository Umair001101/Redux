// The Page1 component is a functional component that displays a list of iPhone models. 
// Each iPhone model is displayed as an image with its name and price. 
// When an image is clicked, the handleSelectItem function is called to toggle the selection of the item.
// The selected items are stored in the selectedItems state using the useState hook. 
// The handleNext function is called when the "Go to Android Page" button is clicked, which navigates the user to the /page2 route using the useNavigate hook.
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../selectedItemsSlice';

const Page1 = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();  
  const handleSelectItem = (item) => {
    setSelectedItems((prevItems) =>
      prevItems.includes(item) ? prevItems.filter(i => i !== item) : [...prevItems, item]
    );
    dispatch(addItem(item));
  };
  const handleNext = () => {
    navigate('/page2');
  };
  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.pageTitle}>Page 1</h1>
      <h2 style={styles.subtitle}>Select Your iPhone</h2>
      <div style={styles.imagesContainer}>
        {[
          { name: 'Iphone 12', price: '$599', img: 'https://i5.walmartimages.com/seo/Restored-Apple-iPhone-12-Mini-Carrier-Unlocked-64-GB-White-Refurbished_13f84eb7-17d5-4df0-a7b8-f1abb0df1e33.f4a62ea4bbc5a65840cbfa14040e561a.jpeg.' },
          { name: 'Iphone 13', price: '$699', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPHkfZEkBSMUwD2V5iryzmTMtDfnAHwnimA&s' },
          { name: 'iPhone 14 Pro Max', price: '$999', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-14-pro-max-gold-202404?wid=2000&hei=1897&fmt=jpeg&qlt=95&.v=1713200629537' },
          { name: 'iPhone 15 Pro Max', price: '$1199', img: 'https://buy.gazelle.com/cdn/shop/files/iPhone_15_Pro_Max_-_Natural_titanium-_Overlap_Trans-cropped.jpg?v=1740079270&width=1946' },
        ].map((phone) => (
          <div key={phone.name} style={styles.itemContainer} onClick={() => handleSelectItem(phone.name)}>
            <img 
              src={phone.img} 
              alt={phone.name} 
              style={selectedItems.includes(phone.name) ? styles.selectedImage : styles.image} 
            />
            <p style={styles.itemText}>{phone.name} - {phone.price}</p>
          </div>
        ))}
      </div>
      <button style={styles.nextButton} onClick={handleNext}>
        Go to Android Page
      </button>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  pageTitle: { 
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '20px',
    color: '#333' 
  },
  subtitle: { 
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#555', 
    marginBottom: '20px' 
  },
  imagesContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '30px'
  },
  itemContainer: { 
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  image: { 
    width: '200px',
    height: '200px',
    borderRadius: '8px',
    transition: 'transform 0.3s ease, opacity 0.3s ease'
  },
  selectedImage: {
    width: '200px',
    height: '200px',
    borderRadius: '8px',
    transform: 'scale(1.1)',
    opacity: '0.7',
    transition: 'transform 0.3s ease, opacity 0.3s ease' 
  },
  itemText: {
    fontSize: '1rem',
    fontWeight: '500',
    marginTop: '10px' 
  },
  nextButton: { 
    padding: '12px 24px',
    fontSize: '1rem',
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '20px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  nextButtonHover: {
    backgroundColor: '#1976d2',
    transform: 'scale(1.05)',
  }
};

export default Page1;
