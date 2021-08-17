# Booking data retrieval 

Using 

* node/express as backend
* graphql/Apollo as middleware
* angular as frontend (scss, material designs, flex)

## Setup

There are two folders. use terminal/command prompt in respective folders to set them up individually.

- server - contains nodejs backend related code

        run `npm install` to install dependencies
        run `npm run dev` to run the server
        run `npm run build` to build typescript code
  
  keep the server running in the background
  

- client - contains angular front end code

        run `npm install` to install dependencies
        run `ng serve` to run the front end code 
        run `ng test` to run tests


## Possible improvements

* Use RX subject to communicate among components
* more detailed graphql queries
* more tests
* Add error / not found pages.
* Add mutations and parameterised queries in graphql


### BUGS:
using apollo 2 ( and not 3) because of below bug:
https://github.com/nestjs/graphql/issues/1621#issuecomment-878474079
and some testing bugs as well .
