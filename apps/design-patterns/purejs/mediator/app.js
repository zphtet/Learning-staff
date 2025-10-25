


// The middleware pattern makes it easy for us to simplify many-to-many relationships between objects, by letting all communication flow through one central point.

class ChatRoom {
    logMessage ( user , message){
        const time = new Date().toLocaleTimeString()
        console.log(time , "[" , user.getName() , "]" , message)
    }   
}



class User {
       constructor(name , chatRoom){
         this.name = name
         this.chatRoom = chatRoom
       }

       getName(){
         return this.name
       }

       send(message){
         this.chatRoom.logMessage(this , message)
       }

       receive(message){
         console.log(this.name , "received:" , message)
       }
}

const user1 = new User("John" , new ChatRoom())
const user2 = new User("Jane" , new ChatRoom())

user1.send("Hello, I am John")
user2.send("Hello, I am Jane")