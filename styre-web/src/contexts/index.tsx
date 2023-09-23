import React, { ReactNode } from "react";
import { AuthProvider } from "./Auth";

interface Props {
  children: ReactNode;
}

export default function Contexts({ children }: Props) {
  return <AuthProvider>{children}</AuthProvider>;
}
