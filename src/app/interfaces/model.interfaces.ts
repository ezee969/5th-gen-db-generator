interface Relationship {
  relationshipType: 'hasOne' | 'belongsTo' | 'hasMany' | 'belongsToMany' | '';
  targetModel: string;
}

interface Field {
  fieldName: string;
  fieldType: string;
  size: string;
  defaultValue: string;
  notNull: boolean;
  unique: boolean;
}

interface Model {
  modelName: string;
  fields: Field[];
  relationship?: Relationship;
  id: string;
  createdBy: string;
}
