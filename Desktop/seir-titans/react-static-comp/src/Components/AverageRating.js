function AvgRating(props){
    return (
        <div className="AvgRating">
            <h4>Average Rating</h4>
            <h5>{props.AvgNum}</h5>
        </div>
    )
}

export default AvgRating;