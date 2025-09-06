const COLORS = {
  primary: "bg-primary text-white",
  secondary: "bg-black  text-white hover:bg-gray-300",
  baseWhite: "bg-white text-black hover:bg-baseBlack/90",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

function Button({
  color = "primary",
  children,
  className = "",
  type = "submit",
  ...props
}) {
  return (
    <button
      className={`w-full px-3 py-2 rounded-2xl cursor-pointer ${COLORS[color] || ""} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
