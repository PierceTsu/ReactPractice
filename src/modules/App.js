/**
 * Created by DELL on 2017/2/17.
 */
import React, {Component} from 'react';
import NavLink from './NavLink';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {Header, Content, Footer} = Layout;
import '../css/App.css';

export default class App extends Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['4']} style={{lineHeight: '64px'}}>
                        <Menu.Item key="1">
                            <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/repos">Repos</NavLink>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <NavLink to="/about">About</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <NavLink to="/calc">Calc</NavLink>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content className="container_out">
                    <div>
                        <h1>Home Page</h1>
                    </div>
                    {this.props.children}
                </Content>
                <Footer className="show_footer">@2017 created by pierce</Footer>
            </Layout>
        );
    }
}