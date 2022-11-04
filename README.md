# myspace

**Github Repo:** 

**Netlify:** 

## Overview
A unique dashboard that allows users to view and purchase celestital objects.

## Team Members
-Danny Yu
-Kyle Anthony
-Connor Harris
-Jacob Csonka
-Andrea Alonso

## Data Schema

User:

```
let UserData = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password_digest: { type: String, required: true, select: false },
    email: { type: String, required: true, unique: true },
    avatar: { type: String },
    rating: { type: Number },
    favoriteItems: [{ type: Schema.Types.ObjectId, ref: "spaceItems" }],
    listing: [{ type: Schema.Types.ObjectId, ref: "spaceItems" }],
  },
  { timestamps: true }
);

```

SpaceItem:

```
let SpaceItem = new Schema({
  name: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: [
      "Continental",
      "Ocean",
      "Barren",
      "Tropical",
      "Desert",
      "Arid",
      "Arctic",
      "Alpine",
      "Star",
      "Station",
      "Ship",
      "GasPlanet",
      "Astroid",
      "Specialty",
      "Colony",
      "Moon"
    ],
  },
  size: {
    type: String,
    required: true,
    enum: ["Tiny", "Small", "Medium", "Large", "Giant"],
  },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  image: [{ type: Schema.Types.ObjectId, ref: "images" }],
  owner: { type: Schema.Types.ObjectId, ref: "userDatas" },
  rating: { type: Number },
  isBought: { type: Boolean },
  isHab: { type: Boolean },
});

```
Image:

```
let Image = new Schema({
  source: { type: Schema.Types.ObjectId, ref: 'userDatas' },
  spaceItem: { type: Schema.Types.ObjectId, ref: 'spaceItems'},
  image: { type: String },
});

```

## Wireframes & Branding



## Team Expectations

[Team Expectations](https://docs.google.com/document/d/1pFeWx5xNfhRX_BMKo0RtF835iyji6VnHI_Y2zRqspks/edit?usp=sharing)

[Project Management](https://trello.com/b/pEV7PxnA/myspace)

## MVP GOALS

- Use MongoDB and Express to create the back-end
- Use React to create the front-end
  - Use multiple functional components
- Give user capability for full CRUD (products for MVP, see post-MVP... preferred CRUD demonstration)
- Deploy to Netlify
- Authorization and Authentication (user sign in and sign up)
- CSS styling to match wireframe and branding
  - Include media queries

## POST MVP GOALS

- Add user capability to review products (with full CRUD capability)
- Loading animation on home page
- Ability to edit a user profile

## Project Schedule

| Date      | Deliverable                                                                                          |  Status  |
| :-------- | :--------------------------------------------------------------------------------------------------  | :------: |
| Nov 03    | Project Team Building                                                                                | Complete |
| Nov 04    | Wireframes + Final Project Approval + Create and Deploy Back-End + React dependencies + plugins      | Complete |
| Nov 05    | Front End Page Tasking                                                                               |          |
| Nov 06    | Front End Page Tasking                                                                               |          |
| Nov 07    | 95% completion of Front End page                                                                     |          |
| Nov 08    | CSS Style Adjustments                                                                                |          |
| Nov 09    | Final Edits                                                                                          |          |
| Nov 10    | Project presentation                                                                                 |          |
                                                                               























# Prerequisites
React install 
Install Visual Studio Code from https://code.visualstudio.com/download and download Live Server v5.7.9 or the latest version of Live Server from the Extensions Tab.

# Getting Started
Fork and clone this repository and Change into the new directory. Run npm start in terminal to run the repository.

# How to use
Users may naviagte application to view listed celestital objects including planets, spaceships, stars, etc. Users may purchase a celestital object, sell a celestital onject, create a User Profile Account, chat with satisfied buyers, and contact staff. 

# License
This project is licensed under the GNU General Public License v3.0.

# Acknowledgements
API used: https://spacecommerce.up.railway.app/
API provided by: Danny Yu and Connor Harris
