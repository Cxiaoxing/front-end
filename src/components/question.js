import React from 'react'
import { Card, WingBlank, WhiteSpace, Badge, Tag } from 'antd-mobile';
import { Link } from 'react-router-dom'


class Question extends React.Component {
    render() {
        return (
            this.props.detail.map((item, index) => {
                return (
                    <Link
                        key={index}
                        // 弹出新的选项卡只能用search来传递数据，单页面的话可以使用state
                        // 注意，此处search传递是以URL拼接的方式传递传递长度根据浏览器限制来的，只能传递字符串，
                        // 还有search传递过去的参数会默认追加一个? e.g search?id=1
                        // state则没有限制，可直接传递obj
                        to={{ pathname: "/question_detail", search: JSON.stringify(item.id) }}
                        // 当target="_blank"打开新页面的时候，state内容无法传递
                        target="_blank"
                    >
                        {/* 左右间距 */}
                        <WingBlank size="lg">
                            {/* 上下间距 */}
                            {/* <WhiteSpace size="lg" /> */}
                            <Badge className="card" text={"难度" + item.difficulty.toString()} corner>
                                <Card full>
                                    <Card.Header
                                        title={item.title}
                                        thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601188047950&di=b78713b1899a015e245bbbc0eecc6a56&imgtype=0&src=http%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20190110%2Fourmid%2Fpngtree-vector-code-optimization-icon-png-image_312562.jpg"
                                        extra={<span>{`Q${item.id.toString().padStart(4, "0")}`}</span>}
                                    />
                                    <Card.Body>
                                        <div className="tag-container">
                                            {item.content}
                                            {item.tags.map(e => { return (<Tag small>{e}</Tag>) })}
                                        </div>
                                    </Card.Body>
                                    <Card.Footer content={"通过率：" + item.passing_rate} extra={<div>{"提交总数：" + item.submit_number}</div>} />
                                </Card>
                            </Badge>
                            <WhiteSpace size="lg" />
                        </WingBlank>
                    </Link>
                )
            })
        )
    }

    toDetail = (id) => {
        this.props.history.push({ pathname: "../routers/question_detail", search: JSON.stringify(id) });
    }
}

export default Question;