export type Product = {
  id: string;
  name: string;
  description: string;
  productDetails: {
    material: string;
    lining: string;
    madeIn: string;
  }
  imgSrc: string;
}

export function ProductPreviewItem(props: { product: Product }) {
  const { id, name, description, productDetails, imgSrc } = props.product;

  return (
    <div className="productPreviewItem">
      <img src={imgSrc} />
      <h1>{name}</h1>
      <p>{description}</p>
      <ul>
        <li>Material: {productDetails.material}</li>
        <li>Lining: {productDetails.lining}</li>
        <li>Made in: {productDetails.madeIn}</li>
      </ul>
    </div>
  );
}
