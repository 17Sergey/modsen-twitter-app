interface NotificationModel {
  from: string;
  to: string;
  type: "follow" | "like" | "comment";
  createdAt: number;

  post?: string;
  comment?: string;

  isRead?: boolean;
  updatedAt?: number;
}
