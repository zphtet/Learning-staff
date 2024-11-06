import { createContext, PropsWithChildren, useMemo, useState } from "react";

export const ContextData = createContext({
  isExpand: false,
  toggle: () => {},
});
export const ContextApi = createContext({
  open: () => {},
  close: () => {},
});

const LayoutProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isExpand, setExpand] = useState(true);

  const toggle = () => setExpand(!isExpand);
  const open = () => setExpand(true);
  const close = () => setExpand(false);

  const apis = useMemo(() => {
    return {
      open,
      close,
    };
  }, []);

  const value = {
    isExpand,
    toggle,
  };

  return (
    <ContextData.Provider value={value}>
      <ContextApi.Provider value={apis}>{children}</ContextApi.Provider>
    </ContextData.Provider>
  );
};

export default LayoutProvider;
