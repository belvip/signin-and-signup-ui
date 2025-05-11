import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const FormInput = ({ 
  label, 
  name, 
  type, 
  placeholder, 
  size, 
  className, 
  labelClassName,
  value,
  onChange
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-control relative">
      <label htmlFor={name} className={`label ${labelClassName}`}>
        <span className="label-text">{label}</span>
      </label>
      
      <div className="relative">
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          name={name}
          placeholder={placeholder}
          value={value}               
          onChange={onChange}         
          className={`input input-bordered ${size} ${className} mr-0`} 
        />
        
        {type === 'password' && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <div className="h-6 border-l border-gray-300 mr-3"></div>
            <button
              type="button"
              className="flex items-center justify-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-400 text-2xl" />
              ) : (
                <FaEye className="text-gray-400 text-2xl" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormInput;
