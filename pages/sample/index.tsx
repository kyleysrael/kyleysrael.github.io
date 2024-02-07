// pages/index.tsx
import React from "react";
import Button from "@mui/material/Button";
import { useThemeMode } from "@/constant/useThemeMode";
import Text from "@/constant/Text";

const Home: React.FC = () => {
  const { theme, toggleTheme } = useThemeMode();

  return (
    <div
      style={{
        background: theme.palette.background.default,
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1 style={{ color: theme.palette.text.primary }}>Hello Next.js</h1>
      <Text variant="h1">hello h1</Text>
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  );
};

export default Home;
