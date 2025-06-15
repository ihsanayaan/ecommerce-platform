const [filters, setFilters] = useState({
  category: 'all',
  priceRange: 'all',
  sortBy: 'featured',
  searchQuery: ''
});

// Add this useEffect to handle URL search params
useEffect(() => {
  const searchParams = new URLSearchParams(location.search);
  setFilters(prev => ({
    ...prev,
    searchQuery: searchParams.get('search') || ''
  }));
}, [location.search]);

// Filter products function
const filteredProducts = products.filter(product => {
  return (
    (filters.category === 'all' || product.category === filters.category) &&
    (filters.priceRange === 'all' || checkPriceRange(product.price, filters.priceRange)) &&
    (filters.searchQuery === '' || 
     product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()))
  );
});

// Helper function for price range
const checkPriceRange = (price, range) => {
  switch(range) {
    case '0-50': return price <= 50;
    case '50-100': return price > 50 && price <= 100;
    case '100-200': return price > 100 && price <= 200;
    default: return true;
  }
};