
function Understanding() {


    
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label> Rate your feelings from 1-5 for today. </label>
            <input 
            type="number" 
            placeholder="Please rate between 1-5. 5 being good and 1 being bad."
            value= {feelingScale}
            onChange= {event => setFeelingScale(event.target.value)}
            />

            <button type="submit"> Next </button>
        </form>


    </div>

    )
}

export default Understanding;