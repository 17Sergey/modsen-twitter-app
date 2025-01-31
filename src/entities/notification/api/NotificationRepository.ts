import { COLLECTIONS } from "@/app/api/firebase/collections";
import Repository from "@/shared/utils/Repository";

class NotificationRepository extends Repository<NotificationModel> {
  constructor() {
    super(COLLECTIONS.POSTS);
  }
}

export const notificationRepository = new NotificationRepository();
