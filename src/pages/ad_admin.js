import React, { useEffect, useState } from 'react';
import axios from "axios";
import './../App.css';
function Ad_admin() {
    const [memberInfo, setMemberInfo] = useState([]);
    useEffect(() => {
        axios.get('/manager/member/user')
        .then(response =>{
            const memberData = response.data;
            if (memberData.redirect) {
                console.log("페이지 이동");
                window.location.href = memberData.redirect;
                setMemberInfo(memberData);
              }
        })
        .catch(error => {
            console.error('세션 데이터를 가져오는데 실패함', error);
          });
    },[memberInfo]);
    
    return (
        <div>
            <div className="main_bar">
                재고30 <span>Administration</span>
            </div>
            <div className="menu_bar">
                <div className="ad">
                    관리자 님, 환영합니다!
                </div>
                <div className="content">
                    <div>회원 관리</div>
                    <div className="sub" id="one"><a href="/ad_user">사용자</a></div>
                    <div className="sub"><a href="#">상업자</a></div>
                    <div className="sub"><a href="#" style={{color:"red"}}>관리자</a></div>
                </div>
                <div className="content">
                    <div>콘텐츠 관리</div>
                    <div className="sub"><a href="#">문의 내역</a></div>
                    <div className="sub"><a href="#">공지사항</a></div>
                    <div className="sub"><a href="#">가게 등록</a></div>
                </div>
                <div className="content">
                    <div>인사이트 분석</div>
                    <div className="sub"><a href="#">가게 분석</a></div>
                </div>
                <div className="logout">
                    <div><a href="#" id="logout">로그아웃</a></div>
                </div>
            </div>


            <main>
                <div className="title">전체 멤버(1)</div>
                <div className="tb">
                    <table>
                        <thead>
                            <tr style={{ height: "50px", fontSize: "25px", fontWeight: "700" }}>
                                <td style={{ width: "5%" }}>IDX</td>
                                <td style={{ width: "35%" }}>이름</td>
                                <td style={{ width: "30%" }}>가입일</td>
                                <td style={{ width: "30%" }}>아이디</td>
                            </tr>
                        </thead>
                        <tbody>
                            {memberInfo.map((member,index) => (
                            <tr key={index} style={{ height: "50px", fontSize: "20px" }}>
                                <td style={{ fontWeight: "700" }}>21</td>
                                <td>{member.name}</td>
                                <td>2023.05.11</td>
                                <td>ahj30420@naver.com</td>
                            </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
            </main>
        </div >
    )
}

export default Ad_admin;