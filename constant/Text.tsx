import React from "react";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { getDesignTokens } from "./theme";
import { useThemeMode } from "./useThemeMode";

interface TextProps {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "caption" | "overline";
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ variant, children }) => {
  const { isDarkMode } = useThemeMode();
  const theme = isDarkMode ? getDesignTokens("dark") : getDesignTokens("light");

  const variantStyles = {
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
      color: theme.palette.text.primary,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      color: theme.palette.text.primary,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: theme.palette.text.primary,
    },
    // Add styles for other variants as needed
  };

  const styles = variantStyles[variant] || {};

  return (
    <Typography variant={variant} sx={styles}>
      {children}
    </Typography>
  );
};

export default Text;
