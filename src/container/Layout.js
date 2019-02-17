import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Row, Col } from 'antd';
// import { MessagesList } from "./MessagesList"
// import { AddMessage } from "./AddMessage"

import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import Widgetlayout from './Widget';

import './Layout.css';
import logo from '../MainView2/header/logo_button.png';

const {
  Header, Content, Footer, Sider,
} = Layout;


const CustomLayout = (props) => {
  
  

  return(
      <Layout className="box" id="layout1">
        <Sider
          breakpoint="xxl"
          collapsedWidth="0"
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          {/* <div className="logo" /> */}
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Icon type="home" />
              <span className="nav-text">홈</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="upload" />
              <span className="nav-text">퐁당</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="user" />
              <span className="nav-text">라이브톡</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="shop" />
              <span className="nav-text">굿즈풀</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#000000', padding: 0 }} />
          {/* <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}> */}
          
            <div className="box">
              {/* <Row> */}
              <iframe width="1200" height="650" src="https://www.youtube.com/embed/tLfLU6-9lxY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* <Col className="box" id="movie" span={6} push={18}>col-18 col-push-18
                
                </Col>
                <Col span={18} pull={6}>col-6 col-pull-6 */}
                <div id="container">
                  {/* <aside id="sidebar" >Users</aside> */}
                  <section id="main">
                    <Widgetlayout 
                    
                    
                    
                    />
                  </section>
                </div>
                {/* </Col>
              </Row> */}
            </div>
              
            {/* </div>
          </Content> */}
          {/* <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer> */}
        </Layout>
      </Layout>
    );
}

export default CustomLayout;