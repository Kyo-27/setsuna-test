import React from 'react';

class Mypage1 extends React.Component{
    render(){
        var name = "坂本 恭平"
        var challengeList1 = ""
        var challengeList2 = ""
        var challengeList3 = ""

        return(
            <div className="feedback">
                <img src="" alt="顔写真"/>
                <p>{name}</p>
                <button>設定</button>
                <ul>
                    <li>
                        質問力をつける
                    </li>
                    <li>
                        積極的に話す
                    </li>
                </ul>
            </div>
        )
    }
}

export default Mypage1;