
// command pattern use for  actions that change state.

class OrderManager {
       #orders = []
    constructor(){
          
    }
    execute(command){
          return command.execute(this.#orders)
    }
    getAllOrders (){
         return this.#orders
    }
}


class Command {
       constructor(executeFun){
           this.execute  = executeFun
       }
}


function addOrderCommand(orderName , orderId){
    console.log(`Order ${orderName} added with id ${orderId}`)
      return new Command((orders)=>{
           orders.push({name : orderName , id : orderId})
      })
}

function cancelOrderCommand(orderId){
      return new Command((orders)=>{
        const orderIndex = orders.findIndex((order)=> order.id === orderId)
        if(orderIndex !== -1){
            orders.splice(orderIndex, 1)
            console.log(`Order ${orderId} cancelled`)
        }
      })
}

function trackOrderCommand(orderId){
      return new Command((orders)=>{
        const orderIndex = orders.findIndex((order)=> order.id === orderId)
        if(orderIndex !== -1){
            console.log(`Order ${orderId} tracked will arrive in 20min`)
        }
      })
}

const orderManager = new OrderManager()

orderManager.execute(addOrderCommand("order1" , "123"))
orderManager.execute(trackOrderCommand("123"))
orderManager.execute(cancelOrderCommand("123"))
console.log( "All orders :", orderManager.getAllOrders())
