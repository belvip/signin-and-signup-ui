import { useState, useEffect} from 'react';
import { Form, Link, useActionData, useNavigation } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import imageSigning from '../assets/images/image-signin.jpg';
import logo from '../assets/images/logo-removebg-preview.png';
//import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


import toast from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const actionData = useActionData();
    const navigation = useNavigation();
    
    const isFormValid = email.trim() !== '' && password.trim() !== '';
    const isSubmitting = navigation.state === 'submitting';

    // Notification de succès/erreur
    useEffect(() => {
        if (actionData?.success) {
            toast.success('Connexion réussie !');
            // Redirection après succès 
            //window.location.href = '/'; 
        } else if (actionData?.error) {
            toast.error(actionData.error);
        }
    }, [actionData]);


    return (
        <section className="align-element grid grid-cols-1 md:grid-cols-2">
            <div className="bg-white h-[400px] md:h-[864px] order-1 md:order-none">
                <img 
                    src={logo} 
                    alt="Company logo" 
                    className="w-[150px] h-[58px] left-[14px] top-[90px]"
                />

                <div className="font-inter w-[350px] h-[168px] ml-12 mt-24">
                    <h1 className='font-inter font-bold text-4xl mt-1'>Signin</h1>
                    <h2 className='font-bold mt-2 font-raleway'>Welcome back!</h2>
                    <p>Log in to manage your services, deals, and technical opportunities</p>
                    <div className='mt-2'>
                        <span className='text-gray-500 font-raleway'>Don't have an account? </span>
                        <Link to='/signup'>
                            <span className='font-semibold underline font-inter'> Create now</span>
                        </Link>
                    </div>

                    <Form method='post' className='mt-10'>
                        <FormInput 
                            type='email' 
                            label='E-mail' 
                            name='email' 
                            placeholder="example@gmail.com" 
                            defaultValue={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // size="w-[08px] h-[40px] border border-[#CBD5E0] shadow-inner rounded-[12px]"
                            className="bg-bgInput mb-3"
                            labelClassName="font-inter text-[16px] leading-[20px] tracking-[-0.154px] text-[#718096] mb-[4px] block"
                        />

                        <FormInput 
                            type='password' 
                            label='Password' 
                            name='password' 
                            placeholder="@#*%" 
                            defaultValue={password}
                            onChange={(e) => setPassword(e.target.value)}
                            // size="w-[408px] h-[40px] border border-[#CBD5E0] shadow-inner rounded-[12px]"
                            className="bg-bgInput"
                            labelClassName="font-inter text-[16px] leading-[20px] tracking-[-0.154px] text-[#718096] mb-[4px] block"
                        />

                        <SubmitBtn text='Sign in' disabled={!isFormValid} />

                        <p className="relative left-[270px] top-[14px] text-sm text-slate-700 font-raleway font-semibold">
                            <Link className="underline hover:text-black" to="/forgot-password">
                                Forgot Password?
                            </Link>
                        </p>

                        <div className="w-[408px] h-[126px] left-[96px] top-[28px] mt-10">
                            <div className="flex items-center gap-4 my-6 w-full">
                                <div className="flex-grow h-px bg-gray-300"></div>
                                <p className="text-sm font-semibold text-gray-500">OR</p>
                                <div className="flex-grow h-px bg-gray-300"></div>
                            </div>

                            <Link 
                                className="w-[408px] mt-5 h-[40px] border border-[#CBD5E0] bg-white font-medium hover:bg-gray-300 
                                            rounded-full transition-colors relative flex items-center justify-center"
                                >
                                {/* Icône à gauche */}
                                <span className="absolute left-4">
                                    <FcGoogle className="text-2xl" />
                                </span>

                                {/* Texte centré */}
                                <span className="font-inter text-black text-[16px] text-center">
                                    Continue with Google
                                </span>
                            </Link>

                        </div>

                    </Form>
                </div>
            </div>

            <div className="h-[400px] md:h-[864px] bg-slate-200 order-2 md:order-none">
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
