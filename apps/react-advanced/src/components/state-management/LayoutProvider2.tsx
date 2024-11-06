import { createContext, PropsWithChildren, useMemo, useReducer } from "react";

export const ContextData = createContext({
  isExpand: false,
});
export const ContextApi = createContext({
  open: () => {},
  close: () => {},
  toggle: () => {},
});

const initialState = {
  isExpand: true,
};
const reducer = (state: typeof initialState, action: { type: string }) => {
  if (action.type === "toggle") {
    return { ...state, isExpand: !state.isExpand };
  }
  if (action.type === "open") {
    return { isExpand: true };
  }
  if (action.type === "close") {
    return { isExpand: false };
  }
  return { ...state };
};
const LayoutProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggle = () => dispatch({ type: "toggle" });
  const open = () => dispatch({ type: "open" });
  const close = () => dispatch({ type: "close" });

  const apis = useMemo(
    () => ({
      toggle,
      close,
      open,
    }),
    [],
  );

  return (
    <ContextData.Provider value={state}>
      <ContextApi.Provider value={apis}>{children}</ContextApi.Provider>
    </ContextData.Provider>
  );
};

export default LayoutProvider;
