import { getNetworkProvider } from "providers";
import { FeedbackEntity } from "entity/feedback.entity";
import { CreateFeedbackDto } from "dto";

/** @dev Init providers */
const networkProvider = getNetworkProvider();

export const getProductFeedback = async (productId: string) => {
  try {
    const data: FeedbackEntity[] = await networkProvider.request<FeedbackEntity[]>(`/feedback/${productId}`, {
      method: "GET"
    });

    return data;
  } catch (err: any) {
    throw new Error(err);
  }
}

export const sendProductFeedback = async (dto: CreateFeedbackDto) => {
  try {
    await networkProvider.requestWithCredentials("/feedback", {
      method: "POST",
      data: dto,
    });
  } catch (err: any) {
    throw new Error(err);
  }
}