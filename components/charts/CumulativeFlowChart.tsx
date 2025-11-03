import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card } from "@/components/ui/card";

interface CumulativeFlowChartProps {
  data: { date: string; backlog: number; inProgress: number; done: number }[];
}

export const CumulativeFlowChart = ({ data }: CumulativeFlowChartProps) => {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Cumulative Flow</h3>
          <p className="text-sm text-muted-foreground">Task distribution over time</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis dataKey="date" className="text-xs" />
            <YAxis className="text-xs" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Legend />
            <Area type="monotone" dataKey="done" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} name="Done" />
            <Area type="monotone" dataKey="inProgress" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="In Progress" />
            <Area type="monotone" dataKey="backlog" stackId="1" stroke="#64748b" fill="#64748b" fillOpacity={0.6} name="Backlog" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
