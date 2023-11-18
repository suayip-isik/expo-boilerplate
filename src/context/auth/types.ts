export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export interface IAuthValueProps {
  eMail: string | null;
  isAuthenticated: boolean;
  isRememberMail: boolean;
}

export interface ILoginPayload {
  userName: string;
  password: string;
  isRememberMe: boolean;
}

export type IContextType = IAuthValueProps & {
  initialize: () => void;
  login: (loginModel: ILoginPayload) => void;
  //  ogout: () => void;
  // finishSetup: () => void; if you use the tutorial screen
  // rememberMail: (isRememberMail: string | undefined) => void;
  // startSetup: () => void;
};

export type AuthUserType = {} | any;

export interface IAuthProviderProps {
  children: React.ReactNode;
}

export enum Types {
  INITIAL = "INITIAL",
  LOGIN = "LOGIN",
}

type Payload = {
  [Types.INITIAL]: {
    isAuthenticated: boolean;
    eMail: string | null;
    isRememberMail: boolean;
  };
  [Types.LOGIN]: {
    eMail: string | null;
    isAuthenticated: boolean;
  };
};

export type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];
