import { BaseModal } from "./BaseModal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Loader2 } from "lucide-react";
import { useState } from "react";

interface WarningModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title: string;
  description: string;
  warningMessage: string;
  consequences?: string[];
  requireAcknowledgment?: boolean;
  confirmLabel?: string;
  isProcessing?: boolean;
}

export const WarningModal = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
  warningMessage,
  consequences = [],
  requireAcknowledgment = true,
  confirmLabel = "Proceed Anyway",
  isProcessing = false,
}: WarningModalProps) => {
  const [acknowledged, setAcknowledged] = useState(false);

  const handleConfirm = async () => {
    if (requireAcknowledgment && !acknowledged) return;
    await onConfirm();
    onClose();
    setAcknowledged(false);
  };

  const handleClose = () => {
    setAcknowledged(false);
    onClose();
  };

  return (
    <BaseModal
      open={open}
      onClose={handleClose}
      title={title}
      description={description}
      size="md"
    >
      <div className="space-y-4">
        <div className="flex items-start gap-3 p-4 bg-warning/10 border border-warning/20 rounded-lg">
          <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
          <div className="space-y-2 flex-1">
            <p className="text-sm font-medium">{warningMessage}</p>
            {consequences.length > 0 && (
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                {consequences.map((consequence, index) => (
                  <li key={index}>{consequence}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {requireAcknowledgment && (
          <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
            <Checkbox
              id="acknowledge"
              checked={acknowledged}
              onCheckedChange={(checked) => setAcknowledged(checked === true)}
            />
            <Label
              htmlFor="acknowledge"
              className="text-sm cursor-pointer font-normal leading-relaxed"
            >
              I understand the risks and want to proceed with this action
            </Label>
          </div>
        )}

        <div className="flex gap-3 justify-end pt-4 border-t">
          <Button variant="outline" onClick={handleClose} disabled={isProcessing}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleConfirm}
            disabled={(requireAcknowledgment && !acknowledged) || isProcessing}
          >
            {isProcessing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {confirmLabel}
          </Button>
        </div>
      </div>
    </BaseModal>
  );
};
