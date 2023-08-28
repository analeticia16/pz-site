import { cn } from "@/util/cn";

type TagProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export default function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "rounded bg-gray-50 px-4 py-2 text-sm font-semibold tracking-widest text-stone-700",
        `${className}`,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
