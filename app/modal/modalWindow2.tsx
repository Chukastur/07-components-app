import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

const modalWindow2 = () => {
  return (
    <ThemedView
      className="justify-center items-center flex-1"
      bgColor="#A52182"
    >
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <ThemedText>Hola, soy otro Modal</ThemedText>

      <ThemedButton className="mt-3" onPress={() => router.dismiss()}>
        Cerrar este modal
      </ThemedButton>
      <ThemedButton className="mt-3" onPress={() => router.dismissAll()}>
        Cerrar todos los modal
      </ThemedButton>
    </ThemedView>
  );
};

export default modalWindow2;
