import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

class Child extends React.Component{
    // 构造函数
    constructor (props) {
        super(props)
        this.state = {
            data: 'oldzhuzhu'
        }
        console.log('这里是初始化数据constructor')
    }
    componentWillMount () {
        // 组件渲染前
        console.log('componentWillMount')
    }
    componentDidMount () {
        // 组件渲染结束
        console.log('componentDidMount')
    }
    componentWillReceiveProps () {
        // 将要接受父组件传来的props触发
        console.log('componentWillReceiveProps')
    }
    shouldComponentUpdate () {
        // 子组件是不是应该更新
        console.log('shouldComponentUpdate')
        return true
        // 如果是false，后面的update就不会跟着更新
    }
    componentWillUpdate () {
        // 组件将要更新
        console.log('componentWillUpdate')
    }
    componentDidUpdate () {
        // 组件更新完成
        console.log('componentDidUpdate')
    }
    componentWillUnmount () {
        // 组件将要销毁调用
        console.log('componentWillUnmount')
    }
    // 点击事件
    handleClick () {
        console.log('这里是更新数组')
        this.setState({
            data: 'zhuzhuzhu'
        })
    }
    // 渲染
    render () {
        console.log('render')
        return (
            <div>
                {this.state.data}
                接收到的props: {this.props.data}
                <button onClick={() => {this.handleClick()}}>更新组件</button>
                
            </div>
            
        )
    }
}

class Father extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            data: 'old props',
            show: true
        }
    }
    changeData () {
        this.setState({
            data: 'new props'
        })
    }
    byeChild () {
        console.log('毁掉子组件')
        this.setState({
            show: false
        })
    }
    render () {
        return (
            <div>
                {
                    this.state.show ? <Child data={this.state.data}/> : null
                }
                <button onClick={(e) => {this.changeData(e)}}>改变子组件的props</button>
                <button onClick={(e) => {this.byeChild(e)}}>让子组件消失</button>
            </div>
        )
    }
}


ReactDOM.render(
    <Father />,
    document.getElementById('app')
)
