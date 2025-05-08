import React from 'react';
import { FaUserShield } from 'react-icons/fa';

const PrivacyPolicy = () => {
    return (
        <div className="w-11/12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-base-100 rounded-lg shadow-md my-6">
            <title>Subscrify || Privacy Policy</title>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-6">
                <FaUserShield className="text-primary text-3xl" />
                <h1 className="text-xl sm:text-2xl font-bold text-primary">
                    🔐 Privacy Policy – Subscrify
                </h1>
            </div>

            <p className="text-sm text-base-content mb-6">
                Last Updated: <span className="font-medium">May 6, 2025</span>
            </p>

            <div className="space-y-8 text-base-content text-sm sm:text-base leading-relaxed">
                <section>
                    <h2 className="text-lg font-semibold text-secondary">1. Information We Collect</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li><strong>Personal Information:</strong> Name, email, password, and profile photo during registration.</li>
                        <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and other usage data.</li>
                        <li><strong>Reviews:</strong> Any content you submit through our platform.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">2. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>To create and manage your account.</li>
                        <li>To deliver personalized subscription recommendations.</li>
                        <li>To improve our services and user experience.</li>
                        <li>To send you updates, promotional content, and service notifications.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">3. Cookies</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>We use cookies to enhance your browsing experience.</li>
                        <li>You can disable cookies in your browser, but it may affect site functionality.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">4. Data Sharing</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>We do not sell your personal data.</li>
                        <li>We may share data with trusted third-party services (e.g., Firebase) to provide essential services like authentication.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">5. Data Security</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Your data is securely stored using industry-standard practices.</li>
                        <li>We use Firebase Authentication for secure sign-in and user management.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">6. Your Rights</h2>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>You can update or delete your account information at any time.</li>
                        <li>You can opt out of non-essential communications via email settings.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">7. Children’s Privacy</h2>
                    <p className="mt-2 pl-6">Our platform is not intended for users under the age of 13.</p>
                </section>

                <section>
                    <h2 className="text-lg font-semibold text-secondary">8. Changes to this Policy</h2>
                    <p className="mt-2 pl-6">We may update this policy periodically. We will notify users via our website or email.</p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
