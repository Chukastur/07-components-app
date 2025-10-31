import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import { allRoutes } from "@/constants/Routes";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useThemeColor } from "@/hooks/use-theme-color";
import "../global.css";

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: "backgroundColor", flex: 1 }}
    >
      <StatusBar style="auto" />
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            headerTitle: "",
            contentStyle: { backgroundColor: backgroundColor },
            headerStyle: { backgroundColor: backgroundColor },
          }}
        />
        <Stack.Screen
          options={{
            title: "",
          }}
        />
        {allRoutes.map((route) => (
          <Stack.Screen
            key={route.name}
            options={{
              title: route.title,
            }}
          />
        ))}
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
