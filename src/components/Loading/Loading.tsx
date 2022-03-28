import './Loading.css'

const Loading = () => {
    return (
        <div className="spinner">
            <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10"></circle>
            </svg>
        </div>
    )
}

export default Loading