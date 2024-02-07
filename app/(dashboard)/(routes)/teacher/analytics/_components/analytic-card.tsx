import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/lib/format";

interface AnalyticCardprops {
  value: number;
  label: string;
  shouldFormat?: boolean;
  customClass?: string;
}

export const AnalyticCard = ({
  value,
  label,
  shouldFormat,
  customClass
}: AnalyticCardprops) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${customClass}`}>
          {shouldFormat ? formatPrice(value) : value}
        </div>
      </CardContent>
    </Card>
  );
};
