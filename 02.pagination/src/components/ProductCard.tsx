interface ProductCardProps {
    title : string,
    image : string
}

function ProductCard({title, image} : ProductCardProps){

    return (
    <div className="card">
        <div className="image">
            <img src={image} alt="" />
        </div>
        <div className="title">
            <h4>{title}</h4>
        </div>
    
    </div>

)}
export default ProductCard;