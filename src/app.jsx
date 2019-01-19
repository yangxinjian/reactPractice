import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

/* 组件中的事件 */
class Component extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            age: 18
        }
        this.addAge = this.addAge.bind(this)
    }
    addAge () {
        this.setState({
            age: this.state.age + 1
        })
    }
    render () {
        return (
            <div>
                <h1>i am {this.state.age}</h1>
                <button onClick={this.addAge}>过年了</button>
            </div>
        )
    }
}
ReactDOM.render(
    <Component />,
    document.getElementById('app')
)
/* 结束 组件中的事件 */

/* 组件中的父组件传参 */
// class Component extends React.Component{
//     constructor (props) {
//         super(props)
//     }
//     render () {
//         return <h1>i am a {this.props.name}</h1>
//     }
// }
// ReactDOM.render(
//     <Component name="zhuzhu"/>,
//     document.getElementById('app')
// )
/* end 组件中的父组件传值 */

/* 组件内部饮用变量值 */
// class Component extends React.Component{
//     constructor (props) {
//         super(props);
//         this.state = {
//             name: 'pig'
//         }
//     }
//     render () {
//         setTimeout(() => {
//             this.setState({
//                 name: 'pig zhuzhu'
//             })
//         },2000)  // 改变初始定义值
//         return <h1>i am a {this.state.name}</h1>
//     }
// }
// ReactDOM.render(
//     <Component />,
//     document.getElementById('app')
// )
/* end 组件内部饮用变量值 */

/* 定义组件 */
// function Component () {
//     return <h1>i am a pig</h1>
// }
// class ES6Component extends React.Component {
//     render () {
//         return <h1>i am a pig in es6</h1>
//     }
// }
// ReactDOM.render(
//     <div>
//         <Component />
//         <ES6Component />
//     </div>,
//     document.getElementById('app')
// )
/* 定义组件 */

/* 语法 */
// let jsx = <div className="jsx" >jex...</div>  // 添加样式

// let name = "pig"
// let jsx = <div>I am a {name}</div> // 添加变量

// let truth = false  // 添加条件判断
// let jsx = (
//     <div>
//         {/* 条件注释 */}
//         {
//             truth ? <p>i am a pig</p>: <p>i am not a pig</p>
//         }
//     </div>
// )

// let names = ['pig', 'egg', 'dog'] // 添加数组的判断
// let jsx = (
//     <div>
//         {
//             names.map((name,index) => <p key={index}>i am {name}</p>)
//         }
//     </div>
// )
/* end 语法 */


/* 第一次尝试代码 */

// import 'font-awesome/css/font-awesome.min.css'
// import './index.css'
// import './index.scss'

// ReactDOM.render(
//     <div>
//         <i className="fa fa-address-book"></i>
//         <h1>hello,pig</h1>
//     </div>
//     ,
//     document.getElementById('app')
// )

/* end 第一次尝试代码 */


// ReactDOM.render(
//     jsx,
//     document.getElementById('app')
// )