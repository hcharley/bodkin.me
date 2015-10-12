<?php
// Create connection
$con=mysqli_connect("mysql.bodkin.me","charleysci","starwar22","compsciproj");

// Check connection
if (mysqli_connect_errno($con))
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }



mysqli_query($con,"INSERT INTO people (name)
VALUES ('Peter', 'Griffin',35)");

mysqli_query($con,"INSERT INTO Persons (name) 
VALUES ('Glenn', 'Quagmire',33)");


$result = mysqli_query($con,"SELECT * FROM people");

while($row = mysqli_fetch_array($result))
  {
  echo "<li>" . $row['name'] . "</li>";
  }

mysqli_close($con);
