import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing'

// <> </> is a fragment, does not create extra html 

export default function App()
{
  return (
    <>
      <StatusBar style="auto" />
      <Landing />
    </>
  );
}