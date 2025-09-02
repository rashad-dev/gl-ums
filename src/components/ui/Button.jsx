function Button({
  color,
  text,
  children,
  className,
  type = "submit",
  ...props
}) {
  return (
    <button
      className={`px-3 py-2 rounded-2xl border bg-${color} text-${text} ${className} cursor-pointer`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
