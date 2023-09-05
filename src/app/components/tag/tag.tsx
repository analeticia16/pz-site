import { cn } from "@/util/cn";

type TagProps = React.LabelHTMLAttributes<HTMLLabelElement>;
export default function Tag({ className, children, ...props }: TagProps) {
  return (
    <span
      className={cn(
        "rounded-xl bg-accent-200 px-3 py-1 text-xs font-semibold tracking-widest text-accent-950",
        `${className}`,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
