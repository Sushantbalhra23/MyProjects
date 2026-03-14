"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, MoreHorizontal, GripVertical } from "lucide-react"
import { cn } from "@/lib/utils"

const columns = [
  {
    id: "backlog",
    title: "Backlog",
    color: "bg-muted",
    tasks: [
      { id: "1", title: "Research AI/ML career paths", priority: "medium", tags: ["Career"] },
      { id: "2", title: "Update LinkedIn profile", priority: "low", tags: ["Networking"] },
      { id: "3", title: "Read 'Atomic Habits' book", priority: "low", tags: ["Personal"] },
    ],
  },
  {
    id: "todo",
    title: "To Do",
    color: "bg-chart-2/20",
    tasks: [
      { id: "4", title: "Complete React course module 5", priority: "high", tags: ["Learning"] },
      { id: "5", title: "Apply to 3 internships", priority: "high", tags: ["Career"] },
      { id: "6", title: "Practice coding problems", priority: "medium", tags: ["Skills"] },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    color: "bg-primary/20",
    tasks: [
      { id: "7", title: "Build portfolio website", priority: "high", tags: ["Project"] },
      { id: "8", title: "Data Structures assignment", priority: "high", tags: ["Academic"] },
    ],
  },
  {
    id: "review",
    title: "In Review",
    color: "bg-chart-4/20",
    tasks: [
      { id: "9", title: "Resume draft v2", priority: "medium", tags: ["Career"] },
    ],
  },
  {
    id: "done",
    title: "Completed",
    color: "bg-chart-1/20",
    tasks: [
      { id: "10", title: "JavaScript fundamentals course", priority: "high", tags: ["Learning"] },
      { id: "11", title: "Career counseling session", priority: "medium", tags: ["Career"] },
      { id: "12", title: "Set up GitHub profile", priority: "low", tags: ["Setup"] },
    ],
  },
]

const priorityColors = {
  high: "bg-destructive/10 text-destructive border-destructive/20",
  medium: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  low: "bg-chart-1/10 text-chart-1 border-chart-1/20",
}

export default function KanbanPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Kanban Goals</h1>
          <p className="text-sm text-muted-foreground">
            Track your career and learning goals visually
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Goal
        </Button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((column) => (
          <div key={column.id} className="flex-shrink-0 w-72">
            <Card className="border-border/50">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={cn("h-2 w-2 rounded-full", column.color.replace("/20", ""))} />
                    <CardTitle className="text-sm font-medium">
                      {column.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {column.tasks.length}
                    </Badge>
                  </div>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                {column.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="group rounded-lg border border-border bg-card p-3 shadow-sm transition-shadow hover:shadow-md cursor-grab"
                  >
                    <div className="flex items-start gap-2">
                      <GripVertical className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                      <div className="flex-1 space-y-2">
                        <p className="text-sm font-medium text-card-foreground">
                          {task.title}
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className={cn("text-xs", priorityColors[task.priority as keyof typeof priorityColors])}
                          >
                            {task.priority}
                          </Badge>
                          {task.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
                >
                  <Plus className="h-4 w-4" />
                  Add task
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
