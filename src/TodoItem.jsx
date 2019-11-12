import React from "react";

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{width:"100%", height:"120px",    borderRadius: "50px", backgroundColor:"white"}}>
                <span>{this.props.value}</span>
                <button  onClick={() => this.props.change(this.props.index, prompt("수정할 텍스트를 입력해주세요"))}>수정</button>
                <button onClick={() => this.props.handleClickRemove(this.props.index)}>삭제</button>
            </div>
        );
    }
}

export default TodoItem;