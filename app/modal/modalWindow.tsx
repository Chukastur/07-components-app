import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

const modalWindow = () => {
  return (
    <ThemedView
      className="justify-center items-center flex-1 "
      bgColor="#A52182"
    >
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <ThemedText>Hola, soy un Modal</ThemedText>
      <ThemedButton
        className="mt-3"
        onPress={() => router.push("/modal/modalWindow2")}
      >
        Abrir otro modal
      </ThemedButton>
    </ThemedView>
  );
};

export default modalWindow;
