// used as type or values 

enum Direction {
      UP,
      RIGHT,
      DOWN,
      LEFT
}

// type Direction = 0 | 1 | 2 | 3 


// used as type
function move (dir : Direction){
      
    console.log(dir)
}

// used as value
move(Direction.UP)

// enum type diffrents from union type
move(Direction.RIGHT)


enum Roles  {
      ADMIN ='Admin',
      AUTHOR ='Author',
      USER ='User',
}

function genRoles (role : Roles){
      
}

genRoles(Roles.ADMIN)

// not allowed to do so
genRoles('User')