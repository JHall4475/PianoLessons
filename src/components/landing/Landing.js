import React, {Component} from 'react';
import './landing.css';

class Landing extends Component{

    render(){
        return(
            <div className='login-wpr'>
                <div className='lndg-title'>
                    <button>Lessons</button>
                    <button>Flash Cards</button>
                    <button>Quizes</button>
                </div>
            </div>
        )
    }
}

export default Landing;