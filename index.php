<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


$outp = '[ {"name":"Дитячий візочок","icon":"baby-stroller.svg", "desc":"Іграшка для майбутніх мам", "price":325},'.
          '{"name":"Замок","icon":"sand-castle.svg", "desc":"На випадок, коли немає піску, але дитина хоче замок", "price":90},'.
          '{"name":"Качка для ванни","icon":"duckling.svg", "desc":"Класична качка, без якої не обходиться жодне купання", "price":35},'.
          '{"name":"Машина","icon":"car.svg", "desc":"Крута машина для спарвжніх чоловіків", "price":37} ]';




echo($outp);
?>
