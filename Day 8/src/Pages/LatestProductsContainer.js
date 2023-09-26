import React from 'react';
import './LatestProductsContainer.css';

const LatestProductsContainer = () => {
  const productsData = [
    { id: 1, name: 'Healthcare Erbology', logoUrl: 'https://img.freepik.com/free-photo/cosmetic-male-beauty-products-with-display_23-2150435210.jpg?size=626&ext=jpg&ga=GA1.1.1978472177.1678875919&semt=ais', updateTime: '6 hours ago' },
    { id: 2, name: 'Makeup Lancome Rouge', logoUrl: 'https://img.freepik.com/free-photo/red-lipsticks-background_23-2148978123.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais', updateTime: '2 hours ago' },
    { id: 3, name: 'Skincare Soja CO', logoUrl: 'https://img.freepik.com/free-photo/leaves-with-natural-cosmetics_23-2148574940.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais', updateTime: '1 day ago' },
    { id: 4, name: 'Healthcare Kirkland Signature', logoUrl: 'https://img.freepik.com/free-photo/top-view-foundation-containers-assortment_23-2149511265.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais', updateTime: '3 days ago'  },
    { id: 5, name: 'Makeup Serum', logoUrl: 'https://img.freepik.com/free-photo/skin-care-banner-concept-with-lotion_23-2149449097.jpg?size=626&ext=jpg&ga=GA1.2.1978472177.1678875919&semt=ais' , updateTime: '5 days ago' },
    { id: 6, name: 'Healthcare Ritual', logoUrl: 'https://img.freepik.com/free-photo/spa-treatment-dark-wall_176420-11895.jpg?size=626&ext=jpg&ga=GA1.1.1978472177.1678875919&semt=ais', updateTime: '7 days ago'  },
  ];

  return (
    <div className="latest-products-container">
      <h2>Latest Products</h2>
      <div className="product-rows">
        {productsData.map((product) => (
          <div className="product-row" key={product.id}>
            <div className="product-info">
              <img src={product.logoUrl} alt={product.name} className="product-logo" />
              <div className="product-details">
                <span className="product-name">{product.name}</span>
                <div className="product-updated">Updated {product.updateTime}</div>
              </div>
            </div>
            <div className="vertical-dots">...</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProductsContainer;
