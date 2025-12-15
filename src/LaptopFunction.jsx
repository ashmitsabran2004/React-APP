function LaptopFunction(props) {
    return (
        <div>
            <h1>This is Laptop Function Components</h1>
            <p>The brand of the laptop is {props.brand} and color is {props.color}</p>
            <p>The laptop is manufactured in year {props.year}and the model number is {props.model}</p>
            <p>The specs is : Ram : {props.config.ram}</p>
            <p>
                The version is : {props.ver[0]}, {props.ver[1]}, {props.ver[2]}
            </p>
        </div>
    )
}

export default LaptopFunction;
