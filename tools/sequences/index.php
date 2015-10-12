<? 
echo "<p style='width:200px;'>C<sub>j</sub> = (-1)<sup>j</sup></p>";

echo "<table border='1' cellpadding='5'>";
echo "<tr>";
for ($i=0; $i<=20; $i++)
  {
  $num = pow(-1, $i);
  echo  "<td>". $num . "</td>";
  }
echo "</tr>";
