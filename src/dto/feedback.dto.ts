import { FeedbackEntity } from "entity/feedback.entity";

export interface CreateFeedbackDto extends Omit<FeedbackEntity, "userId" | "created_at" | "updated_at" | "owner"> {}