import { NavigationContainer } from "@react-navigation/native";
import Stacknavigator from "./stacknavigator";
import Dashboard from "./components/dashboard";

export default function App() {
  return (
    <NavigationContainer>
      <Stacknavigator />
    </NavigationContainer>
  );
}
