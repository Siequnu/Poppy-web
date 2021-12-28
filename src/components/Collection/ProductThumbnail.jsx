import React from "react"

export default function ProductThumbnail(props) {
    return (
        <div className="ProductThumbAndTitle">
            <img className="ProductThumbnail" src={props.product.thumbnail} alt="Product preview" onClick={() => props.onClick(props.i)} />
            <h5>{props.product.title}</h5>
        </div>
    )
}