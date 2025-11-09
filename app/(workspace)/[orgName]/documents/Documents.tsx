import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FileText,
  Folder,
  Upload,
  Search,
  MoreVertical,
  Download,
  Share2,
} from "lucide-react";

const folders = [
  { id: 1, name: "Design Files", files: 24, updated: "2 days ago" },
  { id: 2, name: "Documentation", files: 12, updated: "1 week ago" },
  { id: 3, name: "Meeting Notes", files: 8, updated: "Yesterday" },
];

const files = [
  { id: 1, name: "Homepage Mockup v3.fig", size: "2.4 MB", updated: "Today" },
  {
    id: 2,
    name: "Project Requirements.pdf",
    size: "856 KB",
    updated: "Yesterday",
  },
  {
    id: 3,
    name: "Brand Guidelines.pdf",
    size: "1.2 MB",
    updated: "3 days ago",
  },
  {
    id: 4,
    name: "User Research Findings.docx",
    size: "456 KB",
    updated: "1 week ago",
  },
];

export default function DocumentComponent() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>
          <p className="text-muted-foreground mt-1">
            Organize and share project files
          </p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Files
        </Button>
      </div>

      {/* Search */}
      <div className="flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search documents..." className="pl-9" />
        </div>
        <Button variant="outline">New Folder</Button>
      </div>

      {/* Folders */}
      <div>
        <h2 className="text-sm font-semibold mb-3 text-muted-foreground">
          FOLDERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {folders.map((folder) => (
            <Card
              key={folder.id}
              className="hover:shadow-md transition-shadow cursor-pointer"
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <Folder className="h-10 w-10 text-primary" />
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="font-semibold mt-4">{folder.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {folder.files} files · Updated {folder.updated}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Files */}
      <div>
        <h2 className="text-sm font-semibold mb-3 text-muted-foreground">
          RECENT FILES
        </h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center gap-4 p-4 hover:bg-secondary/50 transition-colors cursor-pointer group"
                >
                  <FileText className="h-8 w-8 text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {file.size} · Updated {file.updated}
                    </p>
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
