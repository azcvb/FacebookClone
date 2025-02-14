import { useEffect } from "react";
import loginTokenService from "~/apiService/loginTokenService";

function Home() {
    useEffect(() => {
        async function fetchLogin() {
           
          try {
            const res = await loginTokenService();
          
            if(!res || !res.result.authencated) {
              window.location.href = ("http://localhost:3000/logout")
            }
          } catch (error) {
            console.error("Lỗi khi login:", error);
          }
        }
        fetchLogin();
      }, []);
    return (
         <h1>Home Page</h1> 
        );
}

export default Home;