import './CreateList.css';
import React from 'react';
import '../createList/images/starburst.png'
import logo from '../createList/images/logo.png'

function CreateList() {
  return (
    <div className='createList'>
      <div className='center'>
      <img src={logo}/>
        <h1 className='header'>
          Create Listing</h1>
        <p>Input listing information below</p>
        
        <form className="inputName">
        <label>
        Name:
        <input type="text" name="name" placeholder=" Planet-X" />
        </label>
        </form>
      <form className="inputType">
        <label>
        Type:
        <input type="text" name="name" placeholder=" Gas Giant" />
        </label>
        </form>
      <form className="inputSize">
        <label>
        Size:
        <input type="text" name="name" placeholder=" Large"/>
        </label>
        </form>
      <form>
        <label className="inputPrice">
        Price:
        <input type="text" name="name" placeholder=" 1,000,000" />
        </label>
        </form>
      <form className="inputLocation">
        <label>
        Location:
        <input type="text" name="name" placeholder=" Milky Way" />
        </label>
        </form>
        <div classname="uploadImage">
      <button className="uploadButton">
          Upload Image:
          </button>
          </div>
        <form classname="chooseFile">
        <input type="file" name="name" />
        </form>
        <button className="createButton">Save Listing</button>
        
      </div>

    </div>
  );
}

export default CreateList;