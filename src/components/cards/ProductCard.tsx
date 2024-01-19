import React from 'react'
import { Card, Typography } from "@mui/material";
import Image from 'next/image';

export interface IProductCardProps {
    name: string;
    imageUrl: string;
}

export const ProductCard = ({name, imageUrl}: IProductCardProps) => {
    return (
    <Card className="product-card-container">
        <Image src={imageUrl} alt={`${name} image`} id="product-card-image" width={120} height={120}/>
        <Typography> {name} </Typography>
    </Card>
    )
}
