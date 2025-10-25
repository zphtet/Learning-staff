class Obserable {
        constructor(){
             this.observers = []
        }

        subscribe(fn){
             this.observers.push(fn)
             return () => this.unsubscribe(fn)
        }
        unsubscribe(fn){
             this.observers = this.observers.filter(observer => observer !== fn)
        }
        notify(data){
             this.observers.forEach(observer => observer(data))
        }
}

const ClickObserable = new Obserable()

const logger = (data)=>{
      console.log(`Logger is working : ${data}`)
}

const  toast = (data)=>{
       console.log(`Toast is working : ${data}`)
}


ClickObserable.subscribe(logger)
ClickObserable.subscribe(toast)


ClickObserable.notify("Hello, I am John")

ClickObserable.unsubscribe(logger)

ClickObserable.notify("Hello, I am Jane")



