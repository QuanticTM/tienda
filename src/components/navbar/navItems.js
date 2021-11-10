

export const NavItem = props => {

    return (
        <div className={props.class || "nav-item"} onClick={props.method} >
            <p>{props.children}</p>
        </div>
    )

};

export const NavColor = props => {

    const st = {backgroundColor: props.color}

    return (
        <div className="nav-item nav-color" onClick={props.method} >
            <p>{props.children} </p>
            <div className="col" style={st} />
        </div>
    );
}

