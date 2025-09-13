export interface Task {
  id: string;
  clientName: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  createdAt: string;
}

export interface CreateTaskData {
  clientName: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
}

export interface UpdateTaskData extends Partial<CreateTaskData> {
  id: string;
}

export interface TaskFormData {
  clientName: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
}
