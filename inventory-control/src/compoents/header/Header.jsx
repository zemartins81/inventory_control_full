import React from 'react'
import MenuPrincipal from './MenuPrincipal'

export default function Header({children}) {
    return (

        <div className="bg-green-500 m-4 p-4 rounded-xl flex-row">
            <h1 className="text-center font-semibold text-4xl text-white mb-8">{children}</h1>
            <MenuPrincipal />
        </div>
                    

    )
}
