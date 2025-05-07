import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {


    const { createUser, setUser, updateUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log({ name, photoURL, email, password });
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                setUser(user);
                navigate('/');

                updateUser({ displayName: name, photoURL: photoURL }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photoURL });
                    navigate('/');
                }).catch((error) => {
                    console.log(error);
                    setUser(user)
                });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            })
    }

    return (
        <div className='flex justify-center min-h-[80vh] items-center'>
            <div className="card bg-white w-full max-w-md shrink-0 shadow-2xl">
                <h2 className='font-semibold text-2xl py-5 text-center'>Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* name  */}
                        <label className="label">Your Name</label>
                        <input type="text"
                            name='name'
                            className="input w-full"
                            placeholder="Enter your name"
                            required
                        />

                        {/* photo url  */}
                        <label className="label">Photo URL</label>
                        <input type="text"
                            name='photoURL'
                            className="input w-full"
                            placeholder="Enter your photo URL"
                            required
                        />

                        {/* email  */}
                        <label className="label">Email</label>
                        <input type="email"
                            name='email'
                            className="input w-full"
                            placeholder="Enter your email address"
                            required
                        />

                        {/* password  */}
                        <label className="label">Password</label>
                        <label className="input validator w-full">
                            <input
                                type="password"
                                required
                                name='password'
                                placeholder="Enter your password"
                                minLength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            />
                        </label>
                        <p className="validator-hint hidden">
                            Must be more than 6 characters, including
                            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                        </p>

                        {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                        <button type='submit' className="btn btn-primary mt-4">Register</button>
                    </fieldset>
                </form>
                {/* Google */}
                <div className=' px-6'>
                    <button className="btn bg-white text-black border-[#e5e5e5] w-full">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Continue with Google
                    </button>
                </div>
                <p className='font-medium py-3 text-center'>Already Have An Account ? <Link className='text-red-500 hover:underline' to='/auth/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;