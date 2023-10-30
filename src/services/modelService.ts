import axios from 'axios';

const API_URL = 'http://localhost:3004';

export const fetchModelsByUser = async (user: string): Promise<Model[]> => {
  if (!user) return [];
  // make the request to last longer so i can test the loader
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await axios.get<Model[]>(
    'http://localhost:3004/models?createdBy=' + user
  );

  return res.data;
};

export const saveModel = async (model: Model): Promise<Model | undefined> => {
  try {
    if (model.modelName.trim() === '') return;

    if (model.fields.length === 0) return;

    const response = await axios.post(`${API_URL}/models`, model);
    return response.data;
  } catch (error) {
    console.error('Error saving model:', error);
    throw error;
  }
};

export const fetchAllModels = async (): Promise<Model[]> => {
  const res = await axios.get<Model[]>('http://localhost:3004/models');

  return res.data;
};
