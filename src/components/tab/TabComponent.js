import React from "react"
// import ReactDOM from "react-dom"
import TabsControl from "./TabController.js"

class TabComponent extends React.Component{
    render(  ){
        return(
            <div className="container">
                <TabsControl>
                    <div name = "first">
                        第一帧
                    </div>
                    <div name = "second">
                        第二帧
                        <img src="https://ss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1676479072.jpg"></img>
                    </div>
                    <div name = "third">
                        第三帧
                    </div>
                    <div name = "fourth">
                        第四帧
                    </div>
                </TabsControl>
            </div>
        )
    }
}

export default TabComponent