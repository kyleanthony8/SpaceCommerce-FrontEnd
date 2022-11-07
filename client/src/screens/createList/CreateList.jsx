import './CreateList.css';
import React from 'react';

function CreateList() {
  return (
    <div className='createList'>
      <div className='center'>
        <h1>Create Listing</h1>
        <p>Listing Information</p>
        
      <form id="inputName">
        <label>
        Name:
        <input type="text" name="name" />
        </label>
        </form>
      <form id="inputType">
        <label>
        Type:
        <input type="text" name="name" />
        </label>
        </form>
      <form id="inputSize">
        <label>
        Size:
        <input type="text" name="name" />
        </label>
        </form>
      <form>
        <label id="inputPrice">
        Price:
        <input type="text" name="name" />
        </label>
        </form>
      <form id="inputLocation">
        <label>
        Location:
        <input type="text" name="name" />
        </label>
        </form>
      <form id="uploadImage">
        <label>
        Upload Image:
        <input type="file" name="name" />
        </label>
        </form>
     <button id="createListing">Create Listing</button>
      </div>

    </div>
  );
}

export default CreateList;