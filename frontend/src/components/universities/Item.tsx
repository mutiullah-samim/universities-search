import React from 'react'
import { University } from '../../types/university'

type Props = {
    university: University
    index: number
}

const Item = (props: Props) => {
    const { university, index } = props
    //item animation is delayed by 0.25s from its previous item's animation
    const _animationDelay = (0.25 + index / 4) + 's'

    return (
        <div className="item animate__animated animate__fadeInUp" style={{ animationDelay: _animationDelay }}>
            <div className="info">
                <div className="name">{university.name}</div>
                <div className="country">{university.country}</div>
            </div>
        </div>
    )
}

export default Item;