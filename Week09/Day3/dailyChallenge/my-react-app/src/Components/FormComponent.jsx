

const FormComponent = (props) => {
    let {handleSubmit, inputs} = props;
    return (
        <>
            <h1>Sample Form</h1>
            <form  onSubmit={handleSubmit}>
                <InputWithLabel id="fname" name="fname" label="First Name" type="text"/>
                <InputWithLabel id="lname" name="lname" label="Last Name" type="text"/>
                <InputWithLabel id="age" name="age" label="Age" type="text"/>

                <InputWithLabel id="male" value="Male" name="gender" label="Male" type="radio"/>
                <InputWithLabel id="female" value="Female" name="gender" label="Female" type="radio"/>

                <label htmlFor="destination">Select your destination: </label>
                <select id="destination" name="destination">
                    <option value="">--Select your destination--</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                </select>

                <InputWithLabel id= "noNuts" name="noNuts" label="Nuts free" type="checkbox"/>
                <InputWithLabel id= "noLactose" name="noLactose" label="Lactose free" type="checkbox"/>
                <InputWithLabel id= "vegan" name="vegan" label="Vegan" type="checkbox"/>

                <input type="submit" value="Submit" id="submitBtn"/>
            </form>

            <h2>Entered Information</h2>
            <p>Your name: {inputs.fname} {inputs.lname}</p>
            <p>Your age: {inputs.age}</p>
            <p>Your gender: {inputs.gender}</p>
            <p>Your destination: {inputs.destination}</p>
            <p>Your diatery restrictions:
                {inputs.noNuts ? ' Nuts free' : ''} 
                {inputs.noLactose ? ' Lactose free' : ''} 
                {inputs.vegan ? ' Vegan' : ''}
            </p>
        </>
    )
}

const InputWithLabel = (props) => {
    let {id, label, type, name, value} = props;
    return(
        <>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={name} value={value} />
        </>
    )
}

export default FormComponent;