import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {faToggleOff} from "@fortawesome/free-solid-svg-icons";

const MenuSideItem = (props) => {
  const { item, active, handleChange,isOpen,setIsOpen } = props;
  const { label, icon, subItems, link } = item;

  return (
    <>
      <div className="row flex flex-wrap gap-4 m-6  mb-1  hover:scale-105 transform-origin-center transition-transform " onClick={()=>{
        setIsOpen(true)
        handleChange()
      }}>
          <Link to={link ? link : ""} className="flex gap-3 mt-4" >
            <FontAwesomeIcon icon={icon} size="lg " style={{  cursor:"pointer",}} />
            {!isOpen ? "" :<h2 className="">{label}</h2>  }
          {/* <h2 className="">{label}</h2> */}
          </Link>
        </div>
        {!isOpen?"":
       <div>
        {active && (
          <ul data-aos="fade-down" className="ml-14 ">
            {subItems && subItems.map((item,i) => (
              <Link key={i} to={item.link}><li className="py-1 hover:scale-105 transform-origin-center transition-transform hover:text-stone-900 hover:text-lg hover:font-bold ">{item.itemName}</li></Link>
            ))}
          </ul>
        )}
        </div>} 
</>
  );
};
export default MenuSideItem