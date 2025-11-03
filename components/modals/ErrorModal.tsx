import { BaseModal } from "./BaseModal";
import { Button } from "@/components/ui/button";
import { AlertCircle, Copy, Mail, RefreshCw } from "lucide-react";
import { toast } from "sonner";

interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  errorMessage: string;
  errorCode?: string;
  errorId?: string;
  technicalDetails?: string;
  onRetry?: () => void;
  showSupport?: boolean;
}

export const ErrorModal = ({
  open,
  onClose,
  title = "An Error Occurred",
  errorMessage,
  errorCode,
  errorId,
  technicalDetails,
  onRetry,
  showSupport = true,
}: ErrorModalProps) => {
  const copyErrorDetails = () => {
    const details = `
Error Code: ${errorCode || "N/A"}
Error ID: ${errorId || "N/A"}
Message: ${errorMessage}
${technicalDetails ? `Technical Details: ${technicalDetails}` : ""}
    `.trim();

    navigator.clipboard.writeText(details);
    toast("Error details copied", {
      description: "Error information has been copied to your clipboard",
    });
  };

  return (
    <BaseModal open={open} onClose={onClose} title={title} size="md">
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="space-y-2 flex-1">
            <p className="text-sm font-medium">{errorMessage}</p>
            {errorCode && (
              <p className="text-xs text-muted-foreground">
                Error Code: {errorCode}
              </p>
            )}
            {errorId && (
              <p className="text-xs text-muted-foreground font-mono">
                Reference ID: {errorId}
              </p>
            )}
          </div>
        </div>

        {technicalDetails && (
          <div className="p-3 bg-muted rounded-lg">
            <p className="text-xs font-mono text-muted-foreground whitespace-pre-wrap">
              {technicalDetails}
            </p>
          </div>
        )}

        <div className="space-y-2 p-3 bg-muted/50 rounded-lg">
          <p className="text-sm font-medium">What you can do:</p>
          <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
            <li>Try the operation again</li>
            <li>Check your internet connection</li>
            <li>Clear your browser cache and reload</li>
            {showSupport && <li>Contact support if the problem persists</li>}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 justify-end pt-4 border-t">
          {(errorCode || errorId) && (
            <Button variant="outline" size="sm" onClick={copyErrorDetails}>
              <Copy className="mr-2 h-4 w-4" />
              Copy Details
            </Button>
          )}
          {showSupport && (
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:support@example.com">
                <Mail className="mr-2 h-4 w-4" />
                Contact Support
              </a>
            </Button>
          )}
          {onRetry && (
            <Button variant="outline" onClick={onRetry}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          )}
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </BaseModal>
  );
};
