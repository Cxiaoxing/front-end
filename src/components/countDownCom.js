import React from "react";
import '../scss/competitions.scss'


function CountDown({ hours = 0, minutes = 0, seconds = 0 }) {
    // useState(initialState)返回一个数组，其中第一项是状态值，第二项是一个更新状态的函数
    // const [paused, setPaused] = React.useState(false);
    // const [over, setOver] = React.useState(false);
    // time 默认值是一个 object
    const [time, setTime] = React.useState({
        hours: parseInt(hours),
        minutes: parseInt(minutes),
        seconds: parseInt(seconds)
    });

    const tick = () => {
        // 暂停，或已结束
        // if (paused || over) return;
        if (time.hours === 0 && time.minutes === 0 && time.seconds === 0)
            return;
            // setOver(true);
        else if (time.minutes === 0 && time.seconds === 0)
            setTime({
                hours: time.hours - 1,
                minutes: 59,
                seconds: 59
            });
        else if (time.seconds === 0)
            setTime({
                hours: time.hours,
                minutes: time.minutes - 1,
                seconds: 59
            });
        else
            setTime({
                hours: time.hours,
                minutes: time.minutes,
                seconds: time.seconds - 1
            });
    };

    React.useEffect(() => {
        // 执行定时
        let timerID = setInterval(() => tick(), 1000);
        // 卸载组件时进行清理
        return () => clearInterval(timerID);
    });

    return (
        <div className="count_down">
            {/* 写字符串拼接不用写加号    {`${time.hours.toString().padStart(2, "0")}:`} */}
            <span className="count_down_item">{time.hours.toString().padStart(2, "0")}</span>
            <span className="colon"> &nbsp; : &nbsp; </span>
            <span className="count_down_item">{time.minutes.toString().padStart(2, "0")}</span>
            <span className="colon">&nbsp; : &nbsp;</span>
            <span className="count_down_item">{time.seconds.toString().padStart(2, "0")}</span>
        </div>
    );
}

export default CountDown;