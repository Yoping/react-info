import React, { Component } from 'react';
import './App.css';
import OrderList from '../orderList/OrderList';
import Header from '../header/Header';
import 'zent/css/index.css';
import '../zentUI/Demo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <OrderList/>
         {/*<TabComponent></TabComponent> */}
         {/*<Button type="primary">my button </Button> */}
         {/*<MainFrame></MainFrame> */}
         {/*<Demo></Demo> */}
         {/*<AntTable></AntTable> */}
         {/*<AntTabs></AntTabs> */}
      </div>
    );
  }
}

export default App;
