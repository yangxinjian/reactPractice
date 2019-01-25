import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom'

import './index.scss'

class A extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                Component A
                
                <Switch>
                    <Route  
                        exact /* 必须完全符合路由判断 */
                        path={`${this.props.match.path}`}
                        render={(route) => {
                            return <div>当前组件是不带参数的A</div>
                        }}
                    />
                    <Route 
                        
                        path={`${this.props.match.path}/sub`} /* 子页面 */
                        render={(route) => {
                            return <div>当前组件是sub</div>
                        }}
                    />
                    <Route 
                    path={`${this.props.match.path}/:id`}  /* 带的参数 */
                    render={(route) => {
                        return <div>当前组件是带参数的A，参数是 : {route.match.params.id}</div>
                    }}/>
                </Switch>
            </div>
        )
    }
}
class B extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>Component B</div>
        )
    }
}
class Wrapper extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div>
                <Link to="/a" >组件A</Link>
                <br />
                <Link to="/a/123" >带参数的组件A</Link>
                <br />
                <Link to="/a/sub" >/a/sub子路径</Link>
                <br />
                <Link to="/b" >组件B </Link>
                {this.props.children}
            </div>
        )
    }
}

ReactDOM.render(
    <Router>
         <Wrapper>
            <Route path="/a" component={A}/>
            <Route path="/b" component={B}/>
        </Wrapper>
    </Router>
   ,
    document.getElementById('app')
)