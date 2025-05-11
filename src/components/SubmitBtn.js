import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text, className = "", disabled = false }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <button 
            type='submit' 
            disabled={isSubmitting || disabled}
            className={`w-[408px] mt-5 h-[40px] flex flex-row justify-center items-center px-6 gap-2 
                        bg-black text-white font-medium hover:bg-gray-700 rounded-full transition-colors 
                        disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
            {isSubmitting ? (
                <>
                    <span className="inline-block w-6 h-6 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></span>
                    sending...
                </>
            ) : (
                text || 'submit'
            )}
        </button>
    );
};

export default SubmitBtn;
