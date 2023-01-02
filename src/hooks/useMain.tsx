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

export interface MainContextState {
  isAuth: boolean;
}

export const MainContext = createContext<MainContextState>(null);

export const MainProvider: FC<{ children: ReactNode }> = (props) => {
  const history = useHistory();
  const [isAuth, setIsAuth] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const handleGetProfile = useCallback(async () => {
    try {
      await dispatch(getProfile());
      console.log("Get profile work");
      setIsAuth(true);
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