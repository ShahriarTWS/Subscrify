import React from 'react';
import { FaUsers } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="w-11/12 max-w-4xl mx-auto my-10 p-6 bg-base-100 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-4">
                <FaUsers className="text-2xl text-primary" />
                <h1 className="text-2xl md:text-3xl font-bold text-primary">About Us – Subscrify</h1>
            </div>

            <p className="text-sm text-base-content mb-4">
                Last Updated: <span className="font-medium">May 6, 2025</span>
            </p>

            <div className="space-y-6 text-base-content leading-relaxed">
                <section>
                    <h2 className="text-lg font-semibold text-secondary">Who We Are</h2>
                    <p className="mt-2">
                        Subscrify is a subscription box service platform built to connect users with unique, curated subscription experiences across various categories — from snacks and books to fitness and tech.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">Our Mission</h2>
                    <p className="mt-2">
                        To empower individuals and businesses by simplifying subscription discovery, management, and user engagement with personalized recommendations and reliable customer service.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">What Makes Us Different</h2>
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                        <li>Intuitive and user-friendly interface</li>
                        <li>Wide variety of niche and mainstream boxes</li>
                        <li>Authentic user reviews and feedback</li>
                        <li>Secure authentication with Firebase</li>
                        <li>Mobile-responsive and modern design</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">Meet the Team</h2>
                    <p className="mt-2">
                        We're a group of passionate developers and designers dedicated to creating seamless digital experiences. Subscrify was built as part of a learning journey and continues to evolve with community feedback.
                    </p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">Connect With Us</h2>
                    <p className="mt-2">
                        Have questions or feedback? We'd love to hear from you! Reach out via our contact form or follow us on social media.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutUs;
