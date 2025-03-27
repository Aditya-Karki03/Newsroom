import { notification } from "antd";
import { INotification } from "../interfaces/interface";

export const useNotification = ({ description }: INotification) => {
  notification.error({
    message: "Error",
    description: description,
  });
};
