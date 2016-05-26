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

                myitems = [ {name:"Philips 203p3",icon:"television.svg", desc:"Найстарший телевізор у нашому магазині.", price:234},
					{name:"Eлектрон 2000",icon:"television-1.svg", desc:"Старий та надійний", price:511},
					{name:"LG 1515c",icon:"monitor.svg", desc:"Плазмовий телевізор нового покоління ", price:4233},
					 {name:"Sony PVCHI993 gray",icon:"computer-screen.svg", desc:"Новітній рідкокристалічний розумний телевізор", price:7030}];
                updateContentF();
            }
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
})();
