import './Exercise.css'

const Exercise = () => {
    
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
        };
    
    return(
        <div>
            <h1 style={
            //     {
            //     color: 'red',
            //     backgroundColor: 'lightblue'
            // }
            style_header
            }>This is a header</h1>
            <p className='para'>This is a Paragraph</p>
            <a href="">This is a Link</a>
            <form action="">This is a form
                <input type="text" />
                <input type="submit" value="submit"/>
            </form>
            <img src="https://prnt.sc/8nOPyVMANSzl"  />
            <ul>
                This is a list
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    )
}

export default Exercise;