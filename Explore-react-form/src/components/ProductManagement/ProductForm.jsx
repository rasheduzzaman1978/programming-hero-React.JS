import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {
    const [error, setError] = useState('');

    const handleProductSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const quantity = form.quantity.value;

        // console.log(name, price, quantity);
        // Validation 
        // if (!name || !price || !quantity) {
        //     alert('Please fill in all fields.');
        //     return;
        // }

        if (name.length === 0) {
            setError('Product name cannot be empty.');
            return;
        } else if (Number(price) <= 0) {
            setError('Price must be a positive number.');
            return;
        } else if (Number(quantity) <= 0) { 
            setError('Quantity must be a positive number.');
            return;
        } else {
            setError('');
        }


        const newProduct = {
            name,
            price,
            quantity
        };

        console.log(newProduct);

        handleAddProduct(newProduct);

        form.reset();
    };

    return (
        <div>
            <h3>Add a Product</h3>

            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder="Product Name" />
                <br />

                <input type="number" name="price" placeholder="Price" />
                <br />

                <input type="number" name="quantity" placeholder="Quantity" />
                <br />

                <button type="submit">Add Product</button>
            </form>
            <p className="text-red-500"><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;