type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="rounded bg-slate-900 px-6 py-3 text-center font-medium text-gray-100"
      {...props}
    >
      {children}
    </button>
  );
}
