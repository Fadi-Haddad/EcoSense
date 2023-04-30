import OnboardingStack from './navigator/onboardingStack';
import * as Font from 'expo-font';

async function loadFonts() {
  await Font.loadAsync({
    'poppins-regular': require('./assets/fonts/Lato-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Lato-Bold.ttf'),
  });
}

export default function App() {
  return (
    <OnboardingStack />
  );
}

