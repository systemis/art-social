import React, {
  FC,
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useCallback
} from "react";
import { useHistory } from "react-router-dom";
import { AppDispatch } from "redux/root-store";
import { useDispatch } from "react-redux";
import { getProfile } from "redux/apps/user";
import { setUserInfo } from "redux/apps/slice";

export interface MainContextState {
  isAuth: boolean;
  getProfile(): Promise<void>;
}

export const MainContext = createContext<MainContextState>(null);

export const MainProvider: FC<{ children: ReactNode }> = (props) => {
  const history = useHistory();
  const [isAuth, setIsAuth] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const handleGetProfile = useCallback(async () => {
    try {
      const res = await getProfile();
      if (res) {
        dispatch(setUserInfo(res))
        setIsAuth(true);
      }
    } catch {
      setIsAuth(false);
    }
  }, [history, isAuth, setIsAuth]);

  useEffect(() => {
    handleGetProfile();
  }, [history, setIsAuth, isAuth]);

  return (
    <MainContext.Provider
      value={{
        isAuth,
        getProfile: handleGetProfile
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};


export const useMain = () => {
    const context = useContext(MainContext);
    if (context == undefined) {
        throw new Error("must be in wrapper")
    }
    return context;
}