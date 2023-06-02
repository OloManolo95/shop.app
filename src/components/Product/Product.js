import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from "react";
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';


const Product = ({ name, title, colors, sizes, basePrice }) => {


  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  console.log(sizes);
  console.log(basePrice);
  console.log(name);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const getPrice = () => {
    //take element from sizes array, check if it matches currentSize value and take additionalPrice value from it
    const addPrice = sizes.find(element => element.name === currentSize).additionalPrice
    return basePrice + addPrice

  };

  const addToCart = e => {
    e.preventDefault();

    const cartSummary = `
      Summary
      =============
      Name: ${ title }
      Price: ${ getPrice() }
      Size: ${ currentSize }
      Color: ${ currentColor }
    `;

    console.log(cartSummary);
  };


  return (
    <article className={styles.product}>
      <ProductImage name={ name } title={ title } currentColor={ currentColor } />
      <div>
        <header>
          <h2 className={styles.name}>{ title }</h2>
          <span className={styles.price}>{ getPrice() }$</span>
        </header>
        <ProductForm addToCart={ addToCart } sizes={ sizes }
                     currentSize={ currentSize } setCurrentSize={ setCurrentSize }
                     colors={ colors } prepareColorClassName={ prepareColorClassName}
                     currentColor={ currentColor } setCurrentColor={ setCurrentColor }
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  basePrice: PropTypes.number.isRequired
};

export default Product;