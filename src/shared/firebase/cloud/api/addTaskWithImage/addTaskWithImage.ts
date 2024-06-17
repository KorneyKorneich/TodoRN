import { uploadImageAsync } from "src/shared/firebase/cloud/api/imageUpload/imageUpload.ts";
import { addTaskToDB } from "src/shared/firebase/cloud/api/addTask/addTask.ts";
import { TaskConfig, TaskConfigWithId } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { AppDispatch } from "src/shared/store/store.ts";

export const addTaskWithImage = async (
    task: TaskConfig,
    dispatch: AppDispatch,
): Promise<TaskConfigWithId> => {
    try {
        const uploadResult = await uploadImageAsync(task.img ?? "");
        const taskWithImage = { ...task, img: uploadResult };
        return await dispatch(addTaskToDB(taskWithImage)).unwrap();
    } catch (error) {
        console.error("Error adding task with image:", error);
        throw new Error("Failed to add task with image");
    }
};
