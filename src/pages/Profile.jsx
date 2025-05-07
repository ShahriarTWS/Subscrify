// import React, { useContext } from 'react';
// import { AuthContext } from '../provider/AuthProvider';
// import Footer from '../components/Footer/Footer';

// const Profile = () => {
//     const { user } = useContext(AuthContext);

//     // Show a loading or fallback UI while user is not available
//     if (!user) {
//         return (
//             <div className="min-h-[70vh] flex items-center justify-center">
//                 <p className="text-xl text-gray-600">Loading profile...</p>
//             </div>
//         );
//     }

//     return (
//         <div>
//             <div className="bg-gray-50 my-6 flex items-center justify-center min-h-[70vh]">
//                 <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl">
//                     <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Profile</h2>
//                     <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
//                         {/* Profile Picture */}
//                         <div className="flex-shrink-0">
//                             <img
//                                 src={user.photoURL}
//                                 alt="Profile"
//                                 className="w-80 rounded-full object-cover border-4 border-primary"
//                             />
//                         </div>

//                         {/* User Info */}
//                         <div className="flex-1 space-y-3 text-center md:text-left">
//                             <h3 className="text-3xl font-semibold text-gray-700">
//                                 {user.displayName}
//                             </h3>
//                             <p className="text-gray-600">
//                                 <strong>Email:</strong> {user.email}
//                             </p>
//                             {user.phoneNumber && (
//                                 <p className="text-gray-600">
//                                     <strong>Phone:</strong> {user.phoneNumber}
//                                 </p>
//                             )}
//                             <button className="btn btn-primary mt-4">
//                                 Update Profile
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };

// export default Profile;



import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Footer from '../components/Footer/Footer';
import Loading from './Loading';

const Profile = () => {
    const { user, updateUser, setUser } = useContext(AuthContext);
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    if (!user) {
        return (
            <Loading></Loading>
        );
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            await updateUser({ displayName: name, photoURL });
            setUser({ ...user, displayName: name, photoURL });
            setMessage('Profile updated successfully!');
            setEditMode(false);
        } catch (error) {
            console.error(error);
            setMessage('Failed to update profile.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="bg-gray-50 my-6 flex items-center justify-center min-h-[70vh]">
                <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-4xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">My Profile</h2>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                        <div className="flex-shrink-0">
                            <img
                                src={user.photoURL}
                                alt="Profile"
                                className="w-80 rounded-full object-cover border-4 border-primary"
                            />
                        </div>
                        <div className="flex-1 space-y-3 text-center md:text-left">
                            <h3 className="text-3xl font-semibold text-gray-700">
                                {user.displayName}
                            </h3>
                            <p className="text-gray-600">
                                <strong>Email:</strong> {user.email}
                            </p>
                            {user.phoneNumber && (
                                <p className="text-gray-600">
                                    <strong>Phone:</strong> {user.phoneNumber}
                                </p>
                            )}
                            <button
                                className="btn btn-primary mt-4"
                                onClick={() => setEditMode(!editMode)}
                            >
                                {editMode ? 'Cancel' : 'Update Profile'}
                            </button>

                            {editMode && (
                                <form onSubmit={handleUpdate} className="mt-6 space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter Name"
                                            className="input input-bordered w-full"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            value={photoURL}
                                            onChange={(e) => setPhotoURL(e.target.value)}
                                            placeholder="Enter Photo URL"
                                            className="input input-bordered w-full"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-success" disabled={loading}>
                                        {loading ? 'Updating...' : 'Save Changes'}
                                    </button>
                                    {message && <p className="text-sm mt-2">{message}</p>}
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

