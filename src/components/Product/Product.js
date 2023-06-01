import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from "react";
import shortid from 'shortid';
import ProductImage from '../ProductImage/ProductImage';


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
        <form onSubmit={ addToCart }>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map(size => <li key={shortid()}>
                <button type="button" className={ currentSize === size.name ?  styles.active : undefined} onClick={ () => setCurrentSize(size.name)}>{ size.name }</button>
                </li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map(color => <li key={color}>
                <button type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} onClick={ () => setCurrentColor(color)}/>
              </li>)}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart"/>
          </Button>
        </form>
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