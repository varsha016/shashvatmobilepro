
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner=()=>{
    return(
        <div className="grid w-full h-96 justify-center items-end">
            <FontAwesomeIcon icon={faSpinner} spin size="10x" />
          </div>
    )
}
export default Spinner;