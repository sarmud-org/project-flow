import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card } from "@/components/ui/card";

interface VelocityChartProps {
  data: { week: string; completed: number; committed: number }[];
}

export const VelocityChart = ({ data }: VelocityChartProps) => {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Velocity Trend</h3>
          <p className="text-sm text-muted-foreground">Weekly completion rate</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="week" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Legend />
            <Bar dataKey="committed" fill="hsl(var(--muted))" name="Committed" />
            <Bar dataKey="completed" fill="hsl(var(--primary))" name="Completed" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
