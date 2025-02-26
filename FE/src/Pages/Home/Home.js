import { useEffect } from "react";
import loginTokenService from "~/apiService/loginTokenService";


import style from "./Home.module.scss";
import classNames from "classnames/bind";
import SidebarHome from "~/Layouts/Components/Sidebars/SidebarContent/SidebarHome";
import { avata, feeling, live, video } from "~/components/Image/Image";
import { Link } from "react-router-dom";
import { IconPlus, NextIcon, PrevIcon } from "~/components/Icons/Icon";
import Story from "~/Layouts/Components/Story";
import Post from "~/Layouts/Components/Post";

const cx = classNames.bind(style)
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
            <SidebarHome/>
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
                  <Post
                  avata="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"
                  name="KING of MEME VIỆT"
                  time="21"
                  text='MRBEAST CÓ LỜI KHUYÊN DÀNH CHO ISHOWSPEED NẾU ANH ẤY MUỐN ĐI CHƠI VỚI IDOL CỦA MÌNH 😄\n
  Trong một cuộc phỏng vấn với Mike Kent của Dexerto trong podcast Clickbaited, MrBeast thừa nhận rằng Ronaldo đã phá kỷ lục của anh về số lượng người đăng ký YouTube tăng nhiều nhất trong một tháng và thảo luận về việc quay video cùng siêu sao bóng đá người Bồ Đào Nha.
  Sau đó, cuộc trò chuyện chuyển hướng sang Streamer Ishowspeed và sự "ám ảnh" nổi tiếng về Ronaldo của cậu ấy. MrBeast nói:
  "Tôi có nhắc đến Speed và Ronaldo biết cậu ấy là ai, tất nhiên rồi. Anh ấy đã thấy và họ từng gặp nhau thoáng qua vài giây một lần trước đây, tôi tin là vậy.
  Nhưng mà, Speed này, nếu cậu có cơ hội đi chơi với Ronaldo, có lẽ hãy cứ hành động bình thường thôi. Đây là lời khuyên từ một người đã từng ngồi trên ghế sofa của Ronaldo, dành hàng giờ với anh ấy.
  Hãy cứ thoải mái. Hãy là chính mình, Speed. Đừng khóc, đừng phát cuồng, đừng ngửi anh ấy, và chắc chắn đừng s.ủ.a vào mặt anh ấy.'
                  image="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/480768144_680355384560070_593006707847327816_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFM5Jp7jbuM2DjjBmwNskqDxfcgWQFJwSjF9yBZAUnBKIqRpq0rP9VLlaC9_EBLD-Y8pHGXBxsV1Ddw3WShsWqF&_nc_ohc=AXpToSMzCQQQ7kNvgFRM59R&_nc_oc=AdgftL6ANQGyrrO_9hH4FlFhBRxqMD9Na-4D9avO_StoGrmgxl7Y2-voAOD7bXmBraY&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=Ar3EG2TbXFzube0wyJSv00c&oh=00_AYDe1MDmjDvlGmcQJJ7QS6o3n6BHMLLQr0A-ZlUee4rGMQ&oe=67C36757"
                  amountLike="1400"
                  amountComment="180"
                  amountShare="18"
                  />
                <Post
                  avata="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"
                  name="KING of MEME VIỆT"
                  time="21"
                  text='MRBEAST CÓ LỜI KHUYÊN DÀNH CHO ISHOWSPEED NẾU ANH ẤY MUỐN ĐI CHƠI VỚI IDOL CỦA MÌNH 😄\n
  Trong một cuộc phỏng vấn với Mike Kent của Dexerto trong podcast Clickbaited, MrBeast thừa nhận rằng Ronaldo đã phá kỷ lục của anh về số lượng người đăng ký YouTube tăng nhiều nhất trong một tháng và thảo luận về việc quay video cùng siêu sao bóng đá người Bồ Đào Nha.
  Sau đó, cuộc trò chuyện chuyển hướng sang Streamer Ishowspeed và sự "ám ảnh" nổi tiếng về Ronaldo của cậu ấy. MrBeast nói:
  "Tôi có nhắc đến Speed và Ronaldo biết cậu ấy là ai, tất nhiên rồi. Anh ấy đã thấy và họ từng gặp nhau thoáng qua vài giây một lần trước đây, tôi tin là vậy.
  Nhưng mà, Speed này, nếu cậu có cơ hội đi chơi với Ronaldo, có lẽ hãy cứ hành động bình thường thôi. Đây là lời khuyên từ một người đã từng ngồi trên ghế sofa của Ronaldo, dành hàng giờ với anh ấy.
  Hãy cứ thoải mái. Hãy là chính mình, Speed. Đừng khóc, đừng phát cuồng, đừng ngửi anh ấy, và chắc chắn đừng s.ủ.a vào mặt anh ấy.'
                  image="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/480768144_680355384560070_593006707847327816_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFM5Jp7jbuM2DjjBmwNskqDxfcgWQFJwSjF9yBZAUnBKIqRpq0rP9VLlaC9_EBLD-Y8pHGXBxsV1Ddw3WShsWqF&_nc_ohc=AXpToSMzCQQQ7kNvgFRM59R&_nc_oc=AdgftL6ANQGyrrO_9hH4FlFhBRxqMD9Na-4D9avO_StoGrmgxl7Y2-voAOD7bXmBraY&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=Ar3EG2TbXFzube0wyJSv00c&oh=00_AYDe1MDmjDvlGmcQJJ7QS6o3n6BHMLLQr0A-ZlUee4rGMQ&oe=67C36757"
                  amountLike="1400"
                  amountComment="180"
                  amountShare="18"
                  />
                  <Post
                  avata="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"
                  name="KING of MEME VIỆT"
                  time="21"
                  text='MRBEAST CÓ LỜI KHUYÊN DÀNH CHO ISHOWSPEED NẾU ANH ẤY MUỐN ĐI CHƠI VỚI IDOL CỦA MÌNH 😄\n
  Trong một cuộc phỏng vấn với Mike Kent của Dexerto trong podcast Clickbaited, MrBeast thừa nhận rằng Ronaldo đã phá kỷ lục của anh về số lượng người đăng ký YouTube tăng nhiều nhất trong một tháng và thảo luận về việc quay video cùng siêu sao bóng đá người Bồ Đào Nha.
  Sau đó, cuộc trò chuyện chuyển hướng sang Streamer Ishowspeed và sự "ám ảnh" nổi tiếng về Ronaldo của cậu ấy. MrBeast nói:
  "Tôi có nhắc đến Speed và Ronaldo biết cậu ấy là ai, tất nhiên rồi. Anh ấy đã thấy và họ từng gặp nhau thoáng qua vài giây một lần trước đây, tôi tin là vậy.
  Nhưng mà, Speed này, nếu cậu có cơ hội đi chơi với Ronaldo, có lẽ hãy cứ hành động bình thường thôi. Đây là lời khuyên từ một người đã từng ngồi trên ghế sofa của Ronaldo, dành hàng giờ với anh ấy.
  Hãy cứ thoải mái. Hãy là chính mình, Speed. Đừng khóc, đừng phát cuồng, đừng ngửi anh ấy, và chắc chắn đừng s.ủ.a vào mặt anh ấy.'
                  image="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/480768144_680355384560070_593006707847327816_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFM5Jp7jbuM2DjjBmwNskqDxfcgWQFJwSjF9yBZAUnBKIqRpq0rP9VLlaC9_EBLD-Y8pHGXBxsV1Ddw3WShsWqF&_nc_ohc=AXpToSMzCQQQ7kNvgFRM59R&_nc_oc=AdgftL6ANQGyrrO_9hH4FlFhBRxqMD9Na-4D9avO_StoGrmgxl7Y2-voAOD7bXmBraY&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=Ar3EG2TbXFzube0wyJSv00c&oh=00_AYDe1MDmjDvlGmcQJJ7QS6o3n6BHMLLQr0A-ZlUee4rGMQ&oe=67C36757"
                  amountLike="1400"
                  amountComment="180"
                  amountShare="18"
                  />
                  <Post
                  avata="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"
                  name="KING of MEME VIỆT"
                  time="21"
                  text='MRBEAST CÓ LỜI KHUYÊN DÀNH CHO ISHOWSPEED NẾU ANH ẤY MUỐN ĐI CHƠI VỚI IDOL CỦA MÌNH 😄\n
  Trong một cuộc phỏng vấn với Mike Kent của Dexerto trong podcast Clickbaited, MrBeast thừa nhận rằng Ronaldo đã phá kỷ lục của anh về số lượng người đăng ký YouTube tăng nhiều nhất trong một tháng và thảo luận về việc quay video cùng siêu sao bóng đá người Bồ Đào Nha.
  Sau đó, cuộc trò chuyện chuyển hướng sang Streamer Ishowspeed và sự "ám ảnh" nổi tiếng về Ronaldo của cậu ấy. MrBeast nói:
  "Tôi có nhắc đến Speed và Ronaldo biết cậu ấy là ai, tất nhiên rồi. Anh ấy đã thấy và họ từng gặp nhau thoáng qua vài giây một lần trước đây, tôi tin là vậy.
  Nhưng mà, Speed này, nếu cậu có cơ hội đi chơi với Ronaldo, có lẽ hãy cứ hành động bình thường thôi. Đây là lời khuyên từ một người đã từng ngồi trên ghế sofa của Ronaldo, dành hàng giờ với anh ấy.
  Hãy cứ thoải mái. Hãy là chính mình, Speed. Đừng khóc, đừng phát cuồng, đừng ngửi anh ấy, và chắc chắn đừng s.ủ.a vào mặt anh ấy.'
                  image="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/480768144_680355384560070_593006707847327816_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFM5Jp7jbuM2DjjBmwNskqDxfcgWQFJwSjF9yBZAUnBKIqRpq0rP9VLlaC9_EBLD-Y8pHGXBxsV1Ddw3WShsWqF&_nc_ohc=AXpToSMzCQQQ7kNvgFRM59R&_nc_oc=AdgftL6ANQGyrrO_9hH4FlFhBRxqMD9Na-4D9avO_StoGrmgxl7Y2-voAOD7bXmBraY&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=Ar3EG2TbXFzube0wyJSv00c&oh=00_AYDe1MDmjDvlGmcQJJ7QS6o3n6BHMLLQr0A-ZlUee4rGMQ&oe=67C36757"
                  amountLike="1400"
                  amountComment="180"
                  amountShare="18"
                  />
                  <Post
                  avata="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/481028352_608531868457713_4590059410225101380_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeE_Xp_6p0IE_6YdWIdQCkr--HlDFpaL1L74eUMWlovUvlYUrxkXssIb4Ykb4giPw0wyfq4cFPuZjN1arwKAmi52&_nc_ohc=uGYne-W4kz8Q7kNvgEW-Isy&_nc_oc=AdhEGQ2utmee4vtrTSCJvk_BQB0w2dsLnDimOGRTyJcsvKlaAgOXUw1zK6tdLh0pWDUJ5eJDukz4oejeuq40oubu&_nc_zt=23&_nc_ht=scontent.fhan20-1.fna&_nc_gid=AKXOJKPmLk-Rd8zQ72cJzi0&oh=00_AYBHhTHyZ-iBIJEuz7rBSqnfDFoeBKOGhF2CK0P94mjlWA&oe=67C24EE5"
                  name="KING of MEME VIỆT"
                  time="21"
                  text='MRBEAST CÓ LỜI KHUYÊN DÀNH CHO ISHOWSPEED NẾU ANH ẤY MUỐN ĐI CHƠI VỚI IDOL CỦA MÌNH 😄\n
  Trong một cuộc phỏng vấn với Mike Kent của Dexerto trong podcast Clickbaited, MrBeast thừa nhận rằng Ronaldo đã phá kỷ lục của anh về số lượng người đăng ký YouTube tăng nhiều nhất trong một tháng và thảo luận về việc quay video cùng siêu sao bóng đá người Bồ Đào Nha.
  Sau đó, cuộc trò chuyện chuyển hướng sang Streamer Ishowspeed và sự "ám ảnh" nổi tiếng về Ronaldo của cậu ấy. MrBeast nói:
  "Tôi có nhắc đến Speed và Ronaldo biết cậu ấy là ai, tất nhiên rồi. Anh ấy đã thấy và họ từng gặp nhau thoáng qua vài giây một lần trước đây, tôi tin là vậy.
  Nhưng mà, Speed này, nếu cậu có cơ hội đi chơi với Ronaldo, có lẽ hãy cứ hành động bình thường thôi. Đây là lời khuyên từ một người đã từng ngồi trên ghế sofa của Ronaldo, dành hàng giờ với anh ấy.
  Hãy cứ thoải mái. Hãy là chính mình, Speed. Đừng khóc, đừng phát cuồng, đừng ngửi anh ấy, và chắc chắn đừng s.ủ.a vào mặt anh ấy.'
                  image="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/480768144_680355384560070_593006707847327816_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFM5Jp7jbuM2DjjBmwNskqDxfcgWQFJwSjF9yBZAUnBKIqRpq0rP9VLlaC9_EBLD-Y8pHGXBxsV1Ddw3WShsWqF&_nc_ohc=AXpToSMzCQQQ7kNvgFRM59R&_nc_oc=AdgftL6ANQGyrrO_9hH4FlFhBRxqMD9Na-4D9avO_StoGrmgxl7Y2-voAOD7bXmBraY&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=Ar3EG2TbXFzube0wyJSv00c&oh=00_AYDe1MDmjDvlGmcQJJ7QS6o3n6BHMLLQr0A-ZlUee4rGMQ&oe=67C36757"
                  amountLike="1400"
                  amountComment="180"
                  amountShare="18"
                  />
              </div>
            </div>
            <SidebarHome/>
         </div>
        );
}
export default Home;