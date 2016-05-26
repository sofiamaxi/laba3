<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


$outp = '[ {"name":"Philips 203p3","icon":"television.svg", "desc":"Найстарший телевізор у нашому магазині.", "price":234},'.
          '{"name":"Eлектрон 2000","icon":"television-1.svg", "desc":"Старий та надійний", "price":511},'.
          '{"name":"LG 1515c","icon":"monitor.svg", "desc":"Плазмовий телевізор нового покоління", "price":4233},'.
          '{"name":"Sony PVCHI993 gray","icon":"computer-screen.svg", "desc":"Новітній рідкокристалічний розумний телевізор", "price":7030} ]';


echo($outp);
?>
