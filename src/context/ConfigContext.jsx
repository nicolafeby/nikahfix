/* eslint-disable react/prop-types, react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getIsReleaseMode } from "../firebase/remoteConfigUtils";

const ConfigContext = createContext({
  isReleaseMode: true,
  isInvitationMode: false,
});

export function ConfigProvider({ children }) {
  const [isReleaseMode, setIsReleaseMode] = useState(true);

  useEffect(() => {
    let isMounted = true;

    getIsReleaseMode().then((isRelease) => {
      if (isMounted) {
        setIsReleaseMode(isRelease);
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const value = useMemo(
    () => ({
      isReleaseMode,
      isInvitationMode: !isReleaseMode,
    }),
    [isReleaseMode]
  );

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}

export const useConfig = () => useContext(ConfigContext);
