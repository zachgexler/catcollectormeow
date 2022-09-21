function SentimentAnalysis(props){
    return (
        <div className="SentAnalysis">
            <h4>Sentiment Analysis</h4>
            <h5>{props.Num1}</h5>
            <h5>{props.Num2}</h5>
            <h5>{props.Num3}</h5>
        </div>
    )
}

export default SentimentAnalysis;