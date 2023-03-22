function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6KM9f0BDzUG":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycby87vxu3xj0dhVzCUc4OZhtQpZxLgjUmSMxjZnVDz4TB5Epz3UqX6zCN4HFdd16Be8QpA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

