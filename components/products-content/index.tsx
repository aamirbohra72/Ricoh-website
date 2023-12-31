import List from './list';
import { useRouter } from 'next/router';

const ProductsContent = () => {
  const router = useRouter();
  const category = router.query.category;
  const convertedString = new String(category)
  .replace(/-/g, " ")
  .replace(/\b\w/g, c => c.toUpperCase())
  .toString();
  return (
    <section className="products-content">
      <div className="products-content__intro">
        {category ?
          <h2>{convertedString}</h2>
          : null}
        {/* <button type="button" onClick={() => setOrderProductsOpen(!orderProductsOpen)} className="products-filter-btn"><i className="icon-filters"></i></button>
        <form className={`products-content__filter ${orderProductsOpen ? 'products-order-open' : ''}`}>
          <div className="products__filter__select">
            <h4>Show products: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
          <div className="products__filter__select">
            <h4>Sort by: </h4>
            <div className="select-wrapper">
              <select>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </form> */}
      </div>

      <List />
    </section>
  );
};

export default ProductsContent
