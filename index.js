"use strict";

// hide local variables scope
(function()
{
	// jQuery-style notation
	var $ = function (a) { return document.getElementById(a);}

    var myitems = [];

	var calculatePrice = function()
    {
         var price = 0;
         var atLeastOneIsSelected = false;
         for(var i in myitems)
         {
             var checkid = "itemcheck_"+i;
             if ($(checkid).checked) { price += myitems[i].price; atLeastOneIsSelected = true; }
         }
         return [price, atLeastOneIsSelected];
    }

    var selection_change_f = function()
    {
        var price = calculatePrice();// [price, is_selected]
        $("totalprice").innerHTML = "ЗАГАЛЬНА ЦІНА: " + price[0].toFixed(2) + " грн.";
        $("buybutton").disabled = !price[1];
    }



    var updateContentF = function()
    {
         var itemcontainer = $("itemcontainer");
    itemcontainer.appendChild(document.createElement('hr'));

    for(var i in myitems)
    {
        var item = myitems[i];
        item.price = Number.parseFloat(item.price);

        var nameid = "itemname_"+i;
        var textid = "itemtext_"+i;
        var checkid = "itemcheck_"+i;

        var div = document.createElement('div');
        div.className = "container";
        div.innerHTML = '<div class="container">' +
                        '<img src="' + item.icon + '"></img>' +
                        '<h5 id="'+nameid+'"></h5>' +
                        '<p id="'+textid+'"></p>' +
                        '<h5><input id="' + checkid + '" type="checkbox"></input>&nbsp;'+item.price+' грн.</h5></div>';

        itemcontainer.appendChild(div);

        $(nameid).appendChild(document.createTextNode(item.name));
        $(textid).appendChild(document.createTextNode(item.desc));
        $("itemcheck_"+i).onchange = selection_change_f;
        }

        selectionChangeF();
    }

    // send loanding request
    var xmlhttp = new XMLHttpRequest();
    var url = "index3.php";
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState == 4)
        {
            if (xmlhttp.status == 200)
            {
                myitems = JSON.parse(xmlhttp.responseText);
                updateContentF();
            }
            else
            {

                myitems = [ {name:"Дитячий візочок",icon:"baby-stroller.svg", desc:"Іграшка для майбутніх мам", price:325},
					{name:"Замок",icon:"sand-castle.svg", desc:"На випадок, коли немає піску, але дитина хоче замок", price:90},
					{name:"Качка для ванни",icon:"duckling.svg", desc:"Класична качка, без якої не обходиться жодне купання", price:35},
					 {name:"Машина",icon:"car.svg", desc:"Крута машина для спарвжніх чоловіків", price:37}];
                updateContentF();
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
})();
