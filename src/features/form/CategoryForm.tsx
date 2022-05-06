import { observer } from 'mobx-react-lite';
import React, { useState,useEffect} from 'react';
import { useParams } from 'react-router';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import { useStore } from '../../app/stores/store';
import { Formik, Form, Field} from 'formik';
import { CategoryCreateFormValues, CategoryFormValues } from '../../app/models/category';
import {  Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const style = {
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '48%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  };

export default observer(function CategoryForm(){
    let navigate = useNavigate()
    const {categoryStore, modalStore} = useStore();
    const {createCategory, updateCategory, loadCategory} = categoryStore;
    const {closeModal} = modalStore
    const {id} = useParams<{id: string}>();
    const [category, setCategory] = useState<CategoryFormValues>(new CategoryFormValues());
    const validationSchema = Yup.object({
        category_name: Yup.string().required('Kategori İsmi Gereklidir.'),
    })

    useEffect(() => {
        if(id) loadCategory(Number(id)).then(category => setCategory(new CategoryFormValues(category)))
    },[id, loadCategory]);
    


    function handleFormSubmit(category: CategoryFormValues) {
        if(!category.id){

            let newCategory: CategoryCreateFormValues = {
                category_name: category.category_name
            };
            createCategory(newCategory).then(() => {
                closeModal()
                navigate('/')
            });
            
        } else {
            updateCategory(category).then(() => `/category/${category.id}`);
        }
        
    }



    return (
        <Formik 
            validationSchema={validationSchema}
            enableReinitialize 
            initialValues={category}
            onSubmit={(values) => handleFormSubmit(values)
            
            }>
            {({ handleSubmit, isSubmitting, isValid, dirty}) => (
                    <Form 

                    noValidate
                    autoComplete="off" onSubmit={handleSubmit}>
                         <Field id="outlined-basic" name='category_name' label="Kategori İsmi" variant="outlined" />
                         <Button type="submit" variant="contained" color="primary" 
                         >Save</Button>
                    </Form>
            )}
        </Formik>
    );
})