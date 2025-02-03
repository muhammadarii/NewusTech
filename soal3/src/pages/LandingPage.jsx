import { useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import SearchBox from "../components/SearchBox";
import { DataProducts } from "../data/data";
import ProductTable from "../components/ProductTable";

const LandingPage = () => {
  const products = DataProducts;
  const [search, setSearch] = useState(" ");
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua Kategori" ||
      product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "Semua Kategori",
    ...new Set(products.map((product) => product.category)),
  ];
  return (
    <>
      <div className="container mx-auto font-poppins">
        <div className="flex flex-col justify-start items-center w-screen h-screen pt-[50px] bg-gradient-to-t from-gray-100 to-gray-300">
          <h1 className="text-3xl font-bold text-center">
            React Component and Global State
          </h1>
          <h1 className="text-xl font-bold text-center">Daftar Produk</h1>
          <div className="p-6 w-[1400px]">
            <SearchBox seacrh={search} onSearchChange={setSearch} />
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <ProductTable products={filteredProducts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
