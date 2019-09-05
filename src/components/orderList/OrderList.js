import React, { Component } from 'react';
import OrderItem from '../orderItem/OrderItem'
const mydata=[
    {
        id:1,
        shop:"江味龙虾馆",
        img:"https://img.meituan.net/msmerchant/4f76df9c87f289ea4f506884bcc476e43377756.png",
        product:"麻辣小龙虾",
        price:129.9,
        isCommented:false,
    },
    {
        id:1,
        shop:"牛逼火锅",
        img:"http://p1.meituan.net/deal/9d915a381510046034735cfbe95a21dd94019.jpg%40300w_225h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20",
        product:"红八方柴火铁锅炖",
        price:229.8,
        isCommented:true,
    },
    {
        id:1,
        shop:"陕西烧肉",
        img:"https://img.meituan.net/msmerchant/d37c4bb896e0bd636a0e914ca76b7f7164317.jpg%40280w_212h_1e_1c_1l%7Cwatermark%3D0",
        product:"大阪烧肉BAKA一代",
        price:39.9,
        isCommented:false,
    },
    {
        id:1,
        shop:"马路边边麻辣烫(白石洲店)",
        img:"http://p0.meituan.net/bbia/036d438624b15fca936435f9ef44a0d4174222.jpg%40240w_180h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20",
        product:"小唧唧麻辣烫",
        price:89.9,
        isCommented:true,
    },
    {
        id:1,
        shop:"串功烧烤",
        img:"https://img.meituan.net/msmerchant/24b45f8b1815c86ae3d1aa9699315f72365769.jpg%40280w_212h_1e_1c_1l%7Cwatermark%3D0",
        product:"吃了还想的吃的烧烤",
        price:88.8,
        isCommented:true,
    }
]
class OrderList extends Component {


    constructor(props){
        super(props);
        this.state={data:[]};
    }
    componentDidMount(){
        fetch('/httpServer/orderList.json').then(res=>{
            if(res.ok){
                res.json().then(data=>{
                    this.setState({
                        data
                    })
                })
            }else{
                console.log("返回数据失败！");
            }
        })
    }

    render() {
        return (
            <div>
                {/* 使用单条本地数据 */}
                {/* <OrderItem data={mydata}/> */}

                {/* 使用本地数据列表 */}
                {/* {
                    mydata.map(item => {
                        return <OrderItem  key={item.id} data={item}/>
                    })
                } */}
                

                {
                    this.state.data.map(item => {
                        return <OrderItem  key={item.id} data={item} onSubmitComment={this.handleSubmitComment}/>
                    })
                }
            </div>
        );
    }

    handleSubmitComment=(id,comment,starsNum)=>{
        // fetch('/saveCommentApi').then(()=>{

        // })
        const newData=this.state.data.map(item=>{
            return item.id===id
            ?{
                ...item,
                comment,
                starsNum,
                isCommented:true,
            }
            :item;
        });
        this.setState({
            data:newData
        })
    }
}

export default OrderList;