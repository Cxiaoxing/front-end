import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import '../scss/competitions.scss'


class Competition extends React.Component {
    render() {
        return (
            this.props.detail.map((item, index) => {
                return (
                    <div key={index} onClick={() => { this.toCompetitionDetail(item.id) }}>
                        <WingBlank size="lg">
                            {/* <WhiteSpace size="lg" /> */}
                            <Card full>
                                <Card.Header
                                    title={item.tag}
                                    className="card_header"
                                    // thumb="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601188047950&di=b78713b1899a015e245bbbc0eecc6a56&imgtype=0&src=http%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20190110%2Fourmid%2Fpngtree-vector-code-optimization-icon-png-image_312562.jpg"
                                    extra={<span>{`C${item.id.toString().padStart(4, "0")}`}</span>}
                                />
                                <Card.Body className="card_body">
                                    <div className="tag-container">
                                        {item.title}
                                    </div>
                                </Card.Body>
                                <Card.Footer
                                    className="card_footer"
                                    content={`时间：${item.start_time}持续时间：${item.during_time}小时`}
                                    extra={<div>{"参与人数：" + item.participant_number}</div>}
                                />
                            </Card>
                            <WhiteSpace size="lg" />
                        </WingBlank>
                    </div>
                )
            })
        )
    }

    toCompetitionDetail = (index) => {
        window.location.href = '/#/competition_detail?' + String(index)
    }
}


export default Competition;