import React from "react";

import { AppRoutes } from "../routes/app.routes";
import { AuthRoutes } from "../routes/auth.routes";

import { LoadingAuth } from "../components/LoadingAuth";

const Routes = () => {
  const signed = false;
  const loading = false;

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export { Routes };
