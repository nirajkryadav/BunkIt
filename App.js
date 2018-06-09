import {TabNavigator} from "react-navigation";

//import your tabs js file
import Login from "./app/screens/Login";
import YourInfo from "./app/screens/YourInfo";
import TimeTable from "./app/screens/TimeTable";

var myTabs = TabNavigator({
  // here you will define your screen-tabs
  Home: {screen:Login},
  Shopping: {screen:YourInfo},
  Cart: {screen:TimeTable}
},
{
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: 'red',
  }
  });

export default myTabs;f