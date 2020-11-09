import React from 'react';
import '../scss/questions.scss';

// codemirror
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/lib/codemirror.css';  // 引入基本样式类型
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
// 引入主题颜色(可选)
import 'codemirror/theme/ambiance.css';
// 引入语言类型(可选)
import 'codemirror/mode/sql/sql';
// 按ctrl+空格进行提示功能
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
// 导入提示语言类型
// import 'codemirror/addon/hint/sql-hint.js';



class QuestionDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            content: {
                "description": "This is the simplest a+b problem.",
                "input": "Input two integers in two lines representing a and b.",
                "output": "Ouput the calculation result.",
                "examples": [
                    {
                        "inputExample": "1\n2\n",
                        "outputExample": "3\n"
                    },
                    {
                        "inputExample": "4\n-10\n",
                        "outputExample": "-6\n"
                    }
                ],
            },
            codemirror: {
                options: {
                    lineNumbers: true,        // 显示行数
                    indentUnit: 4,            // 缩进单位
                    tabSize: 4,               // tab 宽度
                    styleActiveLine: true,    // 当前行背景高亮
                    matchBrackets: true,      // 括号匹配
                    mode: 'python',           // python模式
                    lineWrapping: true,       // 是否自动换行
                    theme: 'ambiance',        // 使用theme模版
                    extraKeys: { "Ctrl": "autocomplete" },   //自动提示配置
                },
                code: '// 在此输入你的代码\n'      //默认代码
            }
        }
    }

    componentDidMount() {
        // debugger
        // 从ocation中取出search
        let search = this.props.history.location.search
        // TODO 调试完毕以后需要在这里增加判断，如果该参数为空则非正常途径进入需要跳转到账单主页
        // 默认前面有一个?,切掉
        search = search.substr(1, search.length);

        // 因为传递的有中文，所以此处需要decodeURI进行URL解码
        // const searchObj: BillDetail = JSON.parse(decodeURI(search));
        // console.log(searchObj);
        // 将处理完毕的数据更新至state，并渲染到页面

        this.setState({
            id: search
        })
    }

    render() {
        return (
            <div className="question_detail">
                <span>题目 {this.state.id}</span>
                <div className="detail">
                    <h1>题目描述</h1>
                    <div>{this.state.content.description}</div>
                    <h2>输入格式</h2>
                    <div>{this.state.content.input}</div>
                    <h2>输出格式</h2>
                    <div>{this.state.content.output}</div>
                    <h2>输入输出样例</h2>
                    {this.state.content.examples.map((item, index) => {
                        return (
                            <div key={index}>
                                <h3>样例输入 {index + 1}</h3>
                                <div className="example">{item.inputExample}</div>
                                <h3>样例输出 {index + 1}</h3>
                                <div className="example">{item.outputExample}</div>
                            </div>
                        )
                    })}
                </div>
                <br />
                <br />
                <div className="code">
                    <h1 id="codeTitle">代码实现</h1>
                    <CodeMirror
                        className="codemirror"
                        // ref={this.useRef}
                        value={this.state.codemirror.code}
                        options={this.state.codemirror.options}
                        onUpdate={(code)=>this.handleCodeChange(code)}
                        height={(document.documentElement.clientHeight || document.body.clientHeight) - 50}
                    />
                    <div className="codeButton">
                        <button type="ghost" id="test">测试</button>
                        <button type="primary" id="submit">提交</button>
                    </div>
                </div>
            </div>
        )
    }

    handleCodeChange = (code) => {
        console.log(code)
        // const codeMirror = this.refs.editor.getCodeMirror();
        // console.log(codeMirror.getSelection());
        // codeMirror.setValue(this.state.newCode);
        // codeMirror.getValue(this.state.newCode);
    }

}

export default QuestionDetail;