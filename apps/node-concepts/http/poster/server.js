import Apple from "../web/apple.js";

const app = new Apple();

const port = 8080;

const USERS = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    password: "123",
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    password: "123",
  },
  {
    id: 3,
    name: "Bob Johnson",
    username: "bobjohnson",
    password: "123",
  },
  {
    id: 4,
    name: "Alice Brown",
    username: "alicebrown",
    password: "123",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    username: "charliewilson",
    password: "123",
  },
];

const POSTS = [
  {
    id: 1,
    title: "First Post",
    body: "This is the first post",
    userId: 1,
    author: "John Doe",
  },
  {
    id: 2,
    title: "Second Post",
    body: "This is the second post",
    userId: 2,
    author: "Jane Smith",
  },
];

let SESSIONS = [];

app.use((req, res, next) => {
  console.log(" first middleware middleware");
  next();
});

app.use((req, res, next) => {
  console.log(" second middleware middleware");
  next();
});

app.use((req, res, next) => {
  setTimeout(() => {
    console.log(" third middleware middleware");
    next();
  }, 2000);
});

app.route("GET", "/", (req, res) => {
  res.status(200).sendFile("./public/index.html", "text/html");
});
app.route("GET", "/login", (req, res) => {
  res.status(200).sendFile("./public/index.html", "text/html");
});

app.route("GET", "/profile", (req, res) => {
  res.status(200).sendFile("./public/index.html", "text/html");
});

app.route("DELETE", "/api/logout", (req, res) => {
  const token = req.headers.cookie?.split("=")[1];
  SESSIONS = SESSIONS.filter((session) => session.token !== token);
  res.status(200).json({ message: "Logout successful" });
});

app.route("POST", "/api/login", (req, res) => {
  // console.log("POST /api/login");
  // let body = "";
  // req.on("data", (chunk) => {
  //   body += chunk.toString("utf-8");
  // });
  // req.on("end", () => {
  const { username, password } = req.body;
  const user = USERS.find(
    (user) => user.username === username && user.password === password,
  );

  console.log("found user", user);
  const token = Math.random().toString(36).substring(2, 15);
  if (user) {
    SESSIONS.push({ token, user });
    res.setHeader("Set-Cookie", `token=${token}; Path=/;`);
    console.log("coookie set")
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
  // });
});

app.route("GET", "/api/user", (req, res) => {
  const token = req.cookies.token;
  const session = SESSIONS.find((session) => session.token === token);
  if (session) {
    res.status(200).json(session.user);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.route("GET", "/styles.css", (req, res) => {
  res.status(200).sendFile("./public/styles.css", "text/css");
});

app.route("GET", "/scripts.js", (req, res) => {
  res.status(200).sendFile("./public/scripts.js", "text/javascript");
});

app.route("GET", "/404.html", (req, res) => {
  res.status(200).sendFile("./public/404.html", "text/html");
});

app.route("GET", "/api/users", (req, res) => {
  res.status(200).json(USERS);
});

app.route("GET", "/api/posts", (req, res) => {
  res.status(200).json(POSTS);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
