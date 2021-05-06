import './menu.css'

import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu(props) {
    return (
        <div>
            <aside className="Menu">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Início</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    )
}
