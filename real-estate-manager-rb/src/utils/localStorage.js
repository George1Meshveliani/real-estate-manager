export const saveFiltersToLocalStorage = (filters) => {
    localStorage.setItem('filters', JSON.stringify(filters));
  };
  
export const loadFiltersFromLocalStorage = () => {
    const savedFilters = localStorage.getItem('filters');
    return savedFilters ? JSON.parse(savedFilters) : null;
};

export const clearFiltersFromLocalStorage = () => {
    localStorage.removeItem('filters');
};
