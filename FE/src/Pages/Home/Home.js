import { useEffect, useState } from "react";
import loginTokenService from "~/apiService/loginTokenService";


import style from "./Home.module.scss";
import classNames from "classnames/bind";
import SidebarHome from "~/Layouts/Components/Sidebars/SidebarContent/SidebarHome";
import { avata, feeling, live, video } from "~/components/Image/Image";
import { Link } from "react-router-dom";
import { IconPlus, NextIcon, PrevIcon } from "~/components/Icons/Icon";
import Story from "~/Layouts/Components/Story";
import Post from "~/Layouts/Components/Post";
import { listSidebarHome } from "~/constList/constList";
import { getMyFriend } from "~/apiService/getMyFriend";
import { getPostFriend } from "~/apiService/getPostFriend";

const cx = classNames.bind(style)
function Home() {
  const [myFriend, setMyFriend] = useState([])
  const [listIdFriend, setListIdFriend] = useState([])
  const [post, setPost] = useState([])
    useEffect(() => {
        async function fetchLogin() {
           
          try {
            const res = await loginTokenService();
            if(!res || !res.result.authencated) {
              window.location.href = ("http://localhost:3000/logout")
            }
            const resFriends = await getMyFriend();
            const friendList = Object.values(resFriends).map((value, index) => ({ 
                  "to": `/${value.friendUserId}`,
                  "text": `${value.firtName} ${value.lastName}`,
                  "img": value.avata
            }));
            const friendIds = Object.values(resFriends).map((value) => value.friendUserId);
            setListIdFriend(friendIds);
            setMyFriend(friendList);

           
          } catch (error) {
            console.error("Lỗi khi login:", error);
          }
        }
        fetchLogin();
      }, []);
      useEffect(() => {
        async function getPost() {
          if (listIdFriend && listIdFriend.length > 0) {
            const resPost = await getPostFriend(listIdFriend)
            setPost(resPost.result)
          }
        }
        getPost()
      }, [listIdFriend])
    return (
         <div className={cx("wrapper")} >
            <SidebarHome
              list = {listSidebarHome}
              friend={false}
            />
            <div className={cx("content")}>
              <div className={`wrapper ${cx("createPost")}`}>
                <div className={cx("createPost_")}>
                  <Link className={cx("createPost_avata")}>
                    <img src="https://dthezntil550i.cloudfront.net/n4/latest/n41611050401464760001833695/1280_960/1128ba0a-efcb-4370-97cf-7704d4c0555d.png" alt=""></img>
                  </Link>
                  <Link className={cx("createPost_text")}>
                    <span>Đạt ơi, bạn đang nghĩ gì thế?</span>
                  </Link>
                </div>
                
                <div className={cx("createPost_line")}><div className={"line"}></div></div>
                <div className={cx("createPost_button")}>
                  <div className={cx("createPost_live")}>
                    <img src={live} alt=""/>
                    <span>Video trực tiếp</span>
                  </div>
                  <div className={cx("createPost_video")}>
                    <img src={video} alt=""/>
                    <span>Ảnh/video</span>
                  </div>
                  <div className={cx("createPost_feeling")}>
                    <img src={feeling} alt=""/>
                    <span>Cảm xúc/hoạt động</span>
                  </div>
                </div>
              </div>
              <div className={cx("story")}>
                <div className={`styleHiden ${cx("prev")}`}><PrevIcon/></div>
                <div className={`wrapper ${cx("new_story")}`}>
                    <Link >
                      <div className={cx("story_avata")}>
                        <img src = {avata()} alt=""/>
                        <div className={cx("circula")}>
                          <div>
                            <i><IconPlus/></i>
                          </div>
                        </div>
                      </div>
                    <span>Tạo tin</span>
                    </Link>
                </div>
                <div className={cx("story_friend")}>
                  <Story
                    avata={"https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"} 
                    storyThum={"https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"}
                  />
                   <Story
                    avata={"https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"} 
                    storyThum={"https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"}
                  />
                    <Story
                    avata={"https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"} 
                    storyThum={"https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"}
                  />
                    <Story
                    avata={"https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"} 
                    storyThum={"https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"}
                  />
                    <Story
                    avata={"https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"} 
                    storyThum={"https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"}
                  />
                </div>
                <div className={` ${cx("next")}`}><NextIcon/></div>
              </div>
              <div className={cx("post")}>
                  {post.map((value, index) => (
                  <Post 
                  key={index}
                  avata= {value.avata}
                  name={value.name}
                  time= {value.createAtPost}
                  text= {value.content}
                  image= {value.imgUrl}
                  amountLike={value.amountEmoji}
                  amountComment={value.amountComment}
                  amountShare={value.amountShare}
                  />))}

              </div>
            </div>
            {/* <SidebarHome
              // list={}
            /> */}

            <SidebarHome
              list = {myFriend}
              friend={true}
            />
         </div>
        );
}
export default Home;