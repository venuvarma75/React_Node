/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
//  * @format
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// function Section({children, title}) {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;















// import React, { useState } from 'react';
// import { Alert } from 'react-native';
// import SplashScreen from './src/screens/SplashScreen';
// import OnboardingScreen from './src/screens/OnboardingScreen';
// import LoginForm from './src/screens/LoginForm';
// import RegisterForm from './src/screens/RegisterForm';
// import RegisterBasicDetails from './src/screens/RegisterBasicDetails';
// import RegisterReligionDetails from './src/screens/RegisterReligionDetails';
// import RegisterPersonalDetails from './src/screens/RegisterPersonalDetails';
// import RegisterProfessionalDetails from './src/screens/RegisterProfessionalDetails';
// import RegisterAboutYourself from './src/screens/RegisterAboutYourself';
// import HomeScreen from './src/screens/HomeScreen';

// // Safe image imports with fallbacks
// const images = {
//   Sanath: require('./src/assets/Sanath.jpg'),
//   onboarding1: require('./src/assets/onboarding1.jpg'),
//   onboarding2: require('./src/assets/onboarding2.jpg'),
//   onboarding3: require('./src/assets/onboarding3.jpg'),
//   group37: require('./src/assets/Group37.jpg'),
// };

// export default function App() {
//   const [currentScreen, setCurrentScreen] = useState('splash');
//   const [registrationData, setRegistrationData] = useState({});
//   const [currentUser, setCurrentUser] = useState(null);
//   const [registeredUsers, setRegisteredUsers] = useState([
//     // Demo user for testing
//     {
//       username: "demo",
//       password: "demo123",
//       email: "demo@example.com",
//       mobile: "1234567890",
//       isRegistered: true
//     }
//   ]);

//   const navigateToScreen = (screenName) => {
//     console.log('🚀 NAVIGATION TRIGGERED:', screenName);
//     setCurrentScreen(screenName);
//   };

//   // Handle successful login - navigate to home
//   const handleLoginSuccess = (userData) => {
//     console.log('✅ Login successful, navigating to home:', userData);
//     setCurrentUser(userData);
//     navigateToScreen('home');
//   };

//   // Handle logout - navigate back to login
//   const handleLogout = () => {
//     setCurrentUser(null);
//     navigateToScreen('login');
//   };

//   // Handle registration completion - Store user and navigate to login
//   const handleRegistrationComplete = (finalFormData) => {
//     try {
//       // Combine all registration data from all steps
//       const completeUserData = { 
//         ...registrationData, 
//         ...finalFormData,
//         registrationDate: new Date().toISOString(),
//         userId: Math.random().toString(36).substr(2, 9),
//         isRegistered: true // Mark as fully registered
//       };

//       console.log('📦 Complete Registration Data:', completeUserData);

//       // Extract username and password for login - these should come from RegisterForm
//       const username = completeUserData.username || completeUserData.email;
//       const password = completeUserData.password;

//       if (!username || !password) {
//         Alert.alert(
//           "Registration Error", 
//           "Username and password are required for login. Please go back and set your login credentials."
//         );
//         return;
//       }

//       // Check if username already exists
//       const userExists = registeredUsers.find(
//         user => user.username.toLowerCase() === username.toLowerCase()
//       );

//       if (userExists) {
//         Alert.alert(
//           "Registration Failed",
//           "Username already exists. Please choose a different username."
//         );
//         return;
//       }

//       // Create complete user profile with all registration data
//       const newUser = {
//         // Login credentials (from RegisterForm)
//         username: username,
//         password: password,
        
//         // Basic Details (from RegisterBasicDetails)
//         fullName: completeUserData.fullName,
//         gender: completeUserData.gender,
//         dateOfBirth: completeUserData.dateOfBirth,
        
//         // Contact Details (from RegisterForm)
//         email: completeUserData.email,
//         mobile: completeUserData.mobile,
        
//         // Religion Details (from RegisterReligionDetails)
//         religion: completeUserData.religion,
//         caste: completeUserData.caste,
//         subCaste: completeUserData.subCaste,
//         horoscope: completeUserData.horoscope,
        
//         // Personal Details (from RegisterPersonalDetails)
//         height: completeUserData.height,
//         weight: completeUserData.weight,
//         maritalStatus: completeUserData.maritalStatus,
//         physicalStatus: completeUserData.physicalStatus,
        
//         // Professional Details (from RegisterProfessionalDetails)
//         education: completeUserData.education,
//         occupation: completeUserData.occupation,
//         annualIncome: completeUserData.annualIncome,
//         employedIn: completeUserData.employedIn,
        
//         // About Yourself (from RegisterAboutYourself)
//         aboutMe: completeUserData.aboutMe,
//         familyDetails: completeUserData.familyDetails,
//         hobbies: completeUserData.hobbies,
        
//         // System fields
//         registrationDate: completeUserData.registrationDate,
//         userId: completeUserData.userId,
//         isRegistered: true
//       };

//       // Add to registered users
//       setRegisteredUsers(prevUsers => {
//         const updatedUsers = [...prevUsers, newUser];
//         console.log('✅ New user added. Total users:', updatedUsers.length);
//         return updatedUsers;
//       });
      
//       console.log('✅ Registration Complete - New User:', newUser);
      
//       // Show success alert with login credentials
//       Alert.alert(
//         "Registration Successful! 🎉",
//         `Your account has been created successfully!\n\n📧 Username: ${username}\n🔑 Password: ${password}\n\nPlease login to continue to your matrimony profile.`,
//         [
//           {
//             text: "Login Now",
//             onPress: () => {
//               // Clear registration data
//               setRegistrationData({});
//               navigateToScreen('login');
//             }
//           }
//         ]
//       );

//     } catch (error) {
//       console.error('❌ Registration error:', error);
//       Alert.alert("Registration Failed", "Something went wrong. Please try again.");
//     }
//   };

//   // Handle navigation from RegisterForm to BasicDetails with login credentials
//   const handleNavigateToBasicDetails = (formData) => {
//     console.log('📝 Login credentials collected:', formData);
    
//     // Store login credentials in registration data
//     const loginData = {
//       username: formData.username,
//       password: formData.password,
//       email: formData.email,
//       mobile: formData.mobile
//     };
    
//     setRegistrationData(loginData);
//     navigateToScreen('registerBasicDetails');
//   };

//   // Handle navigation to religion details with form data
//   const handleNavigateToReligionDetails = (basicDetailsData) => {
//     console.log('🕌 Navigating to Religion Details with data:', basicDetailsData);
//     const completeData = { 
//       ...registrationData, 
//       ...basicDetailsData 
//     };
//     setRegistrationData(completeData);
//     navigateToScreen('registerReligionDetails');
//   };

//   // Handle navigation to personal details with form data
//   const handleNavigateToPersonalDetails = (religionDetailsData) => {
//     console.log('👤 Navigating to Personal Details with data:', religionDetailsData);
//     const completeData = { 
//       ...registrationData, 
//       ...religionDetailsData 
//     };
//     setRegistrationData(completeData);
//     navigateToScreen('registerPersonalDetails');
//   };

//   // Handle navigation to professional details with form data
//   const handleNavigateToProfessionalDetails = (personalDetailsData) => {
//     console.log('💼 Navigating to Professional Details with data:', personalDetailsData);
//     const completeData = { 
//       ...registrationData, 
//       ...personalDetailsData 
//     };
//     setRegistrationData(completeData);
//     navigateToScreen('registerProfessionalDetails');
//   };

//   // Handle navigation to about yourself with form data
//   const handleNavigateToAboutYourself = (professionalDetailsData) => {
//     console.log('📝 Navigating to About Yourself with data:', professionalDetailsData);
//     const completeData = { 
//       ...registrationData, 
//       ...professionalDetailsData 
//     };
//     setRegistrationData(completeData);
//     navigateToScreen('registerAboutYourself');
//   };

//   // Back navigation handlers
//   const handleNavigateBackToRegister = () => {
//     navigateToScreen('register');
//   };

//   const handleNavigateBackToBasicDetails = () => {
//     navigateToScreen('registerBasicDetails');
//   };

//   const handleNavigateBackToReligionDetails = () => {
//     navigateToScreen('registerReligionDetails');
//   };

//   const handleNavigateBackToPersonalDetails = () => {
//     navigateToScreen('registerPersonalDetails');
//   };

//   const handleNavigateBackToProfessionalDetails = () => {
//     navigateToScreen('registerProfessionalDetails');
//   };

//   console.log('🔄 App Rendered - Current Screen:', currentScreen);
//   console.log('👥 Registered Users Count:', registeredUsers.length);

//   // Screen routing
//   if (currentScreen === 'splash') {
//     return (
//       <SplashScreen
//         backgroundImage={images.Sanath}
//         onFinish={() => navigateToScreen('onboarding')}
//       />
//     );
//   }

//   if (currentScreen === 'onboarding') {
//     return (
//       <OnboardingScreen
//         images={images}
//         onComplete={() => navigateToScreen('login')}
//         onNavigateToRegister={() => navigateToScreen('register')}
//         onNavigateToLogin={() => navigateToScreen('login')}
//       />
//     );
//   }

//   if (currentScreen === 'login') {
//     return (
//       <LoginForm
//         backgroundImage={images.group37}
//         onLogin={(userData) => {
//           console.log('User logged in:', userData);
//         }}
//         onNavigateToRegister={() => navigateToScreen('register')}
//         onLoginSuccess={handleLoginSuccess}
//         registeredUsers={registeredUsers}
//       />
//     );
//   }

//   if (currentScreen === 'register') {
//     return (
//       <RegisterForm
//         backgroundImage={images.group37}
//         onRegister={() => {
//           // This will be handled by onNavigateToBasicDetails
//         }}
//         onNavigateToLogin={() => navigateToScreen('login')}
//         onNavigateToBasicDetails={handleNavigateToBasicDetails}
//       />
//     );
//   }

//   if (currentScreen === 'registerBasicDetails') {
//     return (
//       <RegisterBasicDetails
//         initialFormData={registrationData}
//         onNavigateBack={handleNavigateBackToRegister}
//         onRegisterComplete={handleRegistrationComplete}
//         onNavigateToNextStep={handleNavigateToReligionDetails}
//       />
//     );
//   }

//   if (currentScreen === 'registerReligionDetails') {
//     return (
//       <RegisterReligionDetails
//         initialFormData={registrationData}
//         onNavigateBack={handleNavigateBackToBasicDetails}
//         onRegisterComplete={handleRegistrationComplete}
//         onNavigateToNextStep={handleNavigateToPersonalDetails}
//       />
//     );
//   }

//   if (currentScreen === 'registerPersonalDetails') {
//     return (
//       <RegisterPersonalDetails
//         initialFormData={registrationData}
//         onNavigateBack={handleNavigateBackToReligionDetails}
//         onRegisterComplete={handleRegistrationComplete}
//         onNavigateToNextStep={handleNavigateToProfessionalDetails}
//       />
//     );
//   }

//   if (currentScreen === 'registerProfessionalDetails') {
//     return (
//       <RegisterProfessionalDetails
//         initialFormData={registrationData}
//         onNavigateBack={handleNavigateBackToPersonalDetails}
//         onRegisterComplete={handleRegistrationComplete}
//         onNavigateToNextStep={handleNavigateToAboutYourself}
//       />
//     );
//   }

//   if (currentScreen === 'registerAboutYourself') {
//     return (
//       <RegisterAboutYourself
//         initialFormData={registrationData}
//         onNavigateBack={handleNavigateBackToProfessionalDetails}
//         onRegisterComplete={handleRegistrationComplete}
//       />
//     );
//   }

//   if (currentScreen === 'home') {
//     return (
//       <HomeScreen 
//         user={currentUser} 
//         onLogout={handleLogout} 
//       />
//     );
//   }

//   // Fallback - if no screen matches, go to login
//   return (
//     <LoginForm
//       backgroundImage={images.group37}
//       onLogin={() => {}}
//       onNavigateToRegister={() => navigateToScreen('register')}
//       onLoginSuccess={handleLoginSuccess}
//       registeredUsers={registeredUsers}
//     />
//   );
// }



import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Dashboard from './src/screens/Dashboard';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#f5f5f5" 
        translucent={false}
      />
      <View style={styles.container}>
        <Dashboard />
      </View>
    </SafeAreaView>
  );
};