import axios from 'axios';

const API_URL = 'http://localhost:3004';
export const CACHE_TAG_MODELS = 'models';

export const fetchModelsByUser = async (user: string): Promise<Model[]> => {
  const url = `${API_URL}/models?createdBy=${user}`;

  if (!user) return [];

  const res = await fetch(url);
  if (!res.ok) throw new Error('Error fetching models');

  return await res.json();
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

export const generateModel = async () => {
  await fetch('/api/generate', {
    method: 'POST',
  });
};

export const fetchAllModels = async (): Promise<Model[]> => {
  const res = await axios.get<Model[]>('http://localhost:3004/models');

  return res.data;
};
