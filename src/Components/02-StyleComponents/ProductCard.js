import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 8px;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const BuyButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const ProductCard = () => {
  return (
    <Card>
      <ProductName>Product Name</ProductName>
      <ProductDescription>
        La descripción del producto va aquí. Esta es una breve descripción del
        producto.
      </ProductDescription>
      <BuyButton>Comprar ahora</BuyButton>
    </Card>
  );
};

export default ProductCard;
