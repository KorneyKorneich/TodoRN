import { addTaskToDB } from "src/shared/firebase/cloud/api/todos/addTask/addTask.ts";
import { TaskConfig } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { AppDispatch } from "src/shared/store/store.ts";
import { addTaskWithImage } from "src/shared/firebase/cloud/api/todos/addTaskWithImage/addTaskWithImage.ts";

export const handleTodoAdd = (
    taskToAdd: TaskConfig,
    setTaskToAdd: (task: TaskConfig) => void,
    dispatch: AppDispatch,
) => {
    taskToAdd.img.filename !== null
        ? addTaskWithImage(taskToAdd, dispatch)
        : dispatch(addTaskToDB(taskToAdd));
    setTaskToAdd({
        description: null,
        title: null,
        img: {
            downloadURL: null,
            filename: null,
        },
        deadline: null,
        timeStamp: 0,
        userId: null,
    });
};
