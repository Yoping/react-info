import React, { Component } from "react";
import { Tabs } from "antd";
import "./AntTabs.css"
import { red } from "ansi-colors";

const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}
class AntTabs extends Component {
  
  render() {
    const myStyle={
      backgroundColor:red
    }
    return (
      <Tabs tabBarStyle={myStyle} defaultActiveKey="1" onChange={callback} className="hh">
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    );
  }
}

export default AntTabs;
