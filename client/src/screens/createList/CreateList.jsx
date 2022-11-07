import './CreateList.css';
import React from 'react';

function CreateList() {
  return (
    <div className='createList'>
      <div className='center'>
        <h1>Create Listing</h1>
        <p>Input listing information below</p>
        
      <form id="inputName">
        <label>
        Name:
        <input type="text" name="name" placeholder=" Planet-X" />
        </label>
        </form>
      <form id="inputType">
        <label>
        Type:
        <input type="text" name="name" placeholder=" Gas Giant" />
        </label>
        </form>
      <form id="inputSize">
        <label>
        Size:
        <input type="text" name="name" placeholder=" Large"/>
        </label>
        </form>
      <form>
        <label id="inputPrice">
        Price:
        <input type="text" name="name" placeholder=" 1,000,000" />
        </label>
        </form>
      <form id="inputLocation">
        <label>
        Location:
        <input type="text" name="name" placeholder=" Milky Way" />
        </label>
        </form>
      <form id="uploadImage">
        Upload Image:
        <input type="file" name="name" />
        </form>
        <button id="createListing">Create Listing</button>
        
      </div>

    </div>
  );
}

export default CreateList;