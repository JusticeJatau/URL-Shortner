import { useParams } from "react-router-dom";
import { useEffect } from "react";

function RedirectPage() {
  const { token } = useParams();

  useEffect(() => {
    const redirect = async () => {
      try {
        const request = await fetch(
          `http://localhost:5000/api/s/${token}`
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
