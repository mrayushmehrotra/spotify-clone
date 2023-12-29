"use client";

import { Price, ProductWithPrice } from "@/types";
import Modal from "./Modal";
import Button from "./Button";

interface SubscribeModalProps {
  products: ProductWithPrice[];
}

const formatPrice = (price: Price) => {
  const priceString = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: price.currency,
    minimumFractionDigits: 0,
  }).format((price?.unit_amount || 0) / 100);
  return priceString;
};

const SubscripeModal: React.FC<SubscribeModalProps> = ({ products }) => {
  let content = <div className="text-center">No Product Available</div>;

  if (products.length) {
    content = (
      <div>
        {products.map((product) => {
          if (!product.prices?.length) {
            return <div key={product.id}>No Prices Available</div>;
          }
          return product.prices.map((price) => (
            <Button key={price.id}>
              Subscribe For {formatPrice(price)} a {price.interval}
            </Button>
          ));
        })}
      </div>
    );
  }

  return (
    <Modal
      title="only for premium users"
      description="Listen to music nonstop with spotify premium"
      isOpen
      onChange={() => {}}
    >
      {content}
    </Modal>
  );
};

export default SubscripeModal;
