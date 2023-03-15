import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import AuthorizationPage from "./pages/AuthorizationPage";
import FeedPage from "./pages/FeedPage";
import { authUser } from "./store/userSlice";
import LoadingPage from "./pages/LoadingPage";

function Router() {
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((state) => state.user);

  const email = localStorage.getItem("userEmail") || "";
  const password = localStorage.getItem("userPassword") || "";

  useEffect(() => {
    if (email && password) {
      dispatch(authUser({ email, password }));
    }
  }, [dispatch, email, password]);

  return (
    <BrowserRouter>
      <Routes>
        {!user && isLoading && email && password && (
          <Route path="*" element={<LoadingPage />} />
        )}
        {user && <Route path="/" element={<FeedPage />} />}
        {!user && !isLoading && !email && !password && (
          <Route path="*" element={<AuthorizationPage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
