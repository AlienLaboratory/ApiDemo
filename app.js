let express=require("express");
let app = express();
let request = require("request");

app.set("view engine","ejs")


app.get("/search",function(req,res)
	{
		res.render("search");
	});
app.get("/result",function(req,res)
	{
		let term = req.query.term;
		console.log("TERM:"+term);
		let url = "http://www.omdbapi.com/?s="+term+"&apikey=abe5f2d2";
		request(url,function(err,responce,body)
			{
				if(!err && res.statusCode===200)
				{
					let data = JSON.parse(body);
					res.render("result",{data:data});
				}
				else
				{
					console.log("connection error");
				}
			});

	});



app.listen(4400,function(){
	console.log("movie app has started!");
})
/*
request("http://www.omdbapi.com/?i=tt3896198&apikey=abe5f2d2", function(error,res,body)
	{
		if(!error && res.statusCode==200)
		{
			
			let parsed = JSON.parse(body);

			//console.log(parsed);
		}
		else
		{
			console.log("connection error");
		}
	});
*/

//https://api.checkwx.com/station?pretty=1
//41d8898178dded55e79d196918
//' -H 'X-API-Key: 41d8898178dded55e79d196918'