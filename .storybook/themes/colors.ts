//Primary color
const primaryColor = '#0099FF'; //Blue Cyan

// Define the colors for the theme
const secondaryColor = '#FF4081'; // A vibrant pink for contrast
const lightBackground = '#F0F4FF'; // A very light blue for a softer background
const darkBackground = '#121212'; // A very dark grey for dark mode
const lightSurface = '#cbcdd4'; // White for surfaces in light mode
const darkSurface = '#1E1E1E'; // A dark grey for surfaces in dark mode
const lightText = '#333333'; // Dark grey for text in light mode
const darkText = '#E0E0E0'; // Light grey for text in dark mode

const colors = {
  light: {
    primary: primaryColor, // Custom BlueCyan as the primary color
    secondary: secondaryColor, // Vibrant pink as the secondary color
    background: lightBackground, // Light blue background
    surface: lightSurface, // White surface
    text: lightText, // Dark grey text
  },
  dark: {
    primary: primaryColor, // Custom BlueCyan as the primary color
    secondary: secondaryColor, // Vibrant pink as the secondary color
    background: darkBackground, // Dark grey background
    surface: darkSurface, // Dark grey surface
    text: darkText, // Light grey text
  },
};

export default colors;
