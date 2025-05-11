
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
      
      <div className="relative w-[408px]">
  <input
    type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`input input-bordered w-[408PX] h-[40px] border border-[#CBD5E0] shadow-inner rounded-[12px] bg-bgInput pr-14 ${className}`}
  />

  {type === 'password' && (
    <div className="absolute inset-y-0 right-3 flex items-center">
      {/* Barre verticale dans le champ input */}
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
