import React from 'react'

const AccardionContent = (props) => {
    return (
                <div className={`${props.accardionclass}`} style={{order: `${props.order}`,}}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia quos quisquam
                        perferendis nesciunt molestias veritatis dignissimos qui sunt, porro, provident explicabo 
                        ea corrupti aliquam ab.
                    </p>
                    <p>Content {props.checkedItem}</p>
                </div>
    )
}

export default AccardionContent