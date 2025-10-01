// Controllers
const User = require("./controllers/user");
const {performance} = require('perf_hooks');
const { Worker } = require("worker_threads");

module.exports = (server) => {
  // ------------------------------------------------ //
  // ************ USER ROUTES ************* //
  // ------------------------------------------------ //

  // Log a user in and give them a token
  server.route("post", "/api/login", User.logUserIn);

  // Log a user out
  server.route("delete", "/api/logout", User.logUserOut);

  // Send user info
  server.route("get", "/api/user", User.sendUserInfo);

  // Update a user info
  server.route("put", "/api/user", User.updateUser);

  // ------------------------------------------------ //
  // ************ PRIME NUMBER ROUTES ************* //
  // ------------------------------------------------ //

  server.route("get", "/api/primes", (req, res) => {
    const count = Number(req.params.get("count"))
    let startingNumber = BigInt(req.params.get("start"))

    if(startingNumber < BigInt(Number.MAX_SAFE_INTEGER)){
      startingNumber = Number(startingNumber)
    }
    const startTime = performance.now()
    const worker =  new Worker('./lib/cal.js', { workerData: {index: 0, start: startingNumber, count: count} })

    // Timeout after 5 seconds
    // worker.on('online',()=>{
    //   setTimeout(()=>{
    //     worker.terminate();
    //     res.status(400).json({message : "Request Timeout 5s"})
    //  },5000)
    // })
    worker.on('message', (result)=>{
      const endTime = performance.now()
      const time = endTime - startTime
        res.json({
          primes: result,
          time: time / 1000,
        });
    })
   
  });
};
