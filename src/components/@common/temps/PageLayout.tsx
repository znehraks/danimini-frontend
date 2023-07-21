import React, { ReactNode } from "react";
import { Layout } from "../atoms/Layout";
import { SideMenu } from "../molecules/SideMenu";
import { Box } from "../atoms/Box";

type TPageLayout = {
  children: ReactNode;
};
export function PageLayout({ children }: TPageLayout) {
  return (
    <Layout style={layoutStyle}>
      <SideMenu />
      <Box style={boxStyle}>{children}</Box>
    </Layout>
  );
}

const layoutStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
};

const boxStyle: React.CSSProperties = {
  flex: 40,
  background: "beige",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
