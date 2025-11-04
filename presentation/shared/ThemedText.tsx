import { Text, TextProps } from "react-native";

type TextType = "normal" | "h1" | "h2" | "semi-bold" | "link";

interface Props extends TextProps {
  className?: string;
  type?: TextType;
}

const ThemedText = ({ type, className, ...rest }: Props) => {
  // className="mt-10 text-3xl text-dark-primary"
  return (
    <Text
      className={[
        "text-blue-300 dark:text-white", // Colores base para modo claro/oscuro
        type === "normal" ? "font-normal" : undefined,
        type === "h1" ? "text-3xl" : undefined,
        type === "h2" ? "text-xl" : undefined,
        type === "semi-bold" ? "font-bold" : undefined,
        type === "link" ? "font-normal underline" : undefined,
        className,
      ].join(" ")}
      {...rest}
    />
  );
};
export default ThemedText;
