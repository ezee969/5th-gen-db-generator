import React, { FC, ChangeEvent, useEffect, useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import { saveModel, fetchModelsByUser } from '@/services/modelService';
import FormField from './formField';
import FormButtons from './formButtons';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface Props {
  model: Model;
  setModel: React.Dispatch<React.SetStateAction<Model>>;
}

const ModelForm: FC<Props> = ({ model, setModel }) => {
  const router = useRouter();
  const [models, setModels] = useState<string[] | null>([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const session = await getSession();
      const data = await fetchModelsByUser(session?.user?.email as string);
      const modelNames = data.map((model) => model.modelName);

      setModels(modelNames);
      if (modelNames.length > 0) {
        formik.setFieldValue('targetModel', modelNames[0]);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: {
      fieldName: '',
      fieldType: 'INTEGER',
      size: '',
      defaultValue: '',
      notNull: false,
      unique: false,
      relationshipType: 'hasOne',
      targetModel: '',
    } as Field & Relationship,
    validationSchema: Yup.object({
      fieldName: Yup.string(),
      fieldType: Yup.string(),
      size: Yup.string(),
      defaultValue: Yup.string(),
      relationshipType: Yup.string(),
      targetModel: Yup.string(),
    }),
    onSubmit: async () => {
      setIsSaving(true);
      try {
        const session = await getSession();

        const modelWithCreatedBy = {
          ...model,
          createdBy: session?.user?.email as string,
        };

        const response = await saveModel(modelWithCreatedBy);

        if (!response) return;
        router.push('/dashboard');
      } catch (e) {
        console.log(e);
      }
      setIsSaving(false);
    },
  });

  const addFieldToModel = () => {
    if (formik.values?.fieldName.trim() === '') {
      return;
    }

    const { relationshipType, targetModel, ...fieldValues } = formik.values;

    const relationship = {
      type: relationshipType,
      targetModel: targetModel,
    };

    setModel((prevModel) => ({
      ...prevModel,
      fields: [...prevModel.fields, fieldValues],
      relationships: relationship,
    }));

    formik.resetForm({
      values: {
        fieldName: '',
        fieldType: 'INTEGER',
        size: '',
        defaultValue: '',
        notNull: false,
        unique: false,
        relationshipType: relationshipType,
        targetModel: targetModel,
      },
    });
  };

  const handleModelNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setModel((prevModel) => ({
      ...prevModel,
      modelName: value,
    }));
  };

  return (
    <FormikProvider value={formik}>
      <form
        onSubmit={formik.handleSubmit}
        className='space-y-4 rounded-sm bg-slate-700 p-4 text-white'
      >
        <div className='space-y-2'>
          <label
            htmlFor='modelName'
            className='block text-sm font-medium text-gray-300'
          >
            Model name
          </label>
          <input
            id='modelName'
            type='text'
            value={model.modelName}
            onChange={handleModelNameChange}
            className='mt-1 block w-full rounded-md border border-slate-700 bg-slate-800 p-2 text-white'
          />
        </div>
        <FormField label='Field name' id='fieldName' type='text' />
        <FormField
          label='Field type'
          id='fieldType'
          type='select'
          options={['INTEGER', 'FLOAT', 'DATE', 'STRING', 'BOOLEAN']}
        />
        <FormField label='Size' id='size' type='number' />
        <FormField label='Default value' id='defaultValue' type='text' />
        {models && models.length > 0 && (
          <>
            <FormField
              label='Relationship Type'
              id='relationshipType'
              type='select'
              options={[
                'hasOne',
                'belongsTo',
                'hasMany',
                'belongsToMany',
                'none',
              ]}
            />
            <FormField
              label='Target Model'
              id='targetModel'
              type='select'
              options={['none', ...models]}
            />
          </>
        )}

        <FormField label='Not NULL' id='notNull' type='checkbox' />
        <FormField label='Unique' id='unique' type='checkbox' />
        <FormButtons isLoading={isSaving} addFieldToModel={addFieldToModel} />
      </form>
    </FormikProvider>
  );
};

export default ModelForm;
