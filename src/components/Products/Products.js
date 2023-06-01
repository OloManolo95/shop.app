import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);

  return (
    <section>
      {/* Use .map at products array to iterate over each product and render a component for each item */}
      {products.map((product) => <Product key={product.id} {...product}
            /* Using ...product instead of
              key={product.id}
              name={product.name}
              title={product.title}
              colors={product.colors}
              sizes={product.sizes}
              basePrice={product.basePrice}
            */
          />
      )}
    </section>
  );
};

export default Products;