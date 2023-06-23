import React from 'react'
import { Image } from 'react-konva'

const Piece = (props) => {
    /**
     * image
     * color
     * id
     * - color of player
     * - whether or not it's your turn
     * - if it's this player's turn, color of this player is the same color as this piece, 
     *   then make piece draggable
     */
    return (
        <Image
            draggable
        />
    )
}

export default Piece