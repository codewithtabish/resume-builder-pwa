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
        <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">
                Total Resumes
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                12
              </h2>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">
                Downloads
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                48
              </h2>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">
                Average ATS
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                92%
              </h2>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-5">
              <p className="text-sm text-muted-foreground">
                Templates Used
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                8
              </h2>
            </CardContent>
          </Card>
        </div>

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
