import React from 'react'

const List = props => {

    const items = props.items

    const listItems = items.map( item => {
        return (
        <div key={item.key}>
            <p>
                {item.text}
                <br />
                {item.time}
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

export default List