import { uploadImageAsync } from "src/shared/firebase/cloud/api/imageUpload/imageUpload.ts";
import { addTaskToDB } from "src/shared/firebase/cloud/api/addTask/addTask.ts";
import { TaskConfig, TaskConfigWithId } from "src/shared/types/taskTypes/taskConfigWithId.ts";
import { AppDispatch } from "src/shared/store/store.ts";

export const addTaskWithImage = async (
    task: TaskConfig,
    dispatch: AppDispatch,
): Promise<TaskConfigWithId> => {
    try {
        const uploadResult = await uploadImageAsync(
            task.timeStamp.toString(),
            task.img.downloadURL ?? "",
        );
        const taskWithImage = {
            ...task,
            img: {
                downloadURL: uploadResult.downloadUrl,
                filename: uploadResult.filename,
            },
        };
        return await dispatch(addTaskToDB(taskWithImage)).unwrap();
    } catch (error) {
        console.error("Error adding task with image:", error);
        throw new Error("Failed to add task with image");
    }
};
