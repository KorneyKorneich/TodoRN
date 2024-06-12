// import { useAppDispatch } from "src/shared/hooks/reduxHooks.ts";
// import { addTaskToDB } from "src/shared/firebase/cloud/api/addTask/addTask.ts";
//
// const dispatch = useAppDispatch();
// export const handleTodoAdd = () => {
//     dispatch(addTaskToDB(taskToAdd));
//     setTaskToAdd(taskToAddInitialState);
// };
import { addTaskToDB } from "src/shared/firebase/cloud/api/addTask/addTask.ts";
import { TaskConfig } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { AppDispatch } from "src/shared/store/store.ts";

export const handleTodoAdd = (
    taskToAdd: TaskConfig,
    setTaskToAdd: (task: TaskConfig) => void,
    dispatch: AppDispatch,
) => {
    dispatch(addTaskToDB(taskToAdd));
    setTaskToAdd({
        description: null,
        title: null,
    });
};
