import { render } from "@testing-library/react-native";

import HomeScreen from "@/app/index";

describe("<HomeScreen />", () => {
  test("View pets button text renders correctly on HomeScreen", () => {
    const { getByText } = render(<HomeScreen />);

    getByText("View my pets");
  });
});
