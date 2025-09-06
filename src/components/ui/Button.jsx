function Button({
color = "primary",
  text = "baseWhite",
  children,
  className,
  type = "submit",
  ...props
}) {
  return (
    <button
      className={`w-full px-3 py-2 rounded-2xl border bg-${color} text-${text} ${className} cursor-pointer`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
