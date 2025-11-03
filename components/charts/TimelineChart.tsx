import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

interface Milestone {
  name: string;
  date: string;
  status: 'completed' | 'in_progress' | 'delayed';
}

interface TimelineChartProps {
  milestones: Milestone[];
}

export const TimelineChart = ({ milestones }: TimelineChartProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case 'in_progress':
        return <Clock className="h-5 w-5 text-warning" />;
      case 'delayed':
        return <AlertCircle className="h-5 w-5 text-destructive" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success/10 text-success border-success/20';
      case 'in_progress':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'delayed':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return '';
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold">Milestone Timeline</h3>
          <p className="text-sm text-muted-foreground">Key project milestones</p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          
          {/* Milestones */}
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-start gap-4 pl-4">
                <div className="relative z-10 flex-shrink-0 bg-background p-1">
                  {getStatusIcon(milestone.status)}
                </div>
                <div className="flex-1 pt-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium">{milestone.name}</span>
                    <Badge variant="outline" className={getStatusColor(milestone.status)}>
                      {milestone.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{milestone.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
