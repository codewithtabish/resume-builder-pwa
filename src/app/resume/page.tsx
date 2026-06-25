"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Plus,
  Search,
  FileText,
  Download,
  Pencil,
  Trash2,
  MoreHorizontal,
  Calendar,
  TrendingUp,
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  const resumes = [
    {
      id: "1",
      title: "Senior Frontend Developer",
      updatedAt: "2 hours ago",
      ats: 94,
      lastUsed: "Applied to Google",
    },
    {
      id: "2",
      title: "Full Stack Engineer",
      updatedAt: "Yesterday",
      ats: 89,
      lastUsed: "Applied to Stripe",
    },
    {
      id: "3",
      title: "Software Engineer",
      updatedAt: "5 days ago",
      ats: 95,
      lastUsed: "",
    },
  ];

  const filteredResumes = resumes
    .filter(r => r.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "ats") return b.ats - a.ats;
      if (sortBy === "oldest") return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
      return 0; // recent
    });

  const totalResumes = resumes.length;
  const avgATS = Math.round(resumes.reduce((sum, r) => sum + r.ats, 0) / totalResumes);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8">

        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">My Resumes</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Build • Optimize • Land your dream job
            </p>
          </div>

          <Button asChild size="lg" className="shadow-lg">
            <Link href="/resume/create">
              <Plus className="mr-2 h-5 w-5" />
              New Resume
            </Link>
          </Button>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold">{totalResumes}</p>
                <p className="text-sm text-muted-foreground">Total Resumes</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <TrendingUp className="h-8 w-8 text-emerald-500" />
              </div>
              <div>
                <p className="text-3xl font-bold text-emerald-600">{avgATS}%</p>
                <p className="text-sm text-muted-foreground">Average ATS Score</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <Calendar className="h-8 w-8 text-amber-500" />
              </div>
              <div>
                <p className="text-3xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Updated this week</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resumes..."
              className="pl-11 h-12 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-56 h-12">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="ats">Highest ATS Score</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Resume Grid */}
        {filteredResumes.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredResumes.map((resume) => (
              <Card 
                key={resume.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border/60"
              >
                <CardContent className="p-0">

                  {/* Resume Preview */}
                  <div className="relative h-56 bg-gradient-to-br from-muted/70 to-muted p-6 flex items-center justify-center overflow-hidden">
                    <div className="w-44 scale-90 group-hover:scale-95 transition-transform duration-500 bg-white shadow-md rounded-lg p-4 border">
                      <div className="h-3 w-16 bg-primary/20 rounded mb-4" />
                      <div className="space-y-2.5">
                        <div className="h-1.5 bg-muted-foreground/30 rounded w-3/4" />
                        <div className="h-1.5 bg-muted-foreground/30 rounded" />
                        <div className="h-1.5 bg-muted-foreground/30 rounded w-5/6" />
                      </div>
                      <div className="mt-6 pt-6 border-t space-y-2">
                        <div className="h-1 bg-muted-foreground/20 rounded" />
                        <div className="h-1 bg-muted-foreground/20 rounded w-4/5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-xl leading-tight line-clamp-2">
                          {resume.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Updated {resume.updatedAt}
                        </p>
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="opacity-70 hover:opacity-100">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem>Share</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-500 focus:text-red-500">
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    {/* ATS Score */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-muted-foreground">ATS Score</span>
                          <span className="font-semibold text-primary">{resume.ats}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-emerald-500 transition-all"
                            style={{ width: `${resume.ats}%` }}
                          />
                        </div>
                      </div>
                      <Badge variant={resume.ats >= 90 ? "default" : "secondary"} className="font-mono">
                        {resume.ats}%
                      </Badge>
                    </div>

                    {resume.lastUsed && (
                      <p className="text-xs text-emerald-600 mb-5">✓ Used for {resume.lastUsed}</p>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button asChild className="flex-1">
                        <Link href={`/resume/${resume.id}/edit`}>
                          <Pencil className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </Button>

                      <Button variant="outline" size="icon" title="Download PDF">
                        <Download className="h-4 w-4" />
                      </Button>

                      <Button variant="outline" size="icon" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <FileText className="mx-auto h-16 w-16 text-muted-foreground" />
            <h3 className="mt-6 text-2xl font-semibold">No resumes found</h3>
            <p className="text-muted-foreground mt-2">Create your first resume to get started</p>
            <Button asChild className="mt-6">
              <Link href="/resume/create">Create Your First Resume</Link>
            </Button>
          </div>
        )}

        {/* Mobile FAB */}
        <Button
          size="lg"
          className="fixed bottom-6 right-6 rounded-full shadow-2xl md:hidden h-14 w-14"
          asChild
        >
          <Link href="/resume/create">
            <Plus className="h-6 w-6" />
          </Link>
        </Button>
      </div>
    </main>
  );
}