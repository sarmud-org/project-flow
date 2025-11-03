import { BaseModal } from "./BaseModal";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, X } from "lucide-react";

interface ProgressModalProps {
  open: boolean;
  onClose?: () => void;
  title: string;
  description?: string;
  progress: number;
  status: "uploading" | "processing" | "success" | "error";
  message?: string;
  onCancel?: () => void;
  showCancel?: boolean;
  allowClose?: boolean;
}

export const ProgressModal = ({
  open,
  onClose,
  title,
  description,
  progress,
  status,
  message,
  onCancel,
  showCancel = true,
  allowClose = false,
}: ProgressModalProps) => {
  const canClose = allowClose || status === "success" || status === "error";

  return (
    <BaseModal
      open={open}
      onClose={canClose && onClose ? onClose : () => {}}
      title={title}
      description={description}
      size="md"
      showClose={canClose}
    >
      <div className="space-y-6">
        {status === "uploading" || status === "processing" ? (
          <>
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  {message || "Processing..."}
                </span>
                <span className="font-medium">{progress}%</span>
              </div>
            </div>
            {showCancel && onCancel && (
              <div className="flex justify-end">
                <Button variant="outline" onClick={onCancel}>
                  <X className="mr-2 h-4 w-4" />
                  Cancel
                </Button>
              </div>
            )}
          </>
        ) : status === "success" ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-success/10 border border-success/20 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
              <div>
                <p className="text-sm font-medium">Completed successfully</p>
                {message && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-end">
              <Button onClick={onClose}>Done</Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <X className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Upload failed</p>
                {message && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-end gap-2">
              {onCancel && (
                <Button variant="outline" onClick={onCancel}>
                  Try Again
                </Button>
              )}
              <Button onClick={onClose}>Close</Button>
            </div>
          </div>
        )}
      </div>
    </BaseModal>
  );
};
