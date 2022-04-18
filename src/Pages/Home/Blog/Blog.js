import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <section id="blog">
            <div className='container text-success '>
                <h2 className='mb-5'>Article</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" >
                        <Accordion.Header><span className='text-success'>Q1 : What is the difference between authorization and authentication</span></Accordion.Header>
                        <Accordion.Body>
                            <p className="text-start">
                                <span className='fw-bold'>Authentication & authorization :</span> Authentication is the act of validating that users are whom they claim to be. This is the first step in any security process. And authorization in system security is the process of giving the user permission to access a specific resource or function. This term is often used interchangeably with access control or client privilege. <br />

                                <span className='fw-bold'>Authentication vs authorization :</span> Both the terms are often used in conjunction with each other, they have totally different concepts and meanings. While both of the concepts are crucial to web service infrastructure, especially when it comes granting access to a system, understanding each term in regards to security is the key. While most of us confuse one term with another, understanding the key difference between them is important which is actually very simple. If authentication is who you are, authorization is what you can access and modify. In simple terms, authentication is determining whether someone is who he claims to be. Authorization, on the other hand, is determining his rights to access resources.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Q2 : What other services does firebase provide other then authentication ?</Accordion.Header>
                        <Accordion.Body>
                            <p className="text-start">
                                <span className='fw-bold'>Firebase provide other then authentication : </span>Firebase is a set of tools offered by Google to build excellent scalable applications in the cloud. It is a powerful service that helps in building applications quickly without reinventing the components or modules.Firebase continues to innovate and dominate the backend as a service (BaaS) market.
                            There are many services which Firebase provides, Most useful of them are:
                            <ul className='text-start' >
                                <li>Cloud Firestore.</li>
                                <li>Cloud Functions.</li>
                                <li>Authentication.</li>
                                <li>Hosting.</li>
                                <li>Cloud Storage.</li>
                                <li>Google Analytics.</li>
                                <li>Predictions.</li>
                                <li>Cloud Messaging</li>
                            </ul></p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Q3 : Why are you using firebase and what other options do you have to implement authentication? </Accordion.Header>
                        <Accordion.Body>
                           
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </section>
    );
};

export default Blog;