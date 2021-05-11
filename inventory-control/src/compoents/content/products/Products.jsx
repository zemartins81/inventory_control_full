import React from 'react'
import Card from './Card'

export default function Products() {
    return (
        <div className="border-black bg-gray-300 m-4 p-4 rounded-xl flex-row">
            <h1 className="text-center font-semibold text-4xl text-white mb-8">Produtos</h1>
            <div className="justify-between">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}
