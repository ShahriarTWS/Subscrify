import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';

const AccountSettings = () => {
    const { user } = use(AuthContext);

    if (!user) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner text-primary loading-lg"></span>
            </div>
        );
    }


    return (
        <div className=' items-center my-20'>
            <title>Subscrify || Account Settings</title>
            <div className="max-w-3xl mx-auto card card-body bg-gray-100">
                <h2 className="text-3xl font-semibold mb-6">Account Overview</h2>
                <div className="space-y-4">
                    <div className="p-4 border rounded bg-base-100">
                        <p className="text-lg font-medium text-gray-700">Welcome back, <span className="text-primary">{user?.displayName}</span>!</p>
                        <p className="text-sm text-gray-500 mt-1">Here’s a quick summary of your account info.</p>
                    </div>
                    <div className="p-4 border rounded bg-base-100 space-y-1">
                        <p><strong>Email:</strong> {user?.email}</p>
                        <p><strong>Account Created:</strong> {user?.metadata?.creationTime}</p>
                        <p><strong>Last Sign In:</strong> {user?.metadata?.lastSignInTime}</p>
                    </div>
                    <div className="p-4 border rounded bg-base-100">
                        <p className="text-gray-600">Need to update your info?</p>
                        <button className="btn btn-sm btn-primary mt-2" onClick={() => window.location.href = '/auth/profile'}>Go to Profile Settings</button>
                    </div>
                    <div className="p-4 border rounded bg-base-100">
                        <p className="text-gray-600">Need to reset your password?</p>
                        <Link to={'/auth/forget-password'} className='btn btn-error text-white mt-2'>Forget Password</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;
