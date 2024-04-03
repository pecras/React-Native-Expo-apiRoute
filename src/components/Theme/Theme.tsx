import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ThemeProps {

  children:any;
  theme: 'Orange' | 'Dark' | 'White';
}

interface ThemeStyles {
  sectionContainer: {
    backgroundColor: string;
    color: string;
  };
}

const Theme: React.FC<ThemeProps> = ({ theme,children }) => {

  const [themeStyles, setThemeStyles] = useState<ThemeStyles>({
    sectionContainer: {
      backgroundColor: 'white',
      color: 'black',
    },
  });

  useEffect(() => {
    switch (theme) {
      case 'Orange':
        setThemeStyles({
          sectionContainer: {
            backgroundColor: 'rgb(194, 65, 12)',
            color: 'rgb(249, 250, 251)',
          },
        });
        break;
      case 'Dark':
        setThemeStyles({
          sectionContainer: {
            backgroundColor: 'black',
            color: 'rgb(249, 250, 251)',
          },
        });
        break;
      default:
        setThemeStyles({
          sectionContainer: {
            backgroundColor: 'white',
            color: 'black',
          },
        });
        break;
    }
  }, [theme]);

 

  return (
    
      <SafeAreaView style={[styles.sectionContainer, themeStyles.sectionContainer]}>
   {children}
      </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    
  },
});

export default Theme;
