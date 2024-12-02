import { notFound } from "next/navigation";

async function ReviewDetail({ params }) {
  const { reviewId, productId } = await params;
  if (reviewId > 100) {
    notFound();
  }
  return (
    <h1>
      review detail {reviewId} for product {productId}
    </h1>
  );
}

export default ReviewDetail;
