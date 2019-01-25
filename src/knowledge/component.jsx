import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'


/* 兄弟组件之间相互传递 */
// class Child1 extends React.Component{
//     constructor (props) {
//         super(props)
//         this.state = {
//             color1: 'red'
//         }
//     }
//     changeMyBrotherColor (props) {
//         this.props.change2Color(this.state.color1)
//     }
//     render () {
//         return (
//             <div>
//                 <h2>我是孩子1</h2>
//                 <button onClick={(e) => {this.changeMyBrotherColor(e)}}>我要改变我弟弟的颜色咯</button>
//             </div>
//         )
//     }
// }
// class Child2 extends React.Component{
//     constructor (props) {
//         super(props)
//     }
//     render () {
//         return (
//             <div>
//                 <h2 style={{color: this.props.color22}}>我是孩子2</h2>
//             </div>
//         )
//     }
// }
// class Father extends React.Component{
//     constructor (props) {
//         super(props)
//         this.state = {
//             color2: 'yellow'
//         }
//     }
//     changColor (colorsss) {
//         this.setState({
//             color2: colorsss
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <h1>这是我的孩子们</h1>
//                 <Child1 change2Color={(color) => {this.changColor(color)}}/>
//                 <Child2 color22={this.state.color2}/>
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <Father />,
//     document.getElementById('app')
// )
/* end 兄弟组件之间相互传递 */

/* 子组件传给父组件值 */
// class Father extends React.Component{
//     constructor (props) {
//         super(props)
//         this.state = {
//             bgColor: 'red'
//         }
//     }
//     onChangeColor (color) {
//         this.setState({
//             bgColor: color
//         })
//     }
//     render () {
//         return (
//             <div style={{background: this.state.bgColor}}>
//                 <h1>我是爸爸</h1>
//                 <Child changeColor={(color) => {this.onChangeColor(color)}}/>
//             </div>
//         )
//     }
// }
// class Child extends React.Component{
//     constructor (props) {
//         super(props)
//     }
//     changeColors (props) {
//         this.props.changeColor('blue')
//     }
//     render () {
//         return (
//             <div>
//                 <h1>我是孩子哦</h1>
//                 <button onClick={(e) => this.changeColors(e)}>点击换我爸爸的颜色</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <Father />,
//     document.getElementById('app')
// )
/* end 子组件传给父组件值 */


/* 容器组件中嵌套组件 通过props的children获取所有传值内容 */
// class Component extends React.Component{
//     constructor (props) {
//         super(props);
//         this.state = {
//             age: 18
//         }
//     }
//     changeValue (e) {
//         this.setState({
//             age: e.target.value
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <h1>i am {this.state.age} years old</h1>
//                 <input type="text" onChange={(e) => {this.changeValue(e)}} />过年了
//             </div>
//         )
//     }
// }
// class Title extends React.Component {
//     constructor (props) {
//         super(props)
//     }
//     render () {
//         return <h1>{this.props.children}</h1>
//     }
// }
// class App extends React.Component {
//     render () {
//         return (
//             <div>
//                 <Title>
//                     <span>i am so hungrey</span>
//                     <a href="">link</a>
//                 </Title>
//                 <Component />
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// )
/* end 容器组件中嵌套组件 */


/* 容器组件中嵌套组件 */
// class Component extends React.Component{
//     constructor (props) {
//         super(props);
//         this.state = {
//             age: 18
//         }
//     }
//     changeValue (e) {
//         this.setState({
//             age: e.target.value
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <h1>i am {this.state.age} years old</h1>
//                 <input type="text" onChange={(e) => {this.changeValue(e)}} />过年了
//             </div>
//         )
//     }
// }
// class Title extends React.Component {
//     constructor (props) {
//         super(props)
//     }
//     render () {
//         return <h1>{this.props.title}</h1>
//     }
// }
// class App extends React.Component {
//     render () {
//         return (
//             <div>
//                 <Title title="apppppp"/>
//                 <Component />
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// )
/* end 容器组件中嵌套组件 */


/* 组件中嵌套组件 */
// class Component extends React.Component{
//     constructor (props) {
//         super(props);
//         this.state = {
//             age: 18
//         }
//     }
//     changeValue (e) {
//         this.setState({
//             age: e.target.value
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <h1>i am {this.state.age} years old</h1>
//                 <input type="text" onChange={(e) => {this.changeValue(e)}} />过年了
//             </div>
//         )
//     }
// }
// class App extends React.Component {
//     render () {
//         return (
//             <div>
//                 <h1>aopp</h1>
//                 <Component />
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// )
/* end 组件中嵌套组件 */

/* 组件中的input输入事件 */
// class Component extends React.Component{
//     constructor (props) {
//         super(props);
//         this.state = {
//             age: 18
//         }
//     }
//     changeValue (e) {
//         this.setState({
//             age: e.target.value
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <h1>i am {this.state.age} years old</h1>
//                 <input type="text" onChange={(e) => {this.changeValue(e)}} />过年了
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <Component />,
//     document.getElementById('app')
// )
/* end 组件中的input输入事件 */

/* 组件中的事件 方法二 */
// class Component extends React.Component{
//     constructor (props) {
//         super(props);
//         this.state = {
//             age: 18
//         }
//     }
//     addAge () {
//         this.setState({
//             age: this.state.age + 1
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <h1>i am {this.state.age} years old</h1>
//                 <button onClick={(e) => {this.addAge(e)}}>过年了</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <Component />,
//     document.getElementById('app')
// )
/* end 组件中的事件 方法二 */

/* 组件中的事件 方法一 */
// class Component extends React.Component{
//     constructor (props) {
//         super(props);
//         this.state = {
//             age: 18
//         }
//         this.addAge = this.addAge.bind(this)
//     }
//     addAge () {
//         this.setState({
//             age: this.state.age + 1
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <h1>i am {this.state.age}</h1>
//                 <button onClick={this.addAge}>过年了</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <Component />,
//     document.getElementById('app')
// )
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