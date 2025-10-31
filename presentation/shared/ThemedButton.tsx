import { Pressable, PressableProps, View } from "react-native";
import ThemedText from "./ThemedText";

interface Props extends PressableProps {
  children: string;
  className?: string;
}

const ThemedButton = ({ className, children, ...rest }: Props) => {
  return (
    <View className="my-5">
      <Pressable
        className="bg-light-primary dark:bg-dark-primary items-center justify-center rounded-xl px-6 py-2 active:opacity-80"
        {...rest}
      >
        <ThemedText type="h2">{children}</ThemedText>
      </Pressable>
    </View>
  );
};

export default ThemedButton;
