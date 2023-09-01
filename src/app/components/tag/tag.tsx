import { cn } from "@/util/cn";

type TagProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export default function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "rounded-xl bg-accent px-3 py-1 text-xs font-normal tracking-widest text-gray-700",
        `${className}`,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
