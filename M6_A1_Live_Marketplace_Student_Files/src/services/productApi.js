const PRODUCT_URL = 'https://dummyjson.com/products?limit=30';

export async function getProducts() {
  const response = await fetch(PRODUCT_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.products;
}
