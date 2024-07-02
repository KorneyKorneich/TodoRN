import { TaskConfig } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { AppDispatch } from "src/shared/store/store.ts";
import { addTaskWithImage } from "src/shared/firebase/cloud/api/todos/addTaskWithImage/addTaskWithImage.ts";

export const handleTodoAdd = (
    taskToAdd: TaskConfig,
    setTaskToAdd: (task: TaskConfig) => void,
    dispatch: AppDispatch,
) => {
    addTaskWithImage(taskToAdd, dispatch);
    setTaskToAdd({
        description: null,
        title: null,
        img: null,
        deadline: null,
        timeStamp: 0,
        userId: null,
    });
};
