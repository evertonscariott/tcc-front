import NetworkException from "../../../../infrastructure/exceptions/NetworkException";
import Api from "../../api.config";
import TaskRequestContract from "./contracts/request/taskRequestContract";

export const postTask = async (): Promise<TaskRequestContract> => {
    try {
        const response = await Api.post(`/api/v1/tarefa`);
        return response.data;
    } catch (err) {
        console.error("[ERROR][postTask]", err);
        throw new NetworkException("Error running postTask()");
    }
};
