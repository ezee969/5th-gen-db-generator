import axios from 'axios';

const API_URL = 'http://localhost:3004';

export const fetchModels = async (user: string): Promise<Model[]> => {
  if (!user) return [];

  const res = await axios.get<Model[]>(
    'http://localhost:3004/models?createdBy=' + user
  );

  return res.data;
};
export const saveModel = async (model: Model): Promise<Model | undefined> => {
  try {
    if (model.modelName.trim() === '') return;

    const response = await axios.post(`${API_URL}/models`, model);
    return response.data;
  } catch (error) {
    console.error('Error saving model:', error);
    throw error;
  }
};
