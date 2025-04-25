import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import clsx from "clsx";

const InputField = ({ label, type, placeholder, value, onChange }) => {
  // hooks
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="mb-4 relative">
      {/* label */}
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700 font-kumbh">
          {label}
        </label>
      )}

      {/* input field */}
      <input
        type={inputType}
        className={clsx(
          "w-full p-2 border rounded-md outline-none font-kumbh focus:ring-2 focus:ring-blue-400",
          { "pr-10": isPassword } // only add padding-right if password field
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-9 text-gray-500"
        >
          {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      )}
    </div>
  );
};

export default InputField;
