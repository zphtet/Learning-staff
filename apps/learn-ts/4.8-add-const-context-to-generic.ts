
// Problem

// When you pass complex,literal values to a fuction , Typescript widens the type to something more general . WHile this is desired behaviour in a lot of cases, in some you  wnat to work on the literal types rather than the widened type.


// Solution
// Add a const modifier in front of your generic type parameter to keep the passed values in const context.


type RouteType = {
     path : string
}

function router < const T extends RouteType> (routes : T[]){
     
    return {
         navigate (path : T['path']){

         }
    }
}

const rt = router([{path : '/home'} , {path : '/about'}] )

rt.navigate('/home')
rt.navigate('/about')