import Footer from "./footer";
import Header from "./header";
import React, { FC, PropsWithChildren } from "react";

const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-[100vh] lex flex-col relative my-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
