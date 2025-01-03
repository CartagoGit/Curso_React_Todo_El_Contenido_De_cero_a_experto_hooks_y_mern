import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../auth/authContext";

export const PublicRoutes = ({ children }) => {
	const { user } = useContext(AuthContext);
	return user.logged ? <Navigate to='/' /> : children;
};
