import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CheckOut = () => {

    const handleSubmitBtn = () => {
        toast.success("Thank You for Checkout")
    }

    return (
        <div className='container w-50'>
            <h1 className='text-success mt-5 mb-5'>Checkout Form</h1>
            <Form>

                <Form.Group className='mb-3' controlId="formGridEmail">

                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className='mb-3' controlId="formGridEmail">

                    <Form.Control type="email" placeholder="Your email" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="formGridPassword">

                    <Form.Control type="phone" placeholder="Your Phone" />
                </Form.Group>


                <FloatingLabel className='mb-3' controlId="floatingTextarea2" label="Address">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>

                <Form.Group className="mb-3 text-start" id="formGridCheckbox">

                    <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <h4
                                className='text-success'
                                >Payment with</h4>
                                <Form.Check
                                    inline
                                    label="Online Payment"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <Form.Check
                                    inline
                                    label="Cash On Hand"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                />
                            </div>
                        ))}
                    </Form>

                </Form.Group>

                <button onClick={handleSubmitBtn} className='btn btn-success'>Submit </button>
            </Form>
            <ToastContainer closeButton={false} position="top-center" />
        </div>
    );
};

export default CheckOut;