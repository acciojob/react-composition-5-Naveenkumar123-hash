import React from "react";

const Tabscomponent = ({ data, handlingfn}) => {
    


    return (
        <div>
        {
        data.map(items => (
            <div key={items.id}>
                <ul>
                    {
                    items.title.map(item => (
                        <li key={item} onClick={()=>(handlingfn(items.id,item))}>{item}</li>
                    ))
                    }
                </ul>
                <p>{items.content}</p>
            </div>
        ))
        }
    </div>
    )
}

export default Tabscomponent;