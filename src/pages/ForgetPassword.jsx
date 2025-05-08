import React, { use, useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const ForgetPassword = () => {
    const { resetPassword } = use(AuthContext);
    const location = useLocation();
    const passedEmail = location.state?.email || '';
    const [email, setEmail] = useState(passedEmail);

    const handleReset = async (e) => {
        e.preventDefault();
        if (!email) {
            Swal.fire('Please enter your email address.');
            return;
        }

        try {
            await resetPassword(email);
            Swal.fire({
                icon: 'success',
                title: 'Reset email sent!',
                text: 'Check your inbox to reset your password.',
                timer: 2000,
                showConfirmButton: false,
            });
            setTimeout(() => {
                window.open('https://mail.google.com', '_blank');
            }, 2000);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Failed to send reset email',
                text: error.message,
            });
        }
    };

    return (
        <div className="flex items-center justify-center h-[60vh]">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h2>
                <form onSubmit={handleReset} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input input-bordered w-full"
                        required
                    />
                    <button type="submit" className="btn btn-primary w-full">
                        Send Reset Link
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
