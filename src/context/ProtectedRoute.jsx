import { useNavigate } from "react-router-dom";
import { useAuth } from "./useAuth";

import { useEffect } from "react";

import PropTypes from "prop-types";

export const ProtectedRoute = ({ children }) => {
     const { user, loading } = useAuth();
     const navigate = useNavigate();

     useEffect(() => {
          if (!loading && !user) {
               navigate("/login");
          }
     }, [user, loading, navigate]);

     if (loading) {
          return <div>Cargando...</div>;
     }

     //si hay usuario entonces se muestra el contenido
     return user ? children : null;
};

ProtectedRoute.propTypes = {
     children: PropTypes.node.isRequired,
};
