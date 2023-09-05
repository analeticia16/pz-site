type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="rounded bg-gradient-to-r from-primary-900 to-primary-950 px-6 py-3 text-center font-medium text-gray-100 hover:bg-gradient-to-r hover:from-primary-700 hover:to-primary-900"
      {...props}
    >
      {children}
    </button>
  );
}
