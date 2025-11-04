import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { router } from "expo-router";

const ModalScreen = () => {
  return (
    <ThemedView margin>
      <ThemedButton
        onPress={() => router.push("/modal/modalWindow")}
        children="Abrir modal"
      />
    </ThemedView>
  );
};
export default ModalScreen;
