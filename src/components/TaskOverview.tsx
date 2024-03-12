import styles from "./TaskOverview.module.css";

interface TaskOverviewProps {
  tasksCount: number;
  concludedTasksCount: number;
}

export function TaskOverview({
  tasksCount,
  concludedTasksCount,
}: TaskOverviewProps) {
  return (
    <div className={styles.taskOverview}>
      <div>
        <p>Tarefas criadas </p>
        <span className={styles.taskCount}>{tasksCount}</span>
      </div>
      <div>
        <p>Concluídas</p>
        <span className={styles.taskCount}>
          {concludedTasksCount > 0
            ? `${concludedTasksCount} de ${tasksCount}`
            : "0"}
        </span>
      </div>
    </div>
  );
}
