import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BaseModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showClose?: boolean;
  className?: string;
}

export const BaseModal = ({
  open,
  onClose,
  title,
  description,
  children,
  size = "md",
  showClose = true,
  className = "",
}: BaseModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, onClose]);

  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full m-4",
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent 
        className={`${sizeClasses[size]} ${className}`}
        aria-labelledby="modal-title"
        aria-describedby={description ? "modal-description" : undefined}
      >
        <DialogHeader>
          <DialogTitle id="modal-title">{title}</DialogTitle>
          {description && (
            <DialogDescription id="modal-description">{description}</DialogDescription>
          )}
        </DialogHeader>
        {children}
        {showClose && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </DialogContent>
    </Dialog>
  );
};
