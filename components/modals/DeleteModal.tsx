import { useState } from "react";
import { BaseModal } from "./BaseModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface DeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
  title: string;
  description: string;
  itemName: string;
  consequences?: string[];
  requireConfirmation?: boolean;
  confirmationText?: string;
  isDeleting?: boolean;
  showUndo?: boolean;
}

export const DeleteModal = ({
  open,
  onClose,
  onConfirm,
  title,
  description,
  itemName,
  consequences = [],
  requireConfirmation = true,
  confirmationText = "DELETE",
  isDeleting = false,
  showUndo = false,
}: DeleteModalProps) => {
  const [confirmInput, setConfirmInput] = useState("");
  const isConfirmed = !requireConfirmation || confirmInput === confirmationText;

  const handleConfirm = async () => {
    if (!isConfirmed) return;

    await onConfirm();

    if (showUndo) {
      toast("Item deleted", {
        description: "You can undo this action within 10 seconds",
        action: (
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              toast("Deletion cancelled", {
                description: `${itemName} has been restored`,
              });
            }}
          >
            Undo
          </Button>
        ),
      });
    }

    onClose();
    setConfirmInput("");
  };

  const handleClose = () => {
    setConfirmInput("");
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
        <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          <div className="space-y-2 flex-1">
            <p className="text-sm font-medium text-destructive">
              This action cannot be undone
            </p>
            {consequences.length > 0 && (
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                {consequences.map((consequence, index) => (
                  <li key={index}>{consequence}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {requireConfirmation && (
          <div className="space-y-2">
            <Label htmlFor="confirm-input">
              Type{" "}
              <span className="font-mono font-semibold">
                {confirmationText}
              </span>{" "}
              to confirm
            </Label>
            <Input
              id="confirm-input"
              value={confirmInput}
              onChange={(e) => setConfirmInput(e.target.value)}
              placeholder={confirmationText}
              autoComplete="off"
              autoFocus
            />
          </div>
        )}

        <div className="flex gap-3 justify-end pt-4 border-t">
          <Button variant="outline" onClick={handleClose} disabled={isDeleting}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleConfirm}
            disabled={!isConfirmed || isDeleting}
          >
            {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Delete {itemName}
          </Button>
        </div>
      </div>
    </BaseModal>
  );
};
