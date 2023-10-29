import axios from 'axios';

const API_URL = 'http://localhost:3004';

interface Field {
  fieldName: string;
  fieldType: string;
  size: string;
  defaultValue: string;
  notNull: boolean;
  unique: boolean;
  primaryKey: boolean;
}

interface Model {
  modelName: string;
  fields: Field[];
}

export const saveModel = async (model: Model) => {
  try {
    if (model.modelName.trim() === '') return;

    const response = await axios.post(`${API_URL}/models`, model);
    return response.data;
  } catch (error) {
    console.error("Error saving model:", error);
    throw error;
  }
};
