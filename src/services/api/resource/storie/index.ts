import NetworkException from "../../../../infrastructure/exceptions/NetworkException";
import Api from "../../api.config";
import StorieRequestContract from "./contracts/request/storieRequestContract";

export const postStorie = async (): Promise<StorieRequestContract> => {
    try {
        const response = await Api.post(`/api/v1/historia`);
        return response.data;
    } catch (err) {
        console.error("[ERROR][postStorie]", err);
        throw new NetworkException("Error running postStorie()");
    }
};
