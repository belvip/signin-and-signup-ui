import { useState, useEffect } from 'react';
import { Form, Link, useActionData, useNavigation } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import imageSigning from '../assets/images/image-signin.jpg';
import logo from '../assets/images/logo-removebg-preview.png';
import { FcGoogle } from "react-icons/fc";
import toast from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const actionData = useActionData();
    const navigation = useNavigation();

    const isFormValid = email.trim() !== '' && password.trim() !== '';
    const isSubmitting = navigation.state === 'submitting';

    useEffect(() => {
        if (actionData?.success) {
        toast.success('Connexion réussie !');
        } else if (actionData?.error) {
        toast.error(actionData.error);
        }
    }, [actionData]);

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left Container */}
        <div className="bg-white flex flex-col justify-center p-6 sm:px-8 md:px-12">
            <img 
            src={logo} 
            alt="Company logo" 
            className="absolute w-[150px] h-[58px] mb-8 left-24 top-[145px]"
            />

            <div className="max-w-md w-full mx-auto mt-12">
            <h1 className='font-bold text-4xl mb-1'>Signin</h1>
            <h2 className='font-bold mt-2'>Welcome back!</h2>
            <p className="mt-2">Log in to manage your services, deals, and technical opportunities</p>
            
            <div className='mt-4'>
                <span className='text-gray-500'>Don't have an account? </span>
                <Link to='/signup'>
                <span className='font-semibold underline'>Create now</span>
                </Link>
            </div>

            <Form method='post' className='mt-8 space-y-5'>
                <FormInput 
                type='email' 
                label='E-mail' 
                name='email' 
                placeholder="example@gmail.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-bgInput"
                labelClassName="text-base text-[#718096] mb-1 block"
                />

                <FormInput 
                type='password' 
                label='Password' 
                name='password' 
                placeholder="@#*%" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-bgInput"
                labelClassName="text-base text-[#718096] mb-1 block"
                />

                <SubmitBtn text='Sign in' disabled={!isFormValid || isSubmitting} />

                <p className="text-sm text-right mt-2">
                <Link className="underline hover:text-black" to="/forgot-password">
                    Forgot Password?
                </Link>
                </p>

                <div className="mt-8">
                <div className="flex items-center gap-4">
                    <div className="flex-grow h-px bg-gray-300" />
                    <p className="text-sm font-semibold text-gray-500">OR</p>
                    <div className="flex-grow h-px bg-gray-300" />
                </div>

                <Link 
                    className="mt-5 h-10 border border-gray-300 bg-white 
                    hover:bg-gray-100 rounded-full flex items-center justify-center 
                    relative w-full"
                >
                    <span className="absolute left-4">
                    <FcGoogle className="text-2xl" />
                    </span>
                    <span className="text-[16px] text-black font-medium text-center">
                    Continue with Google
                    </span>
                </Link>
                </div>
            </Form>
            </div>
        </div>

        {/* Right Container */}
        <div className="h-64 md:h-auto">
            <img 
            src={imageSigning} 
            alt="User Sign-in Illustration" 
            className="w-full h-full object-cover" 
            />
        </div>
        </section>
    );
};

export default Login;
