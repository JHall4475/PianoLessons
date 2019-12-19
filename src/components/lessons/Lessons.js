import React, {Component} from 'react';
import './lessons.css';

class Lessons extends Component{

    render(){
        return(
            <div className='login-wpr'>
                <div className='lndg-title'>
                    <button>Staff</button>
                    <button>Counting</button>
                    <button>Notes</button>
                    <button>Intervals</button>
                    <button>ALL</button>
                </div>
            </div>
        )
    }
}

export default Lessons;