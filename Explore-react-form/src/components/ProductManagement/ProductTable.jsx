// import React from 'react';

// const ProductTable = ({ products }) => {
//     return (
//         <div style={{ marginTop: '20px' }}>
//             <h3 style={{ marginBottom: '15px' }}>
//                 Products: {products.length}
//             </h3>

//             <table
//                 style={{
//                     width: '100%',
//                     borderCollapse: 'collapse',
//                     boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
//                     borderRadius: '10px',
//                     overflow: 'hidden'
//                 }}
//             >
//                 <thead>
//                     <tr style={{ backgroundColor: '#4CAF50', color: 'white' }}>
//                         <th style={thStyle}>No.</th>
//                         <th style={thStyle}>Name</th>
//                         <th style={thStyle}>Price</th>
//                         <th style={thStyle}>Quantity</th>
//                         <th style={thStyle}>Actions</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {products.map((product, index) => (
//                         <tr
//                             key={index}
//                             style={{
//                                 textAlign: 'center',
//                                 backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff'
//                             }}
//                         >
//                             <td style={tdStyle}>{index + 1}</td>
//                             <td style={tdStyle}>{product.name}</td>
//                             <td style={tdStyle}>${product.price}</td>
//                             <td style={tdStyle}>{product.quantity}</td>
//                             <td style={tdStyle}>
//                                 <button
//                                     style={{
//                                         backgroundColor: '#ff4d4d',
//                                         color: 'white',
//                                         border: 'none',
//                                         padding: '8px 12px',
//                                         borderRadius: '5px',
//                                         cursor: 'pointer'
//                                     }}
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// const thStyle = {
//     border: '1px solid #ddd',
//     padding: '12px',
//     textAlign: 'center'
// };

// const tdStyle = {
//     border: '1px solid #ddd',
//     padding: '10px'
// };

// export default ProductTable;



// ProductTable.jsx
import React from 'react';

const ProductTable = ({ products, handleDeleteProduct }) => {
    const grandTotal = products.reduce(
        (total, product) => total + Number(product.price) * Number(product.quantity),
        0
    );
    return (
        <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Products: {products.length}
            </h3>

            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
                <table className="min-w-full bg-white">
                    <thead className="bg-green-600 text-white">
                        <tr>
                            <th className="px-4 py-3 border">No.</th>
                            <th className="px-4 py-3 border">Name</th>
                            <th className="px-4 py-3 border">Price</th>
                            <th className="px-4 py-3 border">Quantity</th>
                            <th className="px-4 py-3 border">Total</th>
                            <th className="px-4 py-3 border">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((product, index) => (
                            <tr
                                key={index}
                                className="text-center even:bg-gray-100 hover:bg-gray-50 transition"
                            >
                                <td className="px-4 py-3 border">{index + 1}</td>
                                <td className="px-4 py-3 border">{product.name}</td>
                                <td className="px-4 py-3 border">${product.price}</td>
                                <td className="px-4 py-3 border">{product.quantity}</td>
                                <td className="px-4 py-3 border">
                                    ${ (Number(product.price) * Number(product.quantity)).toFixed(2) }
                                </td>
                                <td className="px-4 py-3 border">
                                    <button
                                        onClick={() => handleDeleteProduct(index)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-200"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                                            <tr className="bg-gray-200 font-bold text-center">
                            <td colSpan="4" className="px-4 py-3 border text-right">
                                Grand Total
                            </td>
                            <td className="px-4 py-3 border text-green-700">
                                ${grandTotal.toFixed(2)}
                            </td>
                           </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;

