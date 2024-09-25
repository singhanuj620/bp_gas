/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
const Button = ({ children, disabled = false, outline, onClick }) => {
  const { isDarkMode: darkMode } = useSelector((state) => state.darkMode);
  return (
    <div
      className={`${
        darkMode ? "text-black border-white" : "text-black border-black"
      } ${
        outline ? "" : darkMode ? "bg-yellow-400" : "bg-green-400"
      } p-2 rounded-lg ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } border-2 flex justify-center`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
