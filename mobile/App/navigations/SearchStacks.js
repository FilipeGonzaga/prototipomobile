import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/search"

const SearchStacks = createStackNavigator ({
    Search: {
        screen: SearchScreen,
        navigationOptions: () => {
            title="Paginas de pesquisas"
        }
    }
});

export default SearchStacks;