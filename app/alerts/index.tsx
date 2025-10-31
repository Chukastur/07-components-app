import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Alert } from "react-native";

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <ThemedView margin>
      <ThemedButton
        children={"2-Button Alert"}
        onPress={createTwoButtonAlert}
      />
      <ThemedButton
        children={"3-Button Alert"}
        onPress={createThreeButtonAlert}
      />
    </ThemedView>
  );
};
export default AlertsScreen;
