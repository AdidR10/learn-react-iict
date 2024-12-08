
import Component301024 from "./Component301024";
function ConditionalComponent(props) {
    if (props.condition == 1) {
        return (
            // <div>
            //     {"condition is 1"};
            // </div>
            (<Component301024 />)
            // <button>component1</button>
        )
    } else {
        return (
            // <div>
            //     {"condition is 2"};
            // </div>
            <button>component2</button>
        )
    }
}

export default ConditionalComponent