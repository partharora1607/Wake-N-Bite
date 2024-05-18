# Master React from Zero to Hero

- header
- -logo
- -nav items
-
- body
- - search
- - Restaurant container
- - restaurant card
-        -img
-        -name
-        -star rating
-        -cuisine
-        -delivery time
-
- footer
- - copyright
- - quick links
- - address , name ,contact information

# parcel

- Dev Builds
- Server
- minification
- bundling
- HMR(hot module replacement)
- File watching algorithm in c++
- Image optimization
- compressing
- Caching -> faster Builds
- conststent hashing
- code splitting
- Diffential bundling - support older browswers
- Diagnostics (Beautiful errors)
- Error Handling
- Tree shaking algorithm(remove used code for you)
- different development and production bundles

# config driven ui (system design interview)

- different ui based on location/city from backend.
- website is driven by data/configs that comes from backend.

# how to run this code in your laptop

step-1) Clone the project into your local
step-2) run "npm install" -> to install node modules and other packages.
step-3) run "npm run start"

# Api

# swiggy api

https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

# cloudinary image for swiggy

https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ + {cloudinaryImageId} // different for different restaurant

# key Propery

- it is important tp provide the key propery for siblings in react as react uses algorithm knows as "reconsiliation"
- using this react optimises the render cycle by tracking them in dom tree / "virtual dom"

- not using keys <<< index <<<<<<<<<<<<< unique id

# react hooks
 -> normal js functions written by facebook developers
- useState() - superpowerful state variables in react
- useEffects()

# rerendering 

whenever a state variable changes/updates,react rerenders the component

# Reconciliation Algorithm (React Fiber)

          dom1                                              dom1
    dom1.1 dom1.2 dom1.3                            =>  dom 1,1 dom 1.3

   # virtual dom -> representaion of an actual dom 

# diff algorithm 

- find the difference between 2 virtual doms

