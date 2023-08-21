import { cn } from "@/app/util/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded bg-slate-900 px-6 py-3 text-center font-medium text-gray-100",
        `${className}`,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
