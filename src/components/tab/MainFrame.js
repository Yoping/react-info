import { Menu, Icon, Button } from "antd";
import React, { Component } from "react";
import "./MainFrame.css"
import { DatePicker, MonthPicker, DateRangePicker } from 'zent'
import TabComponent from "./TabComponent";

const SubMenu = Menu.SubMenu;

class MainFrame extends Component {
  state = {
    collapsed: false
  };


  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { dateValue, monthValue, rangeValue, max } = this.state;
    return (
      <div style={{ width: 256, margin: 100 }}>
      <TabComponent></TabComponent>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
           <Menu.Item key="1" >
            <Icon type="android" />
            <span>预约管理</span>
          </Menu.Item>
          <Menu.Item key="2" className="menu_item">
            <Icon type="apple" />
            <span>商品管理</span>
          </Menu.Item>
          <Menu.Item key="3" className="menu_item">
            <Icon type="windows" />
            <span>订单管理</span>
          </Menu.Item>
          <Menu.Item key="4" className="menu_item">
            <Icon type="aliwangwang" />
            <span>会员中心</span>
          </Menu.Item>
          <Menu.Item key="5" className="menu_item">
            <Icon type="qq" />
            <span>数据中心</span>
          </Menu.Item>
          <Menu.Item key="6" className="menu_item">
            <Icon type="wechat" />
            <span>资产管理</span>
          </Menu.Item>
          <Menu.Item key="7" className="menu_item">
            <Icon type="zhihu" />
            <span>设置</span>
          </Menu.Item>
        </Menu>
        <h>fwkeiwiefi</h>
        <div>
        <DatePicker
          className="zent-picker-demo"
          value={dateValue}
          defaultValue="1990-01-01"
          onChange={this.onChangeDate}
        />
        <br />
        <MonthPicker
          className="zent-picker-demo"
          value={monthValue}
          defaultValue="2010-07"
          onChange={this.onChangeMonth}
        />
        <br />
        <DateRangePicker
          className="zent-picker-demo"
          value={rangeValue}
          defaultValue={["2016-01-01", "2017-01-01"]}
          onChange={this.onChangeRange}
          />
      </div>
      </div>
    );
  }
  onChangeDate = (val) => {
    this.setState({
      dateValue: val
    })
  }

  onChangeMonth = (val) => {
    this.setState({
      monthValue: val
    })
  }

  onChangeRange = (val) => {
    this.setState({
      rangeValue: val
    })
  }
}

export default MainFrame;
