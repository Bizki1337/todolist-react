import React from 'react'

const Componentz = props => {

    const items = props.items

    const listItems = items.map( item => {
        return (
        <div key={item.key}>
            <p>
                {item.text}
            </p>
            <button
                onClick={() => props.deleteItem(item.key)}
            >Delete</button>
        </div>
        )

    })

    return(
        <div>
            {listItems}
        </div>
    )

}

export default Componentz