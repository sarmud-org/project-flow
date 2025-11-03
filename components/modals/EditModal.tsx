import { ReactNode, FormEvent } from "react";
import { BaseModal } from "./BaseModal";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface EditModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (e: FormEvent) => void | Promise<void>;
  title: string;
  description?: string;
  children: ReactNode;
  submitLabel?: string;
  isSubmitting?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const EditModal = ({
  open,
  onClose,
  onSubmit,
  title,
  description,
  children,
  submitLabel = "Save Changes",
  isSubmitting = false,
  size = "md",
}: EditModalProps) => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onSubmit(e);
  };

  return (
    <BaseModal
      open={open}
      onClose={onClose}
      title={title}
      description={description}
      size={size}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">{children}</div>
        <div className="flex gap-3 justify-end pt-4 border-t">
          <Button type="button" variant="outline" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {submitLabel}
          </Button>
        </div>
      </form>
    </BaseModal>
  );
};
