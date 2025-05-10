/**
 * 
 * @returns FormInput component
 * A reusable input field component for forms with a label
 * 
 */

const FormInput = ({label, name, type, defaultValue, size}) => {
    return (
        <div className="form-control">
            {/* Label Field */}
            <label htmlFor={name} className="label">
                {/* Display the label text and ensure it's capitalize */}
                <span className="label-text capitalize">{label}</span>
            </label>

            {/* Input Field */}
            <input 
                type={type} 
                name={name}
                defaultValue={defaultValue}
                className={`input input-bordered ${size}`}
            />
        </div>
    )
}

export default FormInput