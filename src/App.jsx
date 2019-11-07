import React from 'react';
import './App.css';

function App() {
    return (
        <div>
        <div className="title">
            <header>
<img src="https://www.google.com/images/branding
/googlelogo/1x/googlelogo_color_272x92dp.png" />
            </header>

        </div> 
        <div className="search">
        <section>
        <div className="searchbar">
        <img src="https://us.123rf.com/450wm/dxinerz/dxinerz1507/dxinerz150700416/42792099-%EA%B2%80%EC%83%89-%EC%B0%BE%EA%B8%B0-google-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%B2%A1%ED%84%B0-image-can-%EB%98%90%ED%95%9C-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%9D%B8%ED%84%B0%ED%8E%98%EC%9D%B4%EC%8A%A4%EC%97%90-%EC%82%AC%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EC%8A%B5%EB%8B%88%EB%8B%A4-%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%95%B1-%EC%9B%B9-%EC%95%B1-%EB%B0%8F-%EC%9D%B8%EC%87%84-%EB%A7%A4%EC%B2%B4%EC%97%90-%EC%A0%81%ED%95%A9%ED%95%A9%EB%8B%88%EB%8B%A4-.jpg?ver=6"
         alt="search" id="searchemot"/>
         <div id="Text">Google 검색 또는 URL 입력</div>
         <img src ="https://www.botcopy.com/wp-content/uploads/bb-plugin/cache/google-mic-icon-1024x1024-square.png" alt="record" id="searchemot" />
      </div>
      <div className="button">
      <input type = "button" value = "Google 검색" id="SearchButton"/>
      <input type = "button" value = "I'm Feeling Lucky" id="LuckyButton"/>
      </div> 
        </section>

        </div>
        <div className="bottom">
            <div>
                <div className="bot">대한민국</div>  
                    <div className="bot1">
                        <span className="s1">광고</span>
                        <span className="s2">비즈니스</span> 
                        <span className="s3">Google 정보</span> 
                        <span className="s4">검색의 원리</span>
                    </div>
                </div>
            <div>
            <div className="bot2">
            <span className="s5">개인정보처리 방침</span>
            <span className="s6">약관</span>
            <span className="s7">설정</span>
            </div>
        </div>
        </div>      
        </div>        
    );
}

export default App;