import titleImg from "../../../assets/titlebg.png";
import ProductCard from "../../../components/ProductCard";

const products = [
  {
    name: "Product1",
    price: 999,
    description: "This is the dlfjl ldfj description1",
  },
  {
    name: "Product2",
    price: 899,
    description: "This is the dfkjldf dfkljdf description2",
  },
  {
    name: "Product3",
    price: 1099,
    description: "This is the fldflk dfl description3",
  },
  {
    name: "Product4",
    price: 999,
    description: "This is the fjl fll fdjfl description4",
  },
];

const ProductCategory = () => {
  return (
    <div id="category" className="flex flex-col items-center p-6">
      <div className="flex flex-col items-center">
        <h2 className="text-green-700 text-6xl font-bold flex flex-col items-center text-center mt-10 -mb-6">
          Product Categories
          <img src={titleImg} alt="" className="w-96 -mt-24" />
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
