import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Products from '../components/Products';
import Services from '../components/Services';
import Orders from '../components/Orders';
import Auth from '../components/Auth';
import Register from '../components/Register';

const screens = {
    Home:{
        screen:Products
    },
    Services:{
        screen:Services
    },
    Orders:{
        screen:Orders
    },
    Account:{
        screen:Auth
    },
    Register:{
        screen:Register
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);