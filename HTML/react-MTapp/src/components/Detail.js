import React, { Component } from 'react';
import {WhiteSpace, SearchBar, Button,NavBar, Icon, Grid, Flex} from 'antd-mobile';
import DImg from './Detail/DImg';
import 'whatwg-fetch';
import './../asset/css/Detail.css'

class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            row:{},
            result:{}
        }
    }

    componentWillMount(){
        fetch('http://www.xiechenxi.cn/welcome/detail/'+this.props.match.params.id)
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                this.setState({
                    row:data.row,
                    results:data.results
                });
                console.log(data);
            })
    }

    render(){
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {
                        this.props.history.goBack();
                    }}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >
                    <SearchBar placeholder="Search" maxLength={8} />
                </NavBar>
                <DImg row={this.state.row}></DImg>
            </div>
        )
    }
}

export default Detail;