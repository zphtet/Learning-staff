
// You can't annotate explicit error types in try catch block
// Answer - Annotate with any or unknown and use type predicates

// In Javascript , You are allowed to throw EVERY EXPRESSION
// Every error will not be subtype of ERROR 



// The correct way to handle error types
try {
    myroutine(); // There's a couple of errors thrown here
    } catch (e) {
    if (e instanceof TypeError) {
    // A TypeError
    } else if (e instanceof RangeError) {
    // Handle the RangeError
    } else if (e instanceof EvalError) {
    // you guessed it: EvalError
    } else if (typeof e === "string") {
    // The error is a string
    } else if (axios.isAxiosError(e)) {
    // axios does an error check for us!
    } else {
    // everything else
    logMyErrors(e);
    }
    }