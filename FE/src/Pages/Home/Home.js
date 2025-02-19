import classNames from "classnames";
import { useEffect } from "react";
import loginTokenService from "~/apiService/loginTokenService";


import style from "./Home.module.scss";
import Sidebar from "~/Layouts/Components/Sidebars";
const cx = classNames.bind(style);
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
         <div className={cx("wrapper")} >
            <Sidebar></Sidebar>
            <h1 className={cx("wrapper")}>HomePage</h1>
         </div>
        );
}

export default Home;