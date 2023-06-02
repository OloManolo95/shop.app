import styles from '../ProductForm.module.scss';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
    return(
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {sizes.map(size =>
                    <li key={shortid()}>
                        <button type="button" className={ currentSize === size.name ?  styles.active : undefined} onClick={ () => setCurrentSize(size.name)}>{ size.name }</button>
                    </li>)}
            </ul>
        </div>

    );
};

OptionSize.propTypes = {
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired
}

export default OptionSize;