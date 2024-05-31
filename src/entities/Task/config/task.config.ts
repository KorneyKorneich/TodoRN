export interface TaskConfig {
  id: string;
  title: string;
  description?: string;
}

export interface TaskProps {
  task: TaskConfig;
}
