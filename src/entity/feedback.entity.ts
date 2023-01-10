export class FeedbackEntity {
  productId: string;
  userId: string;
  message: string;
  created_at: string;
  updated_at: string;
  owner: {
    username: string;
    picture: string;
    name: string;
    sub: string;
  }
}