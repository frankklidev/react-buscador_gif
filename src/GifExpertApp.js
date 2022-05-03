import { Input, NextUIProvider } from '@nextui-org/react';
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
        
     
    
            <h2>FindYourGif</h2>
            <div className="buscar">
              <AddCategory setCategories={ setCategories } />
            </div>
           <br/>
            <ol>
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
           
        </>
    )
}
