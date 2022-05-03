
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import { Loading, Grid } from "@nextui-org/react";


export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
        
            <div className="loading">
            { loading &&
             <Grid>
               <Loading type="points" />
             </Grid>
             }
            </div>

           

            <Grid.Container gap={2} justify="flex-start">
    
            {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
              </Grid.Container>
        </>
    )
}
