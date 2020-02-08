import React from 'react';

class Feedback extends React.Component{
    render(){

        return(
            <div>
                <img src="" alt="顔写真"/>
                <ul>
                    <li>
                        話の内容
                        <input type="range" value="1" min="1" max="10"
                        oninput="document.getElementById('gesture').value=this.value"/>
                        <output id="gesture">1</output>
                    </li>
                    <li>
                        使う言葉
                        <input type="range" value="1" min="1" max="10"
                        oninput="document.getElementById('gesture').value=this.value"/>
                        <output id="gesture">1</output>
                    </li>
                    <li>
                        ジェスチャー
                        <input type="range" value="1" min="1" max="10"
                        oninput="document.getElementById('output2').value=this.value"/>
                        <output id="output2">1</output>
                    </li>
                    <li>
                        表情
                    </li>
                    <li>
                        声の調子
                    </li>
                    <li>
                        促す
                    </li>
                    <li>
                        姿勢
                    </li>
                    <li>
                        質問
                    </li>
                    <li>
                        相手の非言語
                    </li>
                </ul>

            </div>
        )
    }
}

export default Feedback;