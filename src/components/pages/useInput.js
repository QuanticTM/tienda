import { useState } from "react";

const useInput = value => {

    const [x, setX] = useState(value);

    function handleChange(e){
        setX(e.target.value);
    }
    return [x, handleChange];
}

export default useInput;

