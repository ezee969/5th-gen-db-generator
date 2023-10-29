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