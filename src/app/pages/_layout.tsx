import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import {Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    const inTabsGroup = segments[0] === '(auth)';

    console.log('User changed: ', isSignedIn);

    if (isSignedIn && !inTabsGroup) {
      router.replace('/pages/home');
    } else if (!isSignedIn) {
      router.replace('/pages/login');
    }
  }, [isSignedIn]);

  return(
    <Stack>
    <Stack.Screen
    name="(admin)"
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="(private)"
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="(produtos)"
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="(public)"
    options={{ headerShown: false }}
  />
  <Stack.Screen
    name="index"
    options={{ presentation: 'modal' }}
  />
</Stack>
  );
};

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
      <InitialLayout />
    </ClerkProvider>
  );
};

export default RootLayout;