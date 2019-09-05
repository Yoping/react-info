import React, { Component, PropTypes } from 'react';
import { Popover, Menu, Button } from 'zent';

const { MenuItem } = Menu;

class Demo extends Component {
    render() {
        return (
            <Popover
            position={Popover.Position.AutoBottomLeft}
            display="inline"
            cushion={5}>
            <Popover.Trigger.Click>
              <Button type="primary">点击打开菜单</Button>
            </Popover.Trigger.Click>
            <Popover.Content>
              <Menu>
                <MenuItem>食品分类</MenuItem>
                <MenuItem>服装分类</MenuItem>
              </Menu>
            </Popover.Content>
          </Popover>
        );
    }
}

export default Demo;