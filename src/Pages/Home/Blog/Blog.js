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
                                <span className='fw-bold'>Authentication & authorization :</span>Authentication (প্রমাণীকরণ) হল একজন ব্যক্তির পরিচয় শনাক্ত করার প্রক্রিয়া যেটি নিশ্চিত করে যে ব্যক্তিটি যা দাবি করছে সে একই রকম।। এবং Authorization (অনুমোদন) হল কাউকে কিছু করার জন্য মঞ্জুর করার প্রক্রিয়া। এর মানে হল User কাছে resourse ব্যবহার করার অনুমতি আছে কিনা তা চেক করার একটি উপায়। <br />

                                <span className='fw-bold'>Authentication vs authorization :</span> উভয় পদ প্রায়ই একে অপরের সাথে একযোগে ব্যবহৃত হয়, তাদের বিভিন্ন ধারণা এবং অর্থ রয়েছে। যদিও উভয় ধারণাই ওয়েব পরিসেবা পরিকাঠামোর জন্য অত্যন্ত গুরুত্বপূর্ণ, বিশেষ করে যখন এটি একটি সিস্টেমে অ্যাক্সেস প্রদানের ক্ষেত্রে আসে, তখন নিরাপত্তা সংক্রান্ত প্রতিটি শব্দ বোঝাই মূল বিষয়। যদিও আমাদের মধ্যে বেশিরভাগই একটি শব্দকে অন্যটির সাথে বিভ্রান্ত করে, তাদের মধ্যে মূল পার্থক্য বোঝাটা গুরুত্বপূর্ণ এবং খুব সহজ। যদি Authentication হয় আপনি কে, authorization হল আপনি যা অ্যাক্সেস করতে এবং পরিবর্তন করতে পারেন৷ সহজ কথায়, Authentication নির্ধারণ করছে যে কেউ সে যাকে বলে দাবি করে কিনা। অন্যদিকে, Authorization, সম্পদ অ্যাক্সেস করার জন্য তার অধিকার নির্ধারণ করছে।
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <span className='text-success'>Q2 : What other services does firebase provide other then authentication ?</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p className="text-start">
                                <span className='fw-bold'>Firebase provide other then authentication : </span>Firebase হল ক্লাউডে চমৎকার মাপযোগ্য অ্যাপ্লিকেশন তৈরি করার জন্য Google দ্বারা অফার করা সরঞ্জামগুলির একটি সেট৷ এটি একটি শক্তিশালী পরিষেবা যা উপাদান বা মডিউলগুলিকে পুনরায় উদ্ভাবন না করে দ্রুত অ্যাপ্লিকেশন তৈরি করতে সাহায্য করে৷ ফায়ারবেস একটি পরিষেবা (BaaS) বাজার হিসাবে ব্যাকএন্ডে উদ্ভাবন এবং আধিপত্য চালিয়ে যাচ্ছে।
                                ফায়ারবেস প্রদান করে এমন অনেক পরিষেবা রয়েছে, যার মধ্যে সবচেয়ে দরকারী হল:
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
                        <Accordion.Header>
                            <span className='text-success'>Q3 : Why are you using firebase and what other options do you have to implement authentication?</span>
                        </Accordion.Header>
                        <Accordion.Body>
                            <p className='text-start'>
                                <span className='fw-bold'>
                                </span>
                                Firebase প্রমাণীকরণ ব্যাকএন্ড পরিষেবা, সহজে ব্যবহারযোগ্য SDK, এবং আপনার অ্যাপে ব্যবহারকারীদের প্রমাণীকরণের জন্য তৈরি UI লাইব্রেরি প্রদান করে। এটি পাসওয়ার্ড, ফোন নম্বর এবং Google, Facebook, Twitter, ইত্যাদির মতো জনপ্রিয় ফেডারেটেড পরিচয় প্রদানকারী ব্যবহার করে প্রমাণীকরণ সমর্থন করে। Firebase আপনাকে বিশ্লেষণ, ডেটাবেস, বার্তাপ্রেরণ এবং ক্র্যাশ রিপোর্টিংয়ের মতো কার্যকারিতা দেয় যাতে আপনি দ্রুত সরে যেতে এবং আপনার ব্যবহারকারীদের উপর ফোকাস করতে পারেন। Firebase Google পরিকাঠামোতে তৈরি করা হয়েছে এবং স্বয়ংক্রিয়ভাবে স্কেল করা হয়েছে, এমনকি সবচেয়ে বড় অ্যাপের জন্যও। আপনি যদি পরিচালিত ওয়ার্কফ্লো সহ Expo Go অ্যাপে Firebase ব্যবহার করতে চান, তাহলে আমরা Firebase JS SDK ব্যবহার করার পরামর্শ দেব। এটি প্রমাণীকরণ, ফায়ারস্টোর এবং রিয়েলটাইম ডাটাবেস, সঞ্চয়স্থান এবং প্রতিক্রিয়া নেটিভের ফাংশন সমর্থন করে। অন্যান্য মডিউল যেমন অ্যানালিটিক্স Firebase JS SDK-এর মাধ্যমে সমর্থিত নয়, তবে আপনি এর জন্য expo-firebase-analytics ব্যবহার করতে পারেন।
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </section>
    );
};

export default Blog;