import React, { Component } from "react";
import "./OrderItem.css";
class OrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isCommented: props.data.isCommented,
      comment: props.data.comment || "",
      starsNum: props.data.starNum || 0
    };
  }

  render() {
    const { shop, product, price, img, isCommented } = this.props.data;
    return (
      <div>
        <div className="orderItem">
          <div className="orderItem_imgContainer">
            <img className="orderItem_img" src={img} />
          </div>
          <div className="orderItem_content">
            <div className="orderItem_product">{product}</div>
            <div className="orderItem_shop">{shop}</div>
            <div className="orderItem_detail">
              <div className="orderItem_price">￥{price}</div>
              <div>
                {isCommented ? (
                  <button
                    className="orderItem_btn orderItem_btn_grey"
                    onClick={this.handleOpenEditArea}
                  >
                    已评价
                  </button>
                ) : (
                  <button
                    className="orderItem_btn orderItem_btn_red"
                    onClick={this.handleOpenEditArea}
                  >
                    评价
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div> {this.state.isEditing ? this.renderEditArea() : null}</div>
      </div>
    );
  }

  renderEditArea() {
    return (
      <div className="orderItem_comment_container">
        <textarea
          className="orderItem_comment_editor"
          value={this.state.comment}
          onChange={this.handleCommentChange}
        >
          请输入你的评价
        </textarea>
        {this.renderStarts()}
        <div className="orderItem_submit_div">
          <button
            id="orderItem_submit"
            className="orderItem_btn orderItem_btn_red"
            onClick={this.handleSubmitComment}
          >
            提交
          </button>
          <button
            id="orderItem_cancel"
            className="orderItem_btn orderItem_btn_grey"
            onClick={this.handleCloseEditArea}
          >
            取消
          </button>
        </div>
      </div>
    );
  }

  renderStarts() {
    const { starsNum } = this.state;
    return (
      <div className="orderItem_stars">
        {[1, 2, 3, 4, 5].map((item, index) => {
          const isLight =
            starsNum >= item ? "orderItem_star_red" : "orderItem_star_grey";
          return (
            <span
              key={index}
              className={isLight}
              onClick={this.handleClickStars.bind(this, item)}
            >
              ★
            </span>
          );
        })}
      </div>
    );
  }

  handleOpenEditArea = () => {
    this.setState({
      isEditing: true
    });
  };

  handleCloseEditArea = () => {
    this.setState({
      isEditing: false,
      starNum: this.props.data.starNum,
      comment: this.props.data.comment
    });
  };

  handleCommentChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handleClickStars = starsNum => {
    this.setState({
      starsNum: starsNum
    });
  };
  
  handleSubmitComment = () => {
    const { id } = this.props.data;
    const { comment, starsNum } = this.state;
    this.setState({
      isEditing: false
    });
    console.log("-----" + id);
    this.props.onSubmitComment(id, comment, starsNum);
  };
}

export default OrderItem;
