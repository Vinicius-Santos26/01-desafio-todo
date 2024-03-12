import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, FormEvent, useState } from "react";

import { Header } from "./components/Header";
import { Task, TaskType } from "./components/Task";
import { TaskOverview } from "./components/TaskOverview";

import Clipboard from "./assets/clipboard.svg";

import styles from "./App.module.css";
import "./global.css";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [newTaskDescription, setNewTaskDescription] = useState<string>("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask: TaskType = {
      id: Date.now(),
      description: newTaskDescription,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setNewTaskDescription("");
  }

  function handleNewTaskDescriptionChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setNewTaskDescription(event.target.value);
  }

  function deleteTask(taskId: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== taskId);

    setTasks(tasksWithoutDeletedOne);
  }

  function toggleCompletedTask(taskId: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id != taskId) return task;
      return { ...task, completed: !task.completed };
    });

    setTasks(updatedTasks);
  }

  const areThereAnyTask = tasks.length > 0;
  const concludedTasksCounter = tasks.filter((task) => task.completed).length;
  const isNewTaskDescriptionEmpty = newTaskDescription.length === 0;

  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
          <input
            name="description"
            placeholder="Adicione uma nova tarefa"
            value={newTaskDescription}
            onChange={handleNewTaskDescriptionChange}
          />
          <button type="submit" disabled={isNewTaskDescriptionEmpty}>
            Criar <PlusCircle size={16} weight="bold" />
          </button>
        </form>
        <div className={styles.taskList}>
          <TaskOverview
            tasksCount={tasks.length}
            concludedTasksCount={concludedTasksCounter}
          />
          <div>
            {areThereAnyTask ? (
              tasks.map((task) => {
                return (
                  <Task
                    key={task.id}
                    task={task}
                    onDeleteTask={deleteTask}
                    onToggleCompletedTask={toggleCompletedTask}
                  />
                );
              })
            ) : (
              <div className={styles.withoutTasks}>
                <img src={Clipboard} alt="" />
                <p>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  Crie tarefas e organize seus itens a fazer
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
