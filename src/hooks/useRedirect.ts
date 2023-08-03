import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { staticServerUri } from "@utils/staticuri";

export const useRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(staticServerUri + "/");
    }
  }, []);
};
