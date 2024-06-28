import { uploadImageAsync } from "src/shared/firebase/cloud/api/todos/imageUpload/imageUpload.ts";
import { addTaskToDB } from "src/shared/firebase/cloud/api/todos/addTask/addTask.ts";
import { TaskConfig, TaskConfigWithId } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { AppDispatch } from "src/shared/store/store.ts";

export const addTaskWithImage = async (
    task: TaskConfig,
    dispatch: AppDispatch,
): Promise<TaskConfigWithId> => {
    try {
        const uploadResult = task.img && (await uploadImageAsync(task.img));
        const taskWithImage = { ...task, img: uploadResult };
        return await dispatch(addTaskToDB(taskWithImage)).unwrap();
    } catch (error) {
        throw new Error("Failed to add task with image");
    }
};
