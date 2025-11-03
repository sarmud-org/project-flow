import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card } from "@/components/ui/card";

interface ResourceAllocationChartProps {
  data: { name: string; value: number }[];
}

const COLORS = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899'];

export const ResourceAllocationChart = ({ data }: ResourceAllocationChartProps) => {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Resource Allocation</h3>
          <p className="text-sm text-muted-foreground">Hours by team role</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => {
                const percentValue = typeof percent === 'number' ? percent : 0;
                return `${name} ${(percentValue * 100).toFixed(0)}%`;
              }}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
