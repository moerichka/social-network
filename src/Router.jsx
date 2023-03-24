import React, { useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./layout/Layout";
import AuthorizationPage from "./pages/AuthorizationPage";
import FeedPage from "./pages/FeedPage";
import { authUser } from "./store/userSlice";
import LoadingPage from "./pages/LoadingPage";
import RegistrationPage from "./pages/RegistrationPage";

function Router() {
  const dispatch = useDispatch();
  
  const { user, isLoading } = useSelector((state) => state.user);

  const email = useMemo(() => localStorage.getItem("userEmail") || "", []);
  const password = useMemo(
    () => localStorage.getItem("userPassword") || "",
    []
  );

  useEffect(() => {
    if (email && password) {
      dispatch(authUser({ email, password }));
    }
  }, [dispatch, email, password]);

  const isLoadingPage = !user && isLoading && email && password;
  const isAuthorizationPage = !user && !isLoading && !email && !password;

  return (
    <BrowserRouter>
      <Routes>
        {isLoadingPage && <Route path="*" element={<LoadingPage />} />}
        {user && (
          <>
            <Route path="/settings" element={<div>Settings</div>} />
            <Route path="/" element={<Layout />}>
              <Route index element={<FeedPage />} />
              <Route path="profile" element={<FeedPage />} />
            </Route>
          </>
        )}
        {isAuthorizationPage && (
          <>
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="*" element={<AuthorizationPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
