
// We ask generic type parameter is of a certain type 
// the return from the true branch
// else return from the false branch

// win over function overloading

// borrow from javascript terniry operator
type IsString <T > = T extends string ? string : never;

type A = IsString<'hello'>

type B = IsString <2>;


type StringLabel = {
     name : 'hi' 
}
type NumberLabel = {
     id : number
}

type GetLabel<T> = T extends string | StringLabel ? string : 
                   T extends number | NumberLabel ? number : never;


type gA = GetLabel<{name : 'hello'}>
type gB = GetLabel<2>