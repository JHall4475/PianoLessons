import React, {Component} from 'react';
import './levels.css';

class Levels extends Component{

    render(){
        return(
            <div className='login-wpr'>
                <div className='lndg-title'>
                    <button>Level 1</button>
                    <button>Level 2</button>
                    <button>Level 3</button>
                    <button>Level 4</button>
                </div>

            </div>
        )
    }
}

export default Levels;