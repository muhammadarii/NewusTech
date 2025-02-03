import React from "react";

const CategoryFilter = ({ selectedCategory, onCategoryChange, categories }) => {
  return (
    <>
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="py-2 px-1 border border-gray-300 rounded-r-full mb-4 shadow-md"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default CategoryFilter;
