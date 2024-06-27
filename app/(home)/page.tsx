"use client"
import styled from "styled-components";
import { ViewMoreButton } from "@/components/ViewMoreButton";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Product } from "@/interfaces";
import { INITIAL_PRODUCT_VISIBLE_COUNT, PRODUCT_VISIBLE_COUNT } from "@/contants";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_PRODUCT_VISIBLE_COUNT);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setInitialLoading(true);
      const response = await fetch('https://fakestoreapi.com/products')
      if(response) {
        const data = await response.json()
        setProducts(data)
        setVisibleProducts(data.slice(0, visibleCount));
      }
    } catch (error) {
      console.log(error)
    } finally {
      setInitialLoading(false);
    }
  }

  const loadMoreData = async () => {
    try {
      setLoadingMore(true);
      const newVisibleCount = visibleCount + PRODUCT_VISIBLE_COUNT;
      setVisibleCount(newVisibleCount);
      setVisibleProducts(products.slice(0, newVisibleCount));
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingMore(false);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleLoadMore = () => {
    loadMoreData();
  };

  if(initialLoading){
    return <Loader />
  }

  return (
    <MainContent>
      <ProductGrid products={visibleProducts}/>
      {visibleProducts.length < products?.length && (
        <ViewMoreButton onClick={handleLoadMore} loading={loadingMore} />
      )}
      </MainContent>
  );
}

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
`;

