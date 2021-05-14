<!DOCTYPE html>
<html>
  <head>

	<script src="jquery.min.js"></script>
	<script src="jquery.cookie.js"></script>
	<script src="app.js"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Economica&display=swap"
      rel="stylesheet"
    />
	<link href="styles.css" rel="stylesheet">
    <title>Prayer Reminder</title>
  </head>

  <body>
  
    <h1 class="center">Good Deeds and Prayer Reminder</h1>
	<div class="left">
		<div id="Leaderboard">
		<h1>Leaderboard</h1>
		<table>
		<tr>
			<th>Names</th>
			<th>Deeds Done</th>
		</tr>
		<tr>
			<td id="c1r10">Andrew</td>
			<td id="c2r10">13</td>
		</tr>
		<tr>
			<td id="c1r9">Seamus</td>
			<td id="c2r9">9</td>
		</tr>
		<tr>
			<td id="c1r8">sdfasdf</td>
			<td id="c2r8">8</td>
		</tr>
			<td id="c1r7">Christopher</td>
			<td id="c2r7">6</td>
		</tr>
		<tr>
			<td id="c1r6">testaccount1</td>
			<td id="c2r6">4</td>
		</tr>
		<tr>
			<td id="c1r5">testtest</td>
			<td id="c2r5">2</td>
		</tr>
			<td id="c1r4">sadfadsffs</td>
			<td id="c2r4">1</td>
		</tr>
		<tr>
			<td id="c1r3">asfsdaf</td>
			<td id="c2r3">1</td>
		</tr>
		<tr>
			<td id="c1r2">fdsadfsd</td>
			<td id="c2r2">1</td>
		</tr>
		<tr>
			<td id="c1r2">dfsafds</td>
			<td id="c2r2">0</td>
		</tr>
		</table>
		</div>
	</div>
    <h2 class="center">This website reminds you to pray every 30 minutes.</h2>
	<div id="buttons1", class="center">
		<button id="roll" style="background-color: #545454; color: #ffffff;display: block;text-align: center;margin: auto;">Roll For New Deed</button>
		<button id="done" style="background-color: #ffffff; color: #000000;display: block;text-align: center;margin: auto;">Click This if You Finished a Deed</button>
	</div>
	<div id="txtupdt", class="center">
		<h2 id="CuDe">Current Deed = none, roll for new deed</h2>
		<h2 id="Countr">Deeds Done </h2>
		<input id="target" type="text" value="Write Your Name Here " style="text-align: center;margin: auto;display: block;">
		<button id="save", style="background-color: #787878; color: #ffffff;display: block;text-align: center;display: block;margin: auto;">Save</button>
	</div>
</html>
