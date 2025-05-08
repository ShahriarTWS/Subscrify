import React from 'react';
import { FaRegFileAlt } from 'react-icons/fa';

const TermsAndConditions = () => {
    return (
        <div className="w-11/12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-base-100 rounded-lg shadow-md my-6">
            <title>Subscrify || Terms and Condition</title>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-6">
                <FaRegFileAlt className="text-primary text-3xl" />
                <h1 className="text-xl sm:text-2xl font-bold text-primary">
                    📜 Terms and Conditions – Subscrify
                </h1>
            </div>

            <p className="text-sm text-base-content mb-6">
                Last Updated: <span className="font-medium">May 6, 2025</span>
            </p>

            <div className="space-y-8 text-base-content text-sm sm:text-base leading-relaxed">
                <section>
                    <h2 className="text-lg font-semibold text-secondary">1. Use of the Website</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Users must be at least 13 years old.</li>
                        <li>You agree not to misuse the website or attempt to harm its functionality or security.</li>
                        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">2. Subscription Services</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Subscriptions are billed on a recurring monthly basis.</li>
                        <li>By subscribing, you agree to pay all fees associated with your selected plan.</li>
                        <li>You may cancel your subscription at any time through your account settings.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">3. Content and Reviews</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Users may post reviews. Subscrify reserves the right to remove content that is offensive, spammy, or violates any laws.</li>
                        <li>You grant Subscrify a non-exclusive right to use your submitted content for promotional or educational purposes.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">4. Intellectual Property</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>All content on Subscrify, including logos, branding, and images, is owned or licensed by us.</li>
                        <li>You may not reproduce or redistribute content without permission.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">5. Limitation of Liability</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Subscrify is not liable for any damages resulting from the use or inability to use our platform.</li>
                        <li>We do not guarantee the accuracy or quality of items in the subscription boxes.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">6. Account Termination</h2>
                    <p className="mt-2 pl-6">We may suspend or terminate your account if you violate these terms.</p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">7. Modifications</h2>
                    <p className="mt-2 pl-6">We reserve the right to modify these Terms at any time. Continued use of Subscrify implies acceptance of any updates.</p>
                </section>
            </div>
        </div>
    );
};

export default TermsAndConditions;
