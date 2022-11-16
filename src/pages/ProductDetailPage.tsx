import { useParams } from "react-router-dom";
const ProductDetailPage = () => {
  const { id } = useParams();

  return <div>Product number {id}</div>;
};

export default ProductDetailPage;
