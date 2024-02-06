import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  variant?: "default" | "success";
  value: number;
  size?: "sm" | "default";
}

const colorByVariant = {
  default: "text-sky-700",
  success: "text-emerald-700",
};
const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
};

export const CourseProgress = ({
  variant,
  value,
  size,
}: CourseProgressProps) => {
  return (
    <div>
      <Progress className="h-2" value={value} variant={variant} />
      <p
        className={cn(
          "font-medium mt-2 text-sky-700",
          colorByVariant["default" || variant],
          sizeByVariant["default" || size]
        )}
      >
        {Math.round(value)}% completed
      </p>
    </div>
  );
};
