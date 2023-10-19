export type CartItem = {
  id: string,
  name: string,
  imageSrc: string
}

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
