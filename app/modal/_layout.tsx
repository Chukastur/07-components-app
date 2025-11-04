import { useThemeColor } from "@/hooks/use-theme-color";
import { Stack } from "expo-router";

const ModalLayout = () => {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: backgroundColor },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modalWindow"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
};

export default ModalLayout;
