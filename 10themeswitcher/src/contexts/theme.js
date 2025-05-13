import { createContext, useContext } from "react";

// Create the context
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

// Export the correct provider
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use the theme context
export default function useTheme() {
    return useContext(ThemeContext);
}
