import React from 'react'

import {
    ProductsContainer,
    ProductsHead,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice,
    ProductButton
} from "./ProductElements";

const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHead>{heading}</ProductsHead>
            <ProductWrapper>
                {data.map((prod) => {
                    return (
                        <ProductCard key={prod.index}>
                            <ProductImg src={prod.img}
                                alt={prod.alt}
                            />
                            <ProductInfo>
                                <ProductTitle>{prod.name}</ProductTitle>
                                <ProductDesc>{Products.desc}</ProductDesc>
                                <ProductPrice>{prod.price}</ProductPrice>
                                <ProductButton>{prod.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
