import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddItemForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [showAddItemForm, setShowAddItemForm] = useState(false);

    return (
        <div className="container mb-8">
            <div className="row justify-content-end mb-4">
                <button
                    className="btn btn-success"
                    onClick={() => setShowAddItemForm(true)}
                >
                    Add New Item
                </button>
            </div>
            {showAddItemForm && (
                <Formik
                    initialValues={{
                        itemNumber: '',
                        Name: '',
                        Quantity: '',
                        Price: '',
                    }}
                    validationSchema={Yup.object({
                        itemNumber: Yup.number().required('Barcode number is required'),
                        Name: Yup.string().required('Name is required'),
                        Quantity: Yup.number().required('Quantity is required'),
                        Price: Yup.number().required('Price is required'),
                    })}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        try {
                            const token = localStorage.getItem('token');
                            await axios.post(
                                'http://localhost:5055/addItem',
                                values,
                                {
                                    headers: {
                                        authorization: `bearer ${token}`,
                                    },
                                }
                            );
                            setSubmitting(false);
                            setIsSuccess(true);
                            setTimeout(() => {
                                setIsSuccess(false);
                            }, 2000);
                            resetForm();
                        } catch (error) {
                            console.log('Error adding item:', error);
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <Field
                                        type="text"
                                        placeholder="Barcode value"
                                        className="form-control"
                                        name="itemNumber"
                                    />
                                    <ErrorMessage
                                        name="itemNumber"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Field
                                        type="text"
                                        placeholder="Name"
                                        className="form-control"
                                        name="Name"
                                    />
                                    <ErrorMessage
                                        name="Name"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>

                                <div className="col-md-6 mb-3">
                                    <Field
                                        type="text"
                                        placeholder="Quantity"
                                        className="form-control"
                                        name="Quantity"
                                    />
                                    <ErrorMessage
                                        name="Quantity"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <Field
                                        type="text"
                                        placeholder="Price"
                                        className="form-control"
                                        name="Price"
                                    />
                                    <ErrorMessage
                                        name="Price"
                                        component="div"
                                        className="text-danger"
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <button
                                        className="btn btn-success mr-2"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        Add Item
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        type="button"
                                        onClick={() => setShowAddItemForm(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            )}
            {isSuccess && (
                <div className="alert alert-success text-center" role="alert">
                    Item added successfully.
                </div>
            )}
        </div>
    );
}

export default AddItemForm;
