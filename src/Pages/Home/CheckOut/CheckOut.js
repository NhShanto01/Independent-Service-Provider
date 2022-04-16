import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const CheckOut = () => {
    return (
        <div className='container w-50'>
            <h1>This is checkout</h1>
            <Form className=''>

                <Form.Group className='mb-3' controlId="formGridEmail">

                    <Form.Control type="email" placeholder="Your Name" />
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
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default CheckOut;