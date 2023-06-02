import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';

const ProductForm = ({addToCart, sizes,
                      currentSize, setCurrentSize,
                      colors, prepareColorClassName,
                      currentColor, setCurrentColor}) => {

    return(
        <form onSubmit={ addToCart }>
        <OptionSize sizes= { sizes } currentSize= { currentSize } setCurrentSize={ setCurrentSize }
        />
        <OptionColor colors={ colors } prepareColorClassName={ prepareColorClassName }
            currentColor={ currentColor } setCurrentColor={ setCurrentColor }
        />
        <Button className={styles.button}>
          <span className="fa fa-shopping-cart"/>
        </Button>
      </form>

    );
};

ProductForm.propTypes = {
    addToCart: PropTypes.func.isRequired,
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
    prepareColorClassName: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired
};

export default ProductForm;