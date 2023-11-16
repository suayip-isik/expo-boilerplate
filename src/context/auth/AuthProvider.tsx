import { createContext, useCallback, useEffect, useReducer } from "react";
import {
  ActionsType,
  AuthUserType,
  IAuthProviderProps,
  IAuthValueProps,
  IContextType,
  ILoginPayload,
  Types,
} from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setSession } from "./utils";
import { Alert } from "react-native";

export const AuthContext = createContext<IContextType | null>(null);

const initialState: IAuthValueProps = {
  eMail: null,
  isAuthenticated: false,
  isRememberMail: false,
};

const reducer = (state: IAuthValueProps, action: ActionsType) => {
  switch (action.type) {
    case Types.INITIAL: {
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        eMail: action.payload.eMail,
        isRememberMail: action.payload.isRememberMail,
      };
    }
    case Types.LOGIN: {
      return {
        ...state,
        eMail: action.payload.eMail,
        isAuthenticated: action.payload.isAuthenticated,
      };
    }
  }
};

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      const eMail = await AsyncStorage.getItem("eMail");
      console.log("Access Token: ", accessToken ? accessToken : "---");
      console.log("eMail:", eMail);

      if (accessToken) {
        setSession(accessToken);

        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: true,
            eMail: eMail,
            isRememberMail: eMail ? true : false,
          },
        });
      } else {
        dispatch({
          type: Types.INITIAL,
          payload: {
            isAuthenticated: false,
            eMail: eMail,
            isRememberMail: eMail ? true : false,
          },
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: Types.INITIAL,
        payload: {
          isAuthenticated: false,
          eMail: "",
          isRememberMail: false,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const login = async (loginModel: ILoginPayload) => {
    try {
      const loginResponse: any = "";
      const user: AuthUserType = loginResponse?.data.Data || {};
      const accessToken = user.Token;
      const eMail = user.Email;

      if (!accessToken)
        return Alert.alert(
          "Hata",
          "Bilgilerinizi kontrol ederek tekrar giriş yapmayı deneyiniz."
        );
      setSession(accessToken);

      dispatch({
        type: Types.LOGIN,
        payload: {
          eMail,
          isAuthenticated: true,
        },
      });
    } catch (error) {
      return Alert.alert(
        "Hata",
        "İnternet bağlantınızı kontrol ederek tekrar giriş yapmayı deneyiniz"
      );
    }
    // setTimeout(() => {
    //   console.log("Fonksiyon durdu!");
    // }, 10);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        initialize,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
