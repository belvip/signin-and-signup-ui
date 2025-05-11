import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text, className = "", disabled = false }) => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <button 
        type='submit' 
        disabled={isSubmitting || disabled}
        className={`w-full h-10 flex justify-center items-center px-6 gap-2 
                    bg-black text-white font-medium hover:bg-gray-700 
                    rounded-full transition-colors 
                    disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        >
        {isSubmitting ? (
            <>
            <span className="inline-block w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
            Sending...
            </>
        ) : (
            text || 'Submit'
        )}
        </button>
    );
};

export default SubmitBtn;
