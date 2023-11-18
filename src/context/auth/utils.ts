import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../../utils/axios";

export const setSession = async (accessToken: string | null) => {
  if (accessToken) {
    await AsyncStorage.setItem("accessToken", accessToken);
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    await AsyncStorage.removeItem("accessToken");
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};
