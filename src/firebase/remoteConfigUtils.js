import { fetchAndActivate, getValue } from "firebase/remote-config";
import { remoteConfig } from "./config";

export const getIsReleaseMode = async () => {
  try {
    await fetchAndActivate(remoteConfig);
    const isRelease = getValue(remoteConfig, "is_release").asBoolean();

    if (import.meta.env.DEV) {
      console.info("[Remote Config] is_release:", isRelease);
    }

    return isRelease;
  } catch (error) {
    console.error("Error fetching remote config:", error);
    return true;
  }
};
