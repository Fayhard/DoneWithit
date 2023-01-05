import { useEffect } from "react";
import * as Notifications from "expo-notifications";

import expoPushTokenApi from "../api/expoPushToken";

export default useNotification = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener)
      Notifications.addNotificationReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestForegroundPermissionsAsync();
      if (!permission.granted) return;

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      // console.log(token);
      expoPushTokenApi.register(token);
    } catch (error) {
      console.log("Error getting a push token ", error);
    }
  };
};
