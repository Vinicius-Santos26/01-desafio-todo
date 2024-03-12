import { Check, Trash } from "@phosphor-icons/react";
import styles from "./Task.module.css";

export interface TaskType {
  id: number;
  description: string;
  completed: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (taskId: number) => void;
  onToggleCompletedTask: (taskId: number) => void;
}

export function Task({ task, onDeleteTask, onToggleCompletedTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  function handleToggleCompletedTask(){
    onToggleCompletedTask(task.id)
  }

  return (
    <div className={`${styles.task} ${task.completed && styles.taskCompleted}`}>
      <label htmlFor="checkbox" onClick={handleToggleCompletedTask}>
        <input type="checkbox"/>
        <span className={styles.checkbox}>
          {task.completed && <Check size={12} />}
        </span>
      </label>
      <p>{task.description}</p>
      <button onClick={handleDeleteTask}>
        <Trash size={18} />
      </button>
    </div>
  );
}
