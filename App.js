import Login from './src/Pages/Login';
import AppLoading from 'expo-app-loading';
import { useFonts,BebasNeue_400Regular} from "@expo-google-fonts/bebas-neue";
import { Ubuntu_500Medium} from "@expo-google-fonts/ubuntu";


export default function App() {
  const [fontsLoaded]=useFonts(
    {
      BebasNeue_400Regular,
      Ubuntu_500Medium
    }
  )
  
  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <>
      <Login/>
    </>
  );
}

