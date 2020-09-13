import React, {Component} from 'react';
import './Avatar.css';
import 'tachyons';
import './Avatarlist.js'

//import AvatarList from './Avatarlist';
import Avatarlist from './Avatarlist.js';


class Avatar extends Component
{

    constructor(){
        super();
        this.state = {
            name : "Hey Users"
        }
    };
    namechange(){
        this.setState({
            name:"Subscribe to me"
        })
    }

  

        
    

    
    render()
    {
        const avatarlistarray = [
            {
                id:1,
                name:"steve"
            },
            {
                id:2,
                name:"Lana"
            },
            {
                id:3,
                name:"stewart"
            },
            {
                id:4,
                name:"john"
            }
        
        ];
    
        
        const avatarcard = avatarlistarray.map( (Avatarcard,i) => {
    
            return <Avatarlist key={i} id="1" name={avatarlistarray[i].name}/>
        } )
    
        return ( 
            
            <div className="tc"><h1>{this.state.name}</h1>
                {avatarcard}

            {/*<Avatarlist id="1" name={avatarlistarray[0].name}/>
            <Avatarlist id="2" name={avatarlistarray[1].name}/>
            <Avatarlist id="3" name={avatarlistarray[2].name}/>
            <Avatarlist id="4" name={avatarlistarray[3].name}/>
            */}
            </div>
       
            
        )
    }
   

}


export default Avatar;




