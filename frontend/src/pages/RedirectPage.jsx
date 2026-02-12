import { useParams } from "react-router-dom";
import { useEffect } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function RedirectPage() {
  const { token } = useParams();

  useEffect(() => {
    const redirect = async () => {
      try {
        const request = await fetch(
          `${BACKEND_URL}/api/s/${token}`
        );
        const response = await request.json()
        console.log(response)
        window.location.href = response.url;
      } catch (err) {
        console.error(err);
      }
    };

    redirect();
  }, [token]);

  return <h2>Redirecting...</h2>;
}

export default RedirectPage;
