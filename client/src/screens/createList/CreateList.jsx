import "./CreateList.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createSpaceItem } from "../../services/spaceItem.js";
import "../createList/images/logo.png"
import { useAuthContext } from "../../hooks/useAuthContext";


function CreateList() {
  const nameRef = useRef();
  const typeRef = useRef();
  const sizeRef = useRef();
  const priceRef = useRef();
  const locationRef = useRef();
  const isHabRef = useRef();
  let navigate = useNavigate();
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/signIn", { replace: true });
    } else {
      try {
        const listing = {
          name: nameRef.current.value,
          type: typeRef.current.value,
          size: sizeRef.current.value,
          price: priceRef.current.value,
          location: locationRef.current.value,
          image: ["636bb1f197753db232ec31c5"],
          rating: 0,
          isHab: isHabRef.current.value,
        };
        const item = await createSpaceItem(listing);
        console.log(item);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="createList">
      <div className="center">
        <h1 className="header">Create Listing</h1>
        <p>Input listing information below</p>
        <form className="inputField" onSubmit={handleSubmit}>
            <input 
              ref={nameRef}
              type="text"
              name="name"
              placeholder=" Planet-X"
            />
            <input
              ref={typeRef}
              type="text"
              name="name"
              placeholder=" Gas Giant"
            />
            <input ref={sizeRef} type="text" name="name" placeholder=" Large" />
            <input
              ref={priceRef}
              type="number"
              name="name"
              placeholder=" 1,000,000"
            />
            <input
              ref={locationRef}
              type="text"
              name="name"
              placeholder=" Milky Way"
            />
            <input
              ref={isHabRef}
              type="text"
              name="name"
              placeholder=" false"
            />
          {/* <input
            type="text"
            name="name"
            placeholder=" URL Link"
          /> */}
          <button id="createListing">Submit Listing</button>
        </form>
      </div>
    </div>
  );
}

export default CreateList;
