import React, { Component } from 'react';
import "./nav.scss"
export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navTitle: "error仓库",
            navTabList: [
                {
                    title: "首页",

                },
                {
                    title: "归档",

                },
                {

                    title: "关于",

                }
            ],
            authorInfo: {
                headImg: "http://e.hiphotos.baidu.com/zhidao/pic/item/c83d70cf3bc79f3dbcbaa7b3bda1cd11738b29dd.jpg",
                name: "羽浪",
                say:{
                    cn:"hello world!",
                    en:"你好，代码"
                }
            }

        };
    }

    render() {
        return (
            <div className="nav">
                <div className="nav_title">{this.state.navTitle}</div>
                <div>
                    {this.state.navTabList.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="nav_title_text">{item.title}</div>
                            </div>
                        );
                    })}
                </div>
                <div className="nav_author_info">
                    <img src={this.state.authorInfo.headImg}></img>
                    <div>
                        {this.state.authorInfo.name}
                    </div>
                    <div>
                        <span>{this.state.authorInfo.say.cn}</span>
                        <span>{this.state.authorInfo.say.en}</span>
                    </div>
                </div>
            </div>
        )
    }


}
