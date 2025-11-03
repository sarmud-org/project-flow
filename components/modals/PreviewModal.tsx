import { useEffect } from "react";
import { BaseModal } from "./BaseModal";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download, ExternalLink } from "lucide-react";

interface PreviewModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  onPrevious?: () => void;
  onNext?: () => void;
  onDownload?: () => void;
  onOpenExternal?: () => void;
  showNavigation?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const PreviewModal = ({
  open,
  onClose,
  title,
  children,
  onPrevious,
  onNext,
  onDownload,
  onOpenExternal,
  showNavigation = false,
  size = "xl",
}: PreviewModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;

      if (e.key === "ArrowLeft" && onPrevious) {
        e.preventDefault();
        onPrevious();
      } else if (e.key === "ArrowRight" && onNext) {
        e.preventDefault();
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onPrevious, onNext]);

  return (
    <BaseModal open={open} onClose={onClose} title={title} size={size}>
      <div className="space-y-4">
        <div className="relative bg-muted/30 rounded-lg overflow-hidden min-h-[400px] max-h-[600px] flex items-center justify-center">
          {children}
          
          {showNavigation && (
            <>
              {onPrevious && (
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                  onClick={onPrevious}
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
              )}
              {onNext && (
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                  onClick={onNext}
                  aria-label="Next"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              )}
            </>
          )}
        </div>

        <div className="flex gap-2 justify-end pt-4 border-t">
          {onDownload && (
            <Button variant="outline" onClick={onDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          )}
          {onOpenExternal && (
            <Button variant="outline" onClick={onOpenExternal}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Open
            </Button>
          )}
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </BaseModal>
  );
};
