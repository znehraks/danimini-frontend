import React from "react";
import { Box } from "../atoms/Box";

export function SideMenu() {
  return <Box style={boxStyle}>사이드메뉴</Box>;
}

const boxStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "100vh",
  padding: "1rem",
  flex: 1,
  borderRight: "1px solid #ececec",
};
