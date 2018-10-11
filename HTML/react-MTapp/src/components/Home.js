import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {WhiteSpace, SearchBar, Button,NavBar, Icon, Grid, Flex} from 'antd-mobile';
import Container from './Container';
import ListItem from './ListItem';
import 'whatwg-fetch';
import '../asset/css/Home.css';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            data:[
                {
                    icon:require('./../asset/img/img1.png'),
                    text:"美食"
                },
                {
                    icon:require('./../asset/img/img2.png'),
                    text:"电影"
                },
                {
                    icon:require('./../asset/img/img3.png'),
                    text:"酒店"
                },
                {
                    icon:require('./../asset/img/img4.png'),
                    text:"娱乐"
                },
                {
                    icon:require('./../asset/img/img5.png'),
                    text:"外卖"
                },
                {
                    icon:require('./../asset/img/img6.png'),
                    text:"ktv"
                },
                {
                    icon:require('./../asset/img/img7.png'),
                    text:"周边游"
                },
                {
                    icon:require('./../asset/img/img9.png'),
                    text:"丽人"
                },
                {
                    icon:require('./../asset/img/img10.png'),
                    text:"小吃"
                },
                {
                    icon:require('./../asset/img/img2.png'),
                    text:"机票"
                },
                {
                    icon:require('./../asset/img/img3.png'),
                    text:"美食"
                },
                {
                    icon:require('./../asset/img/img4.png'),
                    text:"电影"
                },
                {
                    icon:require('./../asset/img/img5.png'),
                    text:"美食"
                },
                {
                    icon:require('./../asset/img/img6.png'),
                    text:"电影"
                }
            ],
            productList:[]
        }
    }
    componentWillMount(){
        fetch('http://www.xiechenxi.cn/')
            .then((response)=>{
                return response.json()
            }).then((data)=>{
                this.setState({
                    productList:data
                });
        })
    }
    render(){
        return (
            <div>
                <div>
                    <NavBar
                        mode="dark"
                        leftContent="哈尔滨"
                        rightContent={[<Icon key="1" type="ellipsis" />]}
                    >
                        美团
                    </NavBar>

                </div>

                <SearchBar placeholder="Search" maxLength={8} />

                <Grid data={this.state.data} isCarousel columnNum={5} hasLine={false}/>

                <Flex>
                    <Flex.Item>
                        <h3 className="active-title active-title-1">我们约会吧</h3>
                        <p className="active-text">恋人家人好朋友</p>
                        <img className="active-img" src={require("./../asset/img/activity1.png")} alt=""/>
                    </Flex.Item>
                    <Flex.Item>
                        <h3 className="active-title active-title-2">低价超值</h3>
                        <p className="active-text">十元惠生活</p>
                        <img className="active-img active-img-2" src={require("./../asset/img/activity2.jpg")} alt=""/>
                    </Flex.Item>
                    <Flex.Item>
                        <h3 className="active-title active-title-3">工作简餐</h3>
                        <p className="active-text">实惠方便选择多</p>
                        <img className="active-img" src={require("./../asset/img/activity3.png")} alt=""/>
                    </Flex.Item>
                </Flex>

                <WhiteSpace size='lg'></WhiteSpace>

                <Container title='猜你喜欢'>
                    {
                        this.state.productList.map((elem, index) => {
                           return (

                               <ListItem key={elem.product_id} elem={elem}></ListItem>


                           )
                        })
                    }
                </Container>

                <Button >click</Button>
            </div>
        )
    }
}

export default Home;