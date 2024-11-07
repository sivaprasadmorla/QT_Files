import "./Categories.css"

function Categories(){


    function category(url){
        
        return (
            <div className="category">
                <img src={url} alt="" />
                <div className="category-text">
                    <h4>Category Name</h4>
                    <p>100 products</p>
                </div>


            </div>
        )
    }
    return(
        <div className="categories-container">
            {category("https://th.bing.com/th?id=OIP.NWpZaJoQzjVDF6xHCAcIxAHaHn&w=246&h=253&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2")}
            {category("http://ts1.mm.bing.net/th?id=OIP.edaynIMSCHIlQELcr8KdLQHaJ4&pid=15.1")}
            {category("https://th.bing.com/th?id=OIP.NWpZaJoQzjVDF6xHCAcIxAHaHn&w=246&h=253&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2")}
            {category("https://th.bing.com/th?id=OIP.NWpZaJoQzjVDF6xHCAcIxAHaHn&w=246&h=253&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2")}
            {category("https://th.bing.com/th?id=OIP.NWpZaJoQzjVDF6xHCAcIxAHaHn&w=246&h=253&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2")}
            {category("https://th.bing.com/th?id=OIP.NWpZaJoQzjVDF6xHCAcIxAHaHn&w=246&h=253&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2")}
            {category("https://th.bing.com/th?id=OIP.NWpZaJoQzjVDF6xHCAcIxAHaHn&w=246&h=253&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2")}
            {category("https://th.bing.com/th?id=OIP.NWpZaJoQzjVDF6xHCAcIxAHaHn&w=246&h=253&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2")}
            {category("https://th.bing.com/th?id=OIP.NWpZaJoQzjVDF6xHCAcIxAHaHn&w=246&h=253&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2")}
            {category("https://th.bing.com/th?id=OIP.NWpZaJoQzjVDF6xHCAcIxAHaHn&w=246&h=253&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2")}
            {category("https://th.bing.com/th?id=OIP.NWpZaJoQzjVDF6xHCAcIxAHaHn&w=246&h=253&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2")}
            {category("https://th.bing.com/th?id=OIP.NWpZaJoQzjVDF6xHCAcIxAHaHn&w=246&h=253&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2")}
            
        </div>
    )
}

export default Categories