// import React, { useState } from 'react';
// import ProductForm from './ProductForm';
// import ProductTable from './ProductTable';

// const ProductManagement = () => {

//     const [products, setProducts] = useState([]);

//     const handleAddProduct = (newProduct) => {
//         const newProducts = [...products, newProduct];
//         setProducts(newProducts);
//     };

//     return (
//         <div>
//             <ProductForm handleAddProduct = {handleAddProduct} />
//             <ProductTable products={products} />
//         </div>
//     );
// };

// export default ProductManagement;


// ProductManagement.jsx
import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);

    const handleAddProduct = (newProduct) => {
        const newProducts = [...products, newProduct];
        setProducts(newProducts);
    };

    const handleDeleteProduct = (indexToDelete) => {
        const remainingProducts = products.filter(
            (_, index) => index !== indexToDelete
        );

        setProducts(remainingProducts);
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <ProductForm handleAddProduct={handleAddProduct} />

            <ProductTable
                products={products}
                handleDeleteProduct={handleDeleteProduct}
            />
        </div>
    );
};

export default ProductManagement;

