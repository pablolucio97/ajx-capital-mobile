import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      title: string;
      subtitle: string;
      text: string;
      placeholder: string;
      backgroundLight: string;
      success: string;
      error: string;
    };
    fonts: {
      primary_300: string;
      primary_400: string;
      primary_500: string;
      primary_600: string;
      primary_700: string;
      primary_800: string;
    };
    spacings: number[];
    sizes: number[];
  }
}
