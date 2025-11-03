import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from "@/components/ui/card";

interface ProgressChartProps {
  data: { phase: string; progress: number }[];
}

export const ProgressChart = ({ data }: ProgressChartProps) => {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Phase Progress</h3>
          <p className="text-sm text-muted-foreground">Completion by phase</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis type="number" domain={[0, 100]} className="text-xs" />
            <YAxis dataKey="phase" type="category" className="text-xs" width={120} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
              formatter={(value: number) => `${value}%`}
            />
            <Bar dataKey="progress" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
