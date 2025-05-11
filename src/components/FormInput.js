import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const FormInput = ({ 
  label, 
  name, 
  type, 
  placeholder, 
  className, 
  labelClassName,
  value,
  onChange
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-control w-full max-w-md">
      <label htmlFor={name} className={labelClassName}>
        {label}
      </label>

      <div className="relative w-full">
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full h-10 border border-[#CBD5E0] shadow-inner rounded-xl px-4 pr-14 ${className}`}
        />

        {type === 'password' && (
          <div className="absolute inset-y-0 right-3 flex items-center">
            <div className="h-9 border-l border-gray-300 mr-2"></div>
            <button
              type="button"
              className="p-1"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-400 text-xl" />
              ) : (
                <FaEye className="text-gray-400 text-xl" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;
