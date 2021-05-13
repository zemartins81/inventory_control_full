import React from 'react'

export default function MenuPrincipal() {
  return (
   
      <nav className="flex items-center justify-center h-8">
          <div className="mx-4">
            <a href="/" className=" text-white px-16 py-2 rounded-md text-xl font-medium hover:bg-green-700  hover:text-white ">
              Materiais
            </a>
          </div>
          <div className="mx-4">
            <a href="/" className=" text-white px-16 py-2 rounded-md text-sm font-medium hover:bg-green-700 hover:text-white text-xl">
              Relatórios
            </a>
          </div>
          <div className="mx-4">
            <a href="/" className=" text-white px-16 py-2 rounded-md text-sm font-medium hover:bg-green-700 hover:text-white text-xl">
              Outros
            </a>
          </div>
   
      </nav>
  )
}
