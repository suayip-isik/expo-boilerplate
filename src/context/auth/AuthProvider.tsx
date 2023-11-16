import { createContext, useCallback, useEffect, useReducer } from "react";
import {
  ActionsType,
  IAuthProviderProps,
  IAuthValueProps,
  IContextType,
  Types,
} from "./types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setSession } from "./utils";

export const AuthContext = createContext<IContextType | null>(null);

const initialState: IAuthValueProps = {
  isInitialized: false,
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
  }
};

const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      const isSetupFinished = await AsyncStorage.getItem("isSetupFinished");
      const eMail = await AsyncStorage.getItem("eMail");
      console.log("Access Token: ", accessToken ? accessToken : "---");
      console.log("isSetupFinished 1:", !!isSetupFinished);
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

  return (
    <AuthContext.Provider
      value={{
        ...state,
        initialize,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
