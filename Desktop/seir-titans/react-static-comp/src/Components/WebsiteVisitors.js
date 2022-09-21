function WebVisitors(props){
    return (
        <div className="WebsiteVisits">
            <div className="WebHeader">
                <h4>Website Visitors</h4>
                <h5>{props.VisitorsNum}</h5>
            </div>
            <div className="WebData">
            </div>
        </div>
    )
}

export default WebVisitors;