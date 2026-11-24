import type { Category } from '../types/product';

type FilterOption = 'Todos' | Category;

interface CategoryFilterProps {
  selectedCategory: FilterOption;
  onCategoryChange: (category: FilterOption) => void;
}

const CATEGORIES: FilterOption[] = ['Todos', 'Lácteos', 'Bebidas', 'Almacén'];

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <section
      style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '20px',
      }}
    >
      {CATEGORIES.map((category) => {
        const isActive = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            style={{
              padding: '8px 16px',
              fontSize: '15px',
              borderRadius: '6px',
              border: '1px solid #aaa',
              cursor: 'pointer',
              fontWeight: isActive ? 'bold' : 'normal',
              backgroundColor: isActive ? '#2563eb' : '#f3f4f6',
              color: isActive ? '#ffffff' : '#111827',
            }}
          >
            {category}
          </button>
        );
      })}
    </section>
  );
}