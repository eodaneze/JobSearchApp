import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  });

  const onLayOutRootView = useCallback(async () => {
      if(fontsLoaded){
        await SplashScreen.hideAsync();
      }
  }, [fontsLoaded])

  if(!fontsLoaded) return null
  return <Stack onLayOut={onLayOutRootView}/>;
};

export default Layout;
