import { useEffect, useState } from "react";
import * as sizes from "../commonComps/Constants";
import { useDispatch } from "react-redux";
import { getScreenSize } from "../../Slices/screenSizeSlice";

export const useWindowSize = () => {
  const dispatch = useDispatch();

  const [width, setWidth] = useState(window ? window.innerWidth : 0);
  const [screen, setScreen] = useState(null);

  const updateScreenWidth = () => {
    setWidth(window.innerWidth);
    width !== window.innerWidth && dispatch(getScreenSize(screen));
    setScreen(
      width < 375
        ? sizes.xsMobile
        : width < 480
        ? sizes.smMobile
        : width < 768
        ? sizes.mdTablet
        : width < 960
        ? sizes.lgTablet
        : width < 1200
        ? sizes.xlDesktop
        : width < 1400
        ? sizes.xxlDesktop
        : width > 1400 && sizes.xxxlDesktop
    );
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, [width, screen]);
  return screen;
};
