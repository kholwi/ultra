import React from 'react';
import { Link } from 'react-router-dom';

const Capture = () => { 
    return (
        <div className="flex w-screen h-screen">
            <p>Capture</p>
            <hr />
            <div className="w-screen">
                <ul>
                    <li>
                        <Link to='backlog'>Backlog</Link>
                    </li>
                    <li>
                        <Link to='Budgetallocation'>Budget Allocation</Link>
                    </li>
                    <li>
                        <Link to='Complitedprojects'>Complited Projects</Link>
                    </li>
                    <li>
                        <Link to='Location'>Location</Link>
                    </li>
                    <li>
                        <Link to='Newdevelopments'>New Developments</Link>
                    </li>
                    <li>
                        <Link to='Portfolios'>Portfolios</Link>
                    </li>
                    <li>
                        <Link to='Programs'>Programs</Link>
                    </li>
                    <li>
                        <Link to='Requiredbudget'>Required Budget</Link>
                    </li>
                    <li>
                        <Link to='Strategicplanningandbackup'>Strategic Planning and Backup</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export  default Capture
