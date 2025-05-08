import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import ScrollToTop from '../../ScrollToTop/ScrollToTop';

const ContactUs = () => {
    return (
        <div className="w-11/12 max-w-4xl mx-auto my-10 p-6 bg-base-100 rounded-lg shadow-md">
            <title>Subscrify || Contact Us</title>
            <ScrollToTop></ScrollToTop>
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-4">📞 Contact Us</h1>

            <p className="text-base-content mb-6">
                We'd love to hear from you! Whether you have a question, feedback, or partnership inquiry, reach out and we'll get back to you as soon as possible.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <FaEnvelope className="text-primary mt-1" />
                        <div>
                            <h2 className="text-base font-semibold text-secondary">Email</h2>
                            <p className="text-sm text-base-content">support@subscrify.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <FaPhoneAlt className="text-primary mt-1" />
                        <div>
                            <h2 className="text-base font-semibold text-secondary">Phone</h2>
                            <p className="text-sm text-base-content">+1 (800) 123-4567</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-primary mt-1" />
                        <div>
                            <h2 className="text-base font-semibold text-secondary">Address</h2>
                            <p className="text-sm text-base-content">123 Subscrify Lane, Innovation City, USA</p>
                        </div>
                    </div>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text text-base-content font-medium">Your Name</span>
                        </label>
                        <input type="text" placeholder="John Doe" className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-base-content font-medium">Email</span>
                        </label>
                        <input type="email" placeholder="john@example.com" className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="label">
                            <span className="label-text text-base-content font-medium">Message</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            placeholder="Your message..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-full">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
