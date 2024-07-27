import axios from '@/api/axios';
import type { Category } from '@/domain/category';

type RequestUpperCategoriesData = Category & { subCategories: Category[] };

const requestUpperCategories = async (): Promise<RequestUpperCategoriesData> => {
  const response = await axios.get<RequestUpperCategoriesData>('/api/categories');

  return response.data;
};

type UpperCategoryId = number;

const requestLowerCategoriesByUpperId = async (id: UpperCategoryId): Promise<Category[]> => {
  const response = await axios.get<Category[]>(`/api/categories/${id}`);

  return response.data;
};

export { requestUpperCategories, requestLowerCategoriesByUpperId };
