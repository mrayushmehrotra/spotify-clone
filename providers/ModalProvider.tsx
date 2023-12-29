"use client";
import React, { useEffect, useState } from "react";
import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import SubscripeModal from "@/components/SubscripeModal";
import { ProductWithPrice } from "@/types";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModelProvider: React.FC<ModalProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <div>
        <AuthModal />
        <UploadModal />
        <SubscripeModal products={products} />
      </div>
    </>
  );
};

export default ModelProvider;
