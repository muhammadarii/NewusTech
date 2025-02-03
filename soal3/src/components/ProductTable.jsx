import React from "react";

const ProductTable = ({ products }) => {
  return (
    <>
      <table className="min-w-full bg-[#A1E3F9] border border-gray-300 shadow-xl">
        <thead>
          <tr className="bg-[#3674B5] text-white">
            <th className="py-2 px-4 border-b">Nama</th>
            <th className="py-2 px-4 border-b">Harga</th>
            <th className="py-2 px-4 border-b">Kategori</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="text-center hover:bg-[#578FCA] hover:text-white text-black"
            >
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">
                Rp.{product.price.toLocaleString("en-US")}
              </td>
              <td className="py-2 px-4 border-b">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
