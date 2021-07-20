import NetworkException from "../../../../infrastructure/exceptions/NetworkException";
import Api from "../../api.config";
import FrameRequestContract from "./contracts/request/frameRequestContract";

export const postFrame = async (): Promise<FrameRequestContract> => {
    try {
        const response = await Api.post(`/api/v1/quadro`);
        return response.data;
    } catch (err) {
        console.error("[ERROR][postBrandByRepresentativeCode]", err);
        throw new NetworkException("Error running postBrandByRepresentativeCode()");
    }
};
