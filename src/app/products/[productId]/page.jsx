async function ProductDetailPage({ params }) {
  const { productId } = await params;
  return <h1>Product detail - {productId}</h1>;
}

export default ProductDetailPage;
