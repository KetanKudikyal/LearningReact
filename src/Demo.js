// components are 2 types 
// functional component 
// class component

import './Demo.css';
import React,{Component} from 'react';
// if you want to play with the DOM you need to import 
// react dom
import ReactDOM from 'react-dom';

/**
 * props get passed to the component 
 * props are immutable cannot be changed
 * props in functional components is used in this way
 * props.name thats it
 * and  in class component it is used in 
 * this.props.name
 */
const demo = (props) =>{
    return  <div className="maindiv_style">
    <h1>Hello {props.name}</h1>
    <p>busbnuxusbuxbuabxb</p> 
    </div>
}
class Demo extends Component{
    // render means show so inorder to display something onn the webpage we need to call the render function
    render(){
        return  <div className="maindiv_style">
                <h1>Hello {this.props.name}</h1>
                <p>busbnuxusbuxbuabxb</p> 
                </div>

            /**Write
             * <p>Hedewdnn</p>
             * this wont run because we havent javascript extension
             * JSX comes into play 
             * Jsx is like html but not html 
             * and this is the reason reatc 
             * creates its own virtual world
             * 
             * */
            
        
    }

}
// always remember whenever you create a component you 
//make sure you export defsult demo
export default Demo;