"use client";

import Link from "next/link";
import {
  Plus,
  Search,
  FileText,
  Download,
  Pencil,
  Trash2,
  MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  const resumes = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      updatedAt: "2 days ago",
      ats: 92,
    },
    {
      id: "2",
      title: "Full Stack Engineer",
      updatedAt: "Yesterday",
      ats: 89,
    },
    {
      id: "3",
      title: "Software Engineer",
      updatedAt: "5 days ago",
      ats: 95,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-6">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              My Resumes
            </h1>

            <p className="text-muted-foreground mt-2">
              Create, manage and download your professional resumes.
            </p>
          </div>

          <Button asChild size="lg">
            <Link href="/resume/create">
              <Plus className="mr-2 h-4 w-4" />
              Create Resume
            </Link>
          </Button>
        </div>

        {/* Stats */}
       ```tsx
{/* Resume Card Design */}

<Card className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
  <CardContent className="p-0">

    {/* Fake Resume Preview */}
    <div className="h-52 border-b bg-muted/40 p-4">
<div className="mx-auto h-full max-w-40 rounded-lg border bg-background p-3 shadow-sm">

        <div className="mb-3 h-3 w-20 rounded bg-primary/20" />

        <div className="space-y-2">
          <div className="h-2 rounded bg-muted" />
          <div className="h-2 rounded bg-muted" />
          <div className="h-2 w-3/4 rounded bg-muted" />
        </div>

        <div className="mt-4 space-y-2">
          <div className="h-2 rounded bg-muted" />
          <div className="h-2 rounded bg-muted" />
        </div>
      </div>
    </div>

    <div className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">
          Senior Frontend Developer
        </h3>

        <Badge>
          ATS 94%
        </Badge>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">
        Updated 2 hours ago
      </p>

      <div className="mt-5 flex gap-2">
        <Button className="flex-1">
          Edit
        </Button>

        <Button variant="outline">
          Download
        </Button>
      </div>
    </div>

  </CardContent>
</Card>
```


        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

          <Input
            placeholder="Search resumes..."
            className="pl-10 h-12"
          />
        </div>

        {/* Resume Grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resumes.map((resume) => (
            <Card
              key={resume.id}
              className="transition-all hover:shadow-lg"
            >
              <CardContent className="p-5">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-3">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {resume.title}
                      </h3>

                      <p className="text-sm text-muted-foreground">
                        Updated {resume.updatedAt}
                      </p>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        Edit
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        Download
                      </DropdownMenuItem>

                      <DropdownMenuItem className="text-red-500">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <div className="mb-5">
                  <p className="text-sm text-muted-foreground">
                    ATS Score
                  </p>

                  <p className="text-xl font-bold text-primary">
                    {resume.ats}%
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button
                    className="flex-1"
                    variant="default"
                  >
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                  >
                    <Download className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Floating Button */}
        <Button
          size="lg"
          className="
            fixed
            bottom-24
            right-5
            rounded-full
            shadow-xl
            md:hidden
          "
        >
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </main>
  );
}
