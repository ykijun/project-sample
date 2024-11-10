import express from "express"
import { readFile } from "fs"


const app = express()
app.use(express.static('public/css'))
app.use(express.static('public/image'))

app.get ("/", (request, respond)=> {
	readFile("public/html/index.html", "utf-8", (err,data)=>{
		if(err){respond.send("No such file or directiory")}
		respond.send(data)
	})
})

app.get ("/login.html", (request, respond)=> {
	readFile("public/html/login.html", "utf-8", (err,data)=>{
		if(err){respond.send("No such file or directiory")}
		respond.send(data)
	})
})
app.get ("/mentorship.html", (request, respond)=> {
	readFile("public/html/mentorship.html", "utf-8", (err,data)=>{
		if(err){respond.send("No such file or directiory")}
		respond.send(data)
	})
})
app.get ("/signup.html", (request, respond)=> {
	readFile("public/html/signup.html", "utf-8", (err,data)=>{
		if(err){respond.send("No such file or directiory")}
		respond.send(data)
	})
})
app.get ("/news.html", (request, respond)=> {
	readFile("public/html/news.html", "utf-8", (err,data)=>{
		if(err){respond.send("No such file or directiory")}
		respond.send(data)
	})
})
app.get ("/community.html", (request, respond)=> {
	readFile("public/html/community.html", "utf-8", (err,data)=>{
		if(err){respond.send("No such file or directiory")}
		respond.send(data)
	})
})

app.use((req,res,next)=>{
	readFile("public/html/notfound.html", "utf-8", (err,data)=>{
		if(err){res.status(404). send("404 Not found")}
		res.status(404).send(data)
	})
})

app.listen(3000)