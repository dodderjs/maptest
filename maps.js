var infowindow,
	map,
	myStyles =[{
	        featureType: "poi.business",
	        elementType: "labels",
	        stylers: [
	              { visibility: "off" }
	        ]
	    }],
	myOptions = {},
	bounds, mapArray = [];

function addPoint (options) {
    var pnt = new google.maps.LatLng(options.lat, options.lng);
    bounds.extend(pnt);

    var mark = new google.maps.Marker({
        position: pnt,
        map: map
    });

    google.maps.event.addListener(mark, 'click', function() {
        infowindow.setContent(options.content);
        infowindow.open(map, mark);
    });
}

//google.maps.event.addDomListener(window, 'load', initializeMap);
function initializeMap() {
	myOptions = {
    	center: new google.maps.LatLng(47.5557479858,13.3503704071),
        zoom: 6,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: myStyles
	};
    map = new google.maps.Map(document.getElementById("map"),myOptions);
    bounds = new google.maps.LatLngBounds();
    infowindow = new google.maps.InfoWindow();

    mapArray.forEach(function (o) {
    	var km = +o.content.replace(/.+<br>([\d\.]+) km.+/g, function (bla, km) { return km });
    	if (km > 60 ) {
    		addPoint(o);
    	}
    });

    map.fitBounds(bounds);    
}

mapArray = [{
	lat: 47.5557479858,
	lng: 13.3503704071,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Abtenau im Lammertal - Karkogel</b><br>712 - 1200 m.<br>12 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/abtenau/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5074043274,
	lng: 15.6378364563,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Waldheimat Alpl</b><br>1000 - 1280 m.<br>8 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/alpl/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6605987549,
	lng: 13.7450275421,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Altaussee - Loser</b><br>850 - 1770 m.<br>33 km sípálya / 9 felvonó<br><a href='sieluk.hu/siterep/loser/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3723564148,
	lng: 13.4666366577,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Altenmarkt - Radstadt</b><br>858 - 1571 m.<br>17 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/altenmarkt/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.8788795471,
	lng: 15.3652915955,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Annaberg</b><br>896 - 1334 m.<br>12.5 km sípálya / 6 felvonó<br><a href='sieluk.hu/siterep/annaberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.9252090454,
	lng: 15.2758293152,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Puchenstuben</b><br>870 - 1150 m.<br>3.5 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/puchenstuben/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.5413627625,
	lng: 13.7146825790,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Arnoldstein - Dreiländereck</b><br>680 - 1600 m.<br>17 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/arnoldstein/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1953887939,
	lng: 11.3021097183,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Axamer Lizum</b><br>1580 - 2340 m.<br>30 km sípálya / 10 felvonó<br><a href='sieluk.hu/siterep/axamerlizum/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.8123168945,
	lng: 13.7989492416,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Bad Kleinkirchheim</b><br>1087 - 2055 m.<br>103 km sípálya / 24 felvonó<br><a href='sieluk.hu/siterep/badkleinkirchheim/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1108093262,
	lng: 9.7441854477,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Brandnertal</b><br>904 - 2000 m.<br>55 km sípálya / 14 felvonó<br><a href='sieluk.hu/siterep/brandnertal/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9111595154,
	lng: 12.3512830734,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>St. Jakob im Defereggental</b><br>1400 - 2525 m.<br>17 km sípálya / 7 felvonó<br><a href='/siterep/stjakob-defereggental/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4510269165,
	lng: 13.6178941727,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Dachstein gleccser</b><br>2264 - 2700 m.<br>5 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/dachstein/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2866783142,
	lng: 9.8879098892,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Damüls - Mellau</b><br>690 - 2050 m.<br>79.4 km sípálya / 19 felvonó<br><a href='sieluk.hu/siterep/damuls/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3172531128,
	lng: 10.0084810257,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Diedamskopf</b><br>820 - 2060 m.<br>40 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/diedamskopf/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2220191956,
	lng: 11.4266767502,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Patscherkofel</b><br>900 - 2026 m.<br>18 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/patscherkofel/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2225303650,
	lng: 11.3661594391,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Muttereralm</b><br>920 - 1800 m.<br>16 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/muttereralm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4015960693,
	lng: 13.4003381729,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Eben - Monte Popolo</b><br>862 - 1612 m.<br>6 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/eben/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1692810059,
	lng: 13.6932830811,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Fanningberg</b><br>1497 - 2115 m.<br>24 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/fanningberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.8130149841,
	lng: 13.7583112717,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Feuerkogel - Ebensee</b><br>443 - 1625 m.<br>10 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/feuerkogel/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4342193604,
	lng: 13.5004568100,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Filzmoos</b><br>1057 - 1645 m.<br>13 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/filzmoos/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3280982971,
	lng: 13.2995624542,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Flachau - Wagrain - Alpendorf</b><br>740 - 1980 m.<br>115 km sípálya / 43 felvonó<br><a href='/siterep/flachau-wagrain-alpendorf/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.8990516663,
	lng: 14.7556200027,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Forsteralm</b><br>720 - 1078 m.<br>16 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/forsteralm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.7028884888,
	lng: 13.2169342041,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Gaissau - Hintersee</b><br>750 - 1567 m.<br>34 km sípálya / 9 felvonó<br><a href='sieluk.hu/siterep/gaissau/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9646492004,
	lng: 10.1622457504,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Galtür - Silvapark</b><br>1587 - 2297 m.<br>43 km sípálya / 10 felvonó<br><a href='sieluk.hu/siterep/galtur/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9676132202,
	lng: 9.9192972183,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Gargellen</b><br>1423 - 2300 m.<br>39 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/gargellen/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.8107986450,
	lng: 15.2886343002,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Gemeindealpe - Mitterbach</b><br>800 - 1626 m.<br>15.5 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/gemeindealpe/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.6597061157,
	lng: 13.9016532898,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Gerlitzen Alpe</b><br>1000 - 1911 m.<br>41.6 km sípálya / 15 felvonó<br><a href='sieluk.hu/siterep/gerlitzen/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.7922210693,
	lng: 13.4702234268,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Goldeck</b><br>550 - 2142 m.<br>25 km sípálya / 9 felvonó<br><a href='sieluk.hu/siterep/goldeck/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3126831055,
	lng: 13.0797014236,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Goldegg</b><br>832 - 1225 m.<br>5 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/goldegg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0893936157,
	lng: 9.8688335419,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Golm</b><br>650 - 2110 m.<br>26.5 km sípálya / 9 felvonó<br><a href='sieluk.hu/siterep/golm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0725746155,
	lng: 14.3107490540,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Grebenzen - St. Lambrecht</b><br>1010 - 1870 m.<br>12.2 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/grebenzen/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2415504456,
	lng: 13.1950359344,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Grossarltal - Dorfgastein</b><br>850 - 2033 m.<br>70.1 km sípálya / 17 felvonó<br><a href='sieluk.hu/siterep/grossarltal/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1417732239,
	lng: 13.6630172729,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Grosseck - Speiereck</b><br>1095 - 2400 m.<br>50 km sípálya / 10 felvonó<br><a href='sieluk.hu/siterep/grosseck/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9250907898,
	lng: 15.0169801712,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hebalm (bezárt)</b><br>1040 - 1400 m.<br>11 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/hebalm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0404930115,
	lng: 12.8409700394,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Heiligenblut - Grossglockner</b><br>1301 - 2989 m.<br>55 km sípálya / 12 felvonó<br><a href='sieluk.hu/siterep/heiligenblut/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.427579,
	lng: 12.843389,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hinterreit - Saalfelden</b><br>780 - 1150 m.<br>9 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/saalfelden/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6990890503,
	lng: 14.1566991806,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hinterstoder</b><br>600 - 2000 m.<br>40 km sípálya / 14 felvonó<br><a href='sieluk.hu/siterep/hinterstoder/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.34301034806174,
	lng: 10.166387557983398,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hirschegg - Heuberg Arena - Kleinwalsertal</b><br>1070 - 1480 m.<br>19.4 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/hirschegg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.7184944153,
	lng: 14.9183444977,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hochkar</b><br>1380 - 1808 m.<br>19 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/hochkar/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2372093201,
	lng: 11.8993005753,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Zillertal Arena</b><br>580 - 2500 m.<br>143 km sípálya / 52 felvonó<br><a href='sieluk.hu/siterep/gerlos/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4252471924,
	lng: 14.4634122849,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hohentauern</b><br>1230 - 1700 m.<br>9.5 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/hohentauern/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5199050903,
	lng: 12.2492485046,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>SkiWelt Wilder Kaiser - Brixental</b><br>620 - 1957 m.<br>284 km sípálya / 90 felvonó<br><a href='sieluk.hu/siterep/skiwelt/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9710845947,
	lng: 13.7487144470,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Innerkrems</b><br>1550 - 2200 m.<br>36 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/innerkrems/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0099449158,
	lng: 10.2881870270,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Ischgl - Silvretta Arena</b><br>1377 - 2872 m.<br>238 km sípálya / 41 felvonó<br><a href='sieluk.hu/siterep/ischgl/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.8450965881,
	lng: 15.3152770996,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Josefsberg</b><br>1012 - 1240 m.<br>4 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/josefsberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5713157654,
	lng: 10.4473381042,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Jungholz</b><br>1058 - 1500 m.<br>10 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/jungholz/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2289772034,
	lng: 12.7259845734,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kaprun - Kitzsteinhorn</b><br>1978 - 3029 m.<br>41 km sípálya / 17 felvonó<br><a href='sieluk.hu/siterep/kaprun/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.8457412720,
	lng: 14.0047998428,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kasberg - Grünau</b><br>620 - 1600 m.<br>21 km sípálya / 10 felvonó<br><a href='sieluk.hu/siterep/kasberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0581512451,
	lng: 13.6174039841,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Katschberg - Aineck</b><br>1066 - 2220 m.<br>70 km sípálya / 16 felvonó<br><a href='sieluk.hu/siterep/katschberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.8630447388,
	lng: 10.7130537033,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kaunertal gleccser</b><br>2180 - 3108 m.<br>21.8 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/kaunertal/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4431953430,
	lng: 12.3892784119,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kitzbühel - Mittersill</b><br>800 - 2000 m.<br>179 km sípálya / 46 felvonó<br><a href='sieluk.hu/siterep/kitzbuhel/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2968750000,
	lng: 13.3921136856,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kleinarl, Flachauwinkl - Shuttleberg</b><br>1000 - 1980 m.<br>28 km sípálya / 9 felvonó<br><a href='sieluk.hu/siterep/kleinarl/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9438667297,
	lng: 14.6911954880,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Klippitztörl</b><br>1460 - 1818 m.<br>28 km sípálya / 6 felvonó<br><a href='sieluk.hu/siterep/klippitztorl/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.8106842041,
	lng: 14.9391002655,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Koralpe</b><br>1522 - 2070 m.<br>24 km sípálya / 6 felvonó<br><a href='sieluk.hu/siterep/koralpe/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.7920532227,
	lng: 14.7930049896,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Königsberg</b><br>715 - 1078 m.<br>14 km sípálya / 6 felvonó<br><a href='sieluk.hu/siterep/konigsberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6533851624,
	lng: 12.4211969376,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kössen</b><br>619 - 1690 m.<br>22 km sípálya / 11 felvonó<br><a href='sieluk.hu/siterep/kossen/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0991058350,
	lng: 14.0855484009,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kreischberg - Murau</b><br>868 - 2118 m.<br>42 km sípálya / 13 felvonó<br><a href='sieluk.hu/siterep/kreischberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5481033325,
	lng: 13.7052574158,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Krippenstein - Dachstein</b><br>609 - 2109 m.<br>12 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/krippenstein/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2517166138,
	lng: 14.3656320572,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Lachtal</b><br>1600 - 2222 m.<br>25 km sípálya / 9 felvonó<br><a href='sieluk.hu/siterep/lachtal/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.8698921204,
	lng: 15.1552476883,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Lackenhof am Ötscher</b><br>810 - 1425 m.<br>19 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/lackenhof/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5893211365,
	lng: 15.5946636200,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Lammeralm</b><br>980 - 1230 m.<br>8.8 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/lammeralm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2610855103,
	lng: 9.7427330017,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Laterns - Gapfohl</b><br>1040 - 1785 m.<br>27 km sípálya / 6 felvonó<br><a href='sieluk.hu/siterep/laterns/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5676949445249,
	lng: 16.014855802059174,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>St. Corona / Simas-Lifte</b><br>941 - 1207 m.<br>1.8 km sípálya / 1 felvonó<br><a href='sieluk.hu/siterep/simas/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3638229370,
	lng: 11.1656827927,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Leutasch</b><br>1100 - 1360 m.<br>8 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/leutasch/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5882301331,
	lng: 12.6910381317,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Loferer Alm</b><br>640 - 1670 m.<br>46 km sípálya / 10 felvonó<br><a href='sieluk.hu/siterep/lofer/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0138549805,
	lng: 13.1862497330,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Mallnitz - Ankogel</b><br>1267 - 2637 m.<br>12.8 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/ankogel/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.7752876282,
	lng: 15.3168029785,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Mariazell</b><br>864 - 1267 m.<br>11 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/mariazell/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6595077515,
	lng: 13.0923242569,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Dürrnberg - Hallein / Zinken</b><br>837 - 1330 m.<br>8 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/durrnberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2238616943,
	lng: 12.9910535812,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Rauris</b><br>940 - 2175 m.<br>32.5 km sípálya / 10 felvonó<br><a href='sieluk.hu/siterep/rauris/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9804878235,
	lng: 13.0515861511,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Mölltal gleccser</b><br>2108 - 3122 m.<br>17.4 km sípálya / 9 felvonó<br><a href='sieluk.hu/siterep/molltal/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5301856995,
	lng: 15.9985828400,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Mönichkirchen - Mariensee</b><br>870 - 1450 m.<br>13 km sípálya / 6 felvonó<br><a href='sieluk.hu/siterep/monichkirchen/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4782905579,
	lng: 15.8790206909,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Mönichwald</b><br>1000 - 1300 m.<br>5.5 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/monichwald/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0851440430,
	lng: 14.1489324570,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Frauenalpe - Murau</b><br>1500 - 2000 m.<br>10 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/frauenalpe/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.6116294861,
	lng: 13.2794876099,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Nassfeld - Hermagor</b><br>600 - 2002 m.<br>110 km sípálya / 30 felvonó<br><a href='sieluk.hu/siterep/nassfeld/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6812934875,
	lng: 15.3797855377,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Niederalpl - Mürzsteg</b><br>1220 - 1460 m.<br>12 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/niederalpl/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.8977775574,
	lng: 11.0406961441,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Obergurgl - Hochgurgl</b><br>1793 - 3082 m.<br>110 km sípálya / 22 felvonó<br><a href='sieluk.hu/siterep/obergurgl/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2510452271,
	lng: 13.5437450409,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Obertauern</b><br>1630 - 2313 m.<br>100 km sípálya / 26 felvonó<br><a href='sieluk.hu/siterep/obertauern/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4040222168,
	lng: 14.1998672485,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Planneralm</b><br>1600 - 2200 m.<br>15 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/planneralm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5169105530,
	lng: 14.9618015289,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Präbichl</b><br>1100 - 1800 m.<br>20 km sípálya / 6 felvonó<br><a href='sieluk.hu/siterep/prabichl/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.7915916443,
	lng: 15.8305692673,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Puchberg am Schneeberg</b><br>810 - 1210 m.<br>7.8 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/puchberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9904823303,
	lng: 12.5434684753,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Grossglockner  Kals - Matrei</b><br>933 - 2422 m.<br>37 km sípálya / 13 felvonó<br><a href='sieluk.hu/siterep/grossglockner/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.710957,
	lng: 15.805589,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Rax - Raxalpe</b><br>528 - 1600 m.<br>3 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/rax/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3755950928,
	lng: 14.1191539764,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Riesneralm</b><br>950 - 1820 m.<br>30 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/riesneralm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3903083801,
	lng: 12.6353359222,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Saalbach - Hinterglemm - Leogang - Fieberbrunn</b><br>830 - 2096 m.<br>270 km sípálya / 70 felvonó<br><a href='sieluk.hu/siterep/saalbach/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6320114136,
	lng: 15.8301095963,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Semmering - Hirschenkogel Zau[:ber:]g</b><br>985 - 1340 m.<br>14 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/semmering/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6146278381,
	lng: 15.7576990128,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Semmering - Stuhleck</b><br>777 - 1774 m.<br>24 km sípálya / 9 felvonó<br><a href='sieluk.hu/siterep/stuhleck/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0539550781,
	lng: 10.6086406708,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Serfaus - Fiss - Ladis</b><br>1200 - 2820 m.<br>198 km sípálya / 39 felvonó<br><a href='sieluk.hu/siterep/serfaus/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.7507362366,
	lng: 12.4331274033,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Sillian - Hochpustertal</b><br>1100 - 2407 m.<br>21.7 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/sillian/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0222778320,
	lng: 9.9645996094,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Silvretta Montafon</b><br>700 - 2430 m.<br>113 km sípálya / 37 felvonó<br><a href='sieluk.hu/siterep/silvretta/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1286010742,
	lng: 10.0562124252,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Sonnenkopf</b><br>1000 - 2300 m.<br>29.5 km sípálya / 9 felvonó<br><a href='sieluk.hu/siterep/sonnenkopf/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9724578857,
	lng: 11.0087623596,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Sölden - Ötztal</b><br>1350 - 3340 m.<br>144.2 km sípálya / 33 felvonó<br><a href='sieluk.hu/siterep/solden/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1281051636,
	lng: 10.2628717422,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Ski Arlberg</b><br>1270 - 2811 m.<br>305 km sípálya / 87 felvonó<br><a href='/siterep/ski-arlberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6494750977,
	lng: 13.4297647476,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Postalm</b><br>1150 - 1450 m.<br>8 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/postalm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3896980286,
	lng: 12.9089727402,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hochkönig</b><br>800 - 1900 m.<br>112 km sípálya / 32 felvonó<br><a href='sieluk.hu/siterep/hochkonig/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.7654342651,
	lng: 13.3642826080,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Zwölferhorn - St. Gilgen</b><br>560 - 1522 m.<br>7 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/zwolferhorn/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5681495667,
	lng: 16.0156993866,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>St. Corona / Unternberg</b><br>860 - 1200 m.<br>2.5 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/stcorona/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4773712158,
	lng: 15.7884321213,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>St. Jakob im Walde</b><br>1000 - 1200 m.<br>4 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/stjakob/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6185818282674,
	lng: 15.79326546183438,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Schmoll Lifte / Steinhaus am Semmering</b><br>840 - 1020 m.<br>1.5 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/schmoll/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.586014,
	lng: 12.563045,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Winklmoosalm - Steinplatte</b><br>740 - 1860 m.<br>42 km sípálya / 13 felvonó<br><a href='sieluk.hu/siterep/steinplatte/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4407081604,
	lng: 15.7040977478,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Strallegg</b><br>800 - 1003 m.<br>3 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/strallegg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0133285522,
	lng: 11.1622266769,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Stubai gleccser</b><br>1697 - 3212 m.<br>38 km sípálya / 22 felvonó<br><a href='sieluk.hu/siterep/stubai/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 48.333883,
	lng: 15.346100,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Jauerling</b><br>825 - 956 m.<br>500 m sípálya / 1 felvonó<br><a href='sieluk.hu/siterep/jauerling/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2891464233,
	lng: 11.8727588654,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hochzillertal - Hochfügen</b><br>600 - 2378 m.<br>83 km sípálya / 36 felvonó<br><a href='sieluk.hu/siterep/hochzillertal/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4082794189,
	lng: 12.0373086929,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Ski Juwel - Alpbachtal, Wildschönau</b><br>830 - 2025 m.<br>93.1 km sípálya / 46 felvonó<br><a href='sieluk.hu/siterep/skijuwel/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4518928528,
	lng: 14.6727991104,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Wald am Schoberpass</b><br>850 - 1200 m.<br>12 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/schoberpass/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9226074219,
	lng: 13.8699340820,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Turracher Höhe</b><br>1400 - 2205 m.<br>42 km sípálya / 14 felvonó<br><a href='sieluk.hu/siterep/turrach/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.9406318665,
	lng: 15.8334541321,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Unterberg</b><br>710 - 1342 m.<br>16 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/unterberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.7092475891,
	lng: 13.2950496674,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Weissensee</b><br>930 - 1324 m.<br>6 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/weissensee/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1695480347,
	lng: 12.6243906021,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Weisssee - Uttendorf</b><br>1482 - 2600 m.<br>23 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/weisssee/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4274978638,
	lng: 15.7622690201,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Wenigzell</b><br>940 - 1140 m.<br>2 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/wenigzell/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4585990906,
	lng: 13.2758913040,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Werfenweng</b><br>902 - 1834 m.<br>27 km sípálya / 9 felvonó<br><a href='sieluk.hu/siterep/werfenweng/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2544326782,
	lng: 12.2807998657,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Wildkogel-Arena Neukirchen Bramberg</b><br>820 - 2150 m.<br>62 km sípálya / 18 felvonó<br><a href='sieluk.hu/siterep/wildkogel/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6274070740,
	lng: 14.3151273727,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Wurzeralm - Spital am Pyhrn</b><br>810 - 1870 m.<br>22 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/wurzeralm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1857452393,
	lng: 15.4857444763,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Schöckel - Schöckl</b><br>780 - 1445 m.<br>2 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/schockel/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2944755554,
	lng: 13.3989381790,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Zauchensee</b><br>1000 - 2188 m.<br>44 km sípálya / 15 felvonó<br><a href='sieluk.hu/siterep/zauchensee/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3235893250,
	lng: 12.7940568924,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Zell am See - Schmittenhöhe</b><br>760 - 2000 m.<br>77 km sípálya / 25 felvonó<br><a href='sieluk.hu/siterep/zellamsee/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2660675049,
	lng: 14.6883907318,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Gaaler Lifte</b><br>860 - 1230 m.<br>6 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/gaal/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5887756348,
	lng: 13.4624185562,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Dachstein West</b><br>780 - 1620 m.<br>51 km sípálya / 23 felvonó<br><a href='sieluk.hu/siterep/dachstein_west/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5625686646,
	lng: 14.0126399994,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Tauplitz</b><br>896 - 1965 m.<br>42 km sípálya / 16 felvonó<br><a href='sieluk.hu/siterep/tauplitz/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3928260803,
	lng: 13.6933345795,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Schladming 4 hegy</b><br>745 - 2015 m.<br>122.7 km sípálya / 44 felvonó<br><a href='sieluk.hu/siterep/schladming/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5075531006,
	lng: 15.6981859207,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hauereck - St. Kathrein am Hauenstein</b><br>1000 - 1305 m.<br>5 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/stkathrein/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.8629531860,
	lng: 15.0685272217,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Lunz am See - Maiszinken</b><br>790 - 1030 m.<br>4.5 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/lunz/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5535850525,
	lng: 15.2365570068,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Aflenz - Bürgeralm</b><br>810 - 1810 m.<br>9 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/aflenz/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6322402954,
	lng: 15.4291019440,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Brunnalm - Hohe Veitsch</b><br>1100 - 1500 m.<br>9 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/brunnalm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.57902604688665,
	lng: 15.857650279649533,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Feistritzsattel</b><br>1100 - 1300 m.<br>2 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/feistritzsattel/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1070518494,
	lng: 11.6749038696,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hintertux gleccser</b><br>1500 - 3250 m.<br>60 km sípálya / 20 felvonó<br><a href='sieluk.hu/siterep/hintertux/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.5404891968,
	lng: 14.7739925385,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Petzen</b><br>650 - 1900 m.<br>15.9 km sípálya / 6 felvonó<br><a href='sieluk.hu/siterep/petzen/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.8396835327,
	lng: 15.0122804642,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Weinebene</b><br>1580 - 1886 m.<br>18 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/weinebene/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.7547340393,
	lng: 14.1571731567,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Simonhöhe</b><br>990 - 1340 m.<br>13 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/simonhohe/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6376075745,
	lng: 12.2879285812,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Zahmer Kaiser - Durchholzen</b><br>660 - 1200 m.<br>15 km sípálya / 9 felvonó<br><a href='sieluk.hu/siterep/zahmerkaiser/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5168609619,
	lng: 12.4270181656,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>St. Johann in Tirol</b><br>659 - 1604 m.<br>43 km sípálya / 17 felvonó<br><a href='/siterep/st-johann-tirol/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0623512268,
	lng: 14.8779563904,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Salzstiegl</b><br>1320 - 1710 m.<br>12 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/salzstiegl/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5551109314,
	lng: 15.3436632156,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Turnau - Schwabenbergarena</b><br>780 - 1150 m.<br>10 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/turnau/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0573844910,
	lng: 10.6607942581,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Fendels</b><br>1325 - 2271 m.<br>10.6 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/fendels/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3451461792,
	lng: 15.5411481857,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Sommeralm - Pirstingerkogellift</b><br>1320 - 1424 m.<br>2 km sípálya / 1 felvonó<br><a href='sieluk.hu/siterep/sommeralm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9456405640,
	lng: 15.0813961029,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Modriach</b><br>1000 - 1230 m.<br>6 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/modriach/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3776321411,
	lng: 13.5461959839,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Fageralm</b><br>930 - 1885 m.<br>15 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/fageralm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.250939,
	lng: 14.482506,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Oberzeiring (Pölstal)</b><br>932 - 980 m.<br>400 m sípálya / 1 felvonó<br><a href='sieluk.hu/siterep/oberzeiring/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4224166870,
	lng: 13.6236362457,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Ramsau am Dachstein - Rittisberg</b><br>1035 - 1636 m.<br>25 km sípálya / 12 felvonó<br><a href='sieluk.hu/siterep/ramsau/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4556617737,
	lng: 13.8142070770,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Stoderzinken</b><br>1700 - 1975 m.<br>8 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/stoderzinken/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4052505493,
	lng: 13.8637933731,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Galsterbergalm</b><br>1000 - 1976 m.<br>12 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/galsterbergalm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2456665039,
	lng: 11.2373857498,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Rangger Köpfl</b><br>820 - 2000 m.<br>13 km sípálya / 5 felvonó<br><a href='/siterep/rangger-kopfl/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 48.7363166809,
	lng: 13.8994970322,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hochficht</b><br>933 - 1338 m.<br>20 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/hochficht/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2150611877,
	lng: 11.0258798599,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kühtai</b><br>1938 - 2520 m.<br>41 km sípálya / 11 felvonó<br><a href='sieluk.hu/siterep/kuehtai/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1553306580,
	lng: 11.3434162140,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Schlick 2000</b><br>1000 - 2240 m.<br>20.6 km sípálya / 9 felvonó<br><a href='sieluk.hu/siterep/schlick/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2563896179,
	lng: 11.5352296829,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Glungezer</b><br>950 - 2304 m.<br>23 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/glungezer/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2712249756,
	lng: 11.3953294754,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Nordkette - Innsbruck</b><br>860 - 2256 m.<br>13.9 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/nordpark/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0868301392,
	lng: 11.4596900940,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Bergeralm</b><br>1048 - 2140 m.<br>28 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/bergeralm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3390083313,
	lng: 11.8432970047,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Fügen - Spieljoch</b><br>630 - 2037 m.<br>18.3 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/fuegen/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2737464905,
	lng: 12.7566452026,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kaprun - Maiskogel</b><br>769 - 1733 m.<br>20 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/maiskogel/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.6757736206,
	lng: 12.9967832565,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kötschach - Mauthen</b><br>710 - 1300 m.<br>6 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/kotschach/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.051491904300896,
	lng: 14.531216025352478,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Tonnerhütte - Zirbitzkogel</b><br>1600 - 1750 m.<br>4 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/tonnerhutte/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 48.001179298552735,
	lng: 15.602173805236816,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Lilienfeld - Muckenkogel</b><br>460 - 1120 m.<br>1 km sípálya / 1 felvonó<br><a href='sieluk.hu/siterep/lilienfeld/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3501205444,
	lng: 15.4597587585,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Teichalm</b><br>1200 - 1450 m.<br>4 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/teichalm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.8602333069,
	lng: 10.9149494171,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Vent</b><br>1890 - 2680 m.<br>15 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/vent/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1998710632,
	lng: 10.9032554626,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Ötz - Hochötz</b><br>1410 - 2272 m.<br>36 km sípálya / 12 felvonó<br><a href='sieluk.hu/siterep/hochotz/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5007438660,
	lng: 12.5716104507,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Buchensteinwand - St. Ulrich am Pillersee</b><br>855 - 1456 m.<br>19.5 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/pillersee/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0603866577,
	lng: 10.3741836548,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kappl</b><br>1180 - 2690 m.<br>40 km sípálya / 6 felvonó<br><a href='sieluk.hu/siterep/kappl/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0823745728,
	lng: 10.4639329910,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>See</b><br>1040 - 2456 m.<br>41 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/see/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.7103805542,
	lng: 12.6181650162,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Golzentipp - Obertilliach</b><br>1430 - 2248 m.<br>12.2 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/obertilliach/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4271392822,
	lng: 10.7769412994,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Berwangertal</b><br>1067 - 1743 m.<br>36 km sípálya / 11 felvonó<br><a href='sieluk.hu/siterep/berwang/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.8636894226,
	lng: 13.8322477341,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Falkert - Heidi Alm Skipark</b><br>1700 - 2300 m.<br>12 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/falkert/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.8654022217,
	lng: 13.9975261688,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hochrindl - Sirnitz - Deutsch Griffen</b><br>1540 - 1886 m.<br>20.6 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/hochrindl/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.30019290451342,
	lng: 15.579902171739377,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>St. Kathrein am Offenegg</b><br>972 - 1100 m.<br>1 km sípálya / 1 felvonó<br><a href='/siterep/stkathrein-offenegg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2419853210,
	lng: 10.7215967178,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Imst / Hoch-Imst</b><br>1053 - 2026 m.<br>9 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/imster/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5283851624,
	lng: 14.4712257385,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kaiserau - Admont</b><br>1130 - 1370 m.<br>3 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/kaiserau/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1537094116,
	lng: 10.5856380463,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Venet - Landeck - Zams - Fliess</b><br>780 - 2212 m.<br>22 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/venet/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1522712708,
	lng: 10.7587585449,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hochzeiger -  Pitztal</b><br>1450 - 2450 m.<br>40 km sípálya / 9 felvonó<br><a href='sieluk.hu/siterep/hochzeiger/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.186008493183024,
	lng: 13.963172435760498,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Krakautal</b><br>1220 - 1450 m.<br>3 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/krakau/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3515014648,
	lng: 15.5185747147,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Holzmeisterlifte Sommeralm</b><br>1240 - 1400 m.<br>3 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/holzmeister/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6240615845,
	lng: 15.2935590744,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Seewiesen - Seeberg</b><br>1100 - 1410 m.<br>6 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/seewiesen/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1098899841,
	lng: 14.9126062393,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Gaberl - Plankogel</b><br>1520 - 1600 m.<br>1.2 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/gaberl/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4982833862,
	lng: 10.5242156982,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Tannheim - Neunerköpfle</b><br>1173 - 1820 m.<br>8.5 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/tannheim/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4854507446,
	lng: 10.6014146805,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Nesselwängle</b><br>1127 - 1800 m.<br>13 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/nesselwangle/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5125541687,
	lng: 10.4580268860,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Schattwald - Zöblen im Tannheimertal</b><br>1090 - 1565 m.<br>10.3 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/schattwald/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5050048828,
	lng: 10.5643787384,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Grän</b><br>1150 - 1821 m.<br>9 km sípálya / 5 felvonó<br><a href='sieluk.hu/siterep/gran/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9409828186,
	lng: 14.0246267319,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Flattnitz</b><br>1400 - 1840 m.<br>13 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/flattnitz/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1110153198,
	lng: 11.3123102188,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Neustift - Elfer</b><br>981 - 2080 m.<br>7 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/neustift/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.73800036011387,
	lng: 12.47872531414032,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kartitsch</b><br>1350 - 1820 m.<br>4 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/kartitsch/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.6812438965,
	lng: 13.2447643280,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Gitschtal - Weißbriach</b><br>820 - 1150 m.<br>4 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/weissbriach/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3873748779,
	lng: 10.9381122589,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Ehrwald</b><br>1112 - 1923 m.<br>27.5 km sípálya / 8 felvonó<br><a href='sieluk.hu/siterep/ehrwald/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4769477844,
	lng: 10.6790513992,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hahnenkamm - Höfen - Reutte</b><br>854 - 1900 m.<br>16 km sípálya / 5 felvonó<br><a href='/siterep/hahnenkamm-hofen/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 48.4166526794,
	lng: 14.2787828445,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kirchschlag</b><br>750 - 900 m.<br>3 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/kirchschlag/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2810707092,
	lng: 9.6940526962,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Furx</b><br>900 - 1200 m.<br>2.5 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/furx/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 48.511430324892274,
	lng: 13.664546012878418,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Haugstein - Vichtenstein</b><br>800 - 900 m.<br>1 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/haugstein/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 48.5534820557,
	lng: 14.2852411270,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Sternstein</b><br>814 - 1102 m.<br>5 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/sternstein/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1160469055,
	lng: 13.1398363113,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Bad Gastein - Graukogel</b><br>1079 - 2007 m.<br>11.9 km sípálya / 3 felvonó<br><a href='/siterep/bad-gastein-graukogel/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1681556702,
	lng: 13.0972557068,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Bad Hofgastein - Bad Gastein</b><br>860 - 2300 m.<br>86 km sípálya / 20 felvonó<br><a href='/siterep/bad-hofgastein-bad-gastein/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0621414185,
	lng: 13.0587396622,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Sportgastein</b><br>1590 - 2686 m.<br>18.2 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/sportgastein/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3737487793,
	lng: 10.8911685944,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Biberwier - Marienberg</b><br>1000 - 1820 m.<br>9 km sípálya / 5 felvonó<br><a href='/siterep/biberwier-marienberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4013938904,
	lng: 10.8788681030,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Lermoos - Grubigstein</b><br>1004 - 2100 m.<br>27.3 km sípálya / 8 felvonó<br><a href='/siterep/lermoos-grubigstein/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.8308219910,
	lng: 12.7533140182,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Lienz - Hochstein</b><br>686 - 1988 m.<br>16 km sípálya / 4 felvonó<br><a href='/siterep/lienz-hochstein/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.8416709900,
	lng: 12.7759304047,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Lienz - Zettersfeld</b><br>1660 - 2278 m.<br>21 km sípálya / 7 felvonó<br><a href='/siterep/lienz-zettersfeld/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4176902771,
	lng: 9.8182582855,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Schwarzenberg - Bödele</b><br>700 - 1467 m.<br>18.5 km sípálya / 12 felvonó<br><a href='/siterep/schwarzenberg-boedele/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5131721497,
	lng: 11.6971569061,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Achenkirch - Christlum</b><br>950 - 1800 m.<br>27 km sípálya / 11 felvonó<br><a href='/siterep/achenkirch-christlum/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3230476379,
	lng: 10.1521797180,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Walmendingerhorn</b><br>1200 - 1946 m.<br>8.4 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/walmendingerhorn/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4131698608,
	lng: 9.9088954926,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Andelsbuch - Baumgartnerhöhe</b><br>655 - 1715 m.<br>15 km sípálya / 7 felvonó<br><a href='/siterep/andelsbuch-baumgartnerhoehe/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4371643066,
	lng: 11.6968183517,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Pertisau - Karwendel</b><br>960 - 1510 m.<br>12 km sípálya / 7 felvonó<br><a href='/siterep/pertisau-karwendel/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4505233765,
	lng: 9.8381166458,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Alberschwende</b><br>720 - 1200 m.<br>18 km sípálya / 7 felvonó<br><a href='sieluk.hu/siterep/alberschwende/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4167442322,
	lng: 9.9834527969,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Schetteregg</b><br>1070 - 1325 m.<br>10 km sípálya / 6 felvonó<br><a href='sieluk.hu/siterep/schetteregg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3983459473,
	lng: 10.9285793304,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Ehrwald - Wettersteinbahnen</b><br>1000 - 1530 m.<br>23 km sípálya / 5 felvonó<br><a href='/siterep/ehrwald-wettersteinbahnen/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4886665344,
	lng: 9.9886798859,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hittisau - Alpenarena Hochhäderich</b><br>1250 - 1600 m.<br>10.5 km sípálya / 5 felvonó<br><a href='/siterep/hittisau-hochhaederich-alpenarena/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3273391724,
	lng: 11.7086067200,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Schwaz - Kellerjoch</b><br>857 - 1887 m.<br>10 km sípálya / 4 felvonó<br><a href='/siterep/kellerjoch-schwaz/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.7731437683,
	lng: 13.1562347412,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Berg im Drautal - Emberger Alm</b><br>1600 - 2150 m.<br>10 km sípálya / 4 felvonó<br><a href='/siterep/emberger-alm-berg-im-drautal/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.8416595459,
	lng: 13.6230945587,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hochlecken - Neukirchen - Altmünster</b><br>870 - 1150 m.<br>4 km sípálya / 5 felvonó<br><a href='/siterep/hochlecken-neukirchen-altmuenster/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3428878784,
	lng: 10.1370067596,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Ifen</b><br>1280 - 2030 m.<br>19 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/ifen/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4244308472,
	lng: 11.7511167526,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Maurach - Rofan</b><br>980 - 1840 m.<br>11 km sípálya / 4 felvonó<br><a href='/siterep/maurach-rofan/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1636085510,
	lng: 11.3800439835,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Mieders - Serles</b><br>960 - 1674 m.<br>5.7 km sípálya / 4 felvonó<br><a href='/siterep/mieders-serles/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5049438477,
	lng: 9.7530860901,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Bregenz - Pfänder</b><br>421 - 1064 m.<br>3 km sípálya / 4 felvonó<br><a href='/siterep/bregenz-pfaender/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5094375610,
	lng: 9.9846515656,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Riefensberg - Hochlitten</b><br>1000 - 1200 m.<br>3 km sípálya / 4 felvonó<br><a href='/siterep/riefensberg-hochlitten/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3930816650,
	lng: 12.1339759827,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kelchsau</b><br>775 - 1605 m.<br>10.9 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/kelchsau/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.6623306274,
	lng: 12.6498880386,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Unken - Heutal</b><br>970 - 1531 m.<br>11 km sípálya / 4 felvonó<br><a href='/siterep/unken-heutal/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.9034805298,
	lng: 14.4204216003,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Losenstein - Hohe Dirn</b><br>836 - 1156 m.<br>11 km sípálya / 4 felvonó<br><a href='/siterep/losenstein-hohe-dirn/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0942649841,
	lng: 14.6097993851,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Obdach - Rieseralm</b><br>1310 - 1520 m.<br>10.5 km sípálya / 4 felvonó<br><a href='/siterep/obdach-rieseralm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2849082947,
	lng: 10.4247779846,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Elbigenalp - Knittellifte</b><br>1040 - 1140 m.<br>2 km sípálya / 3 felvonó<br><a href='/siterep/elbigenalp-knittellifte/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0948219299,
	lng: 9.9804573059,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Silbertal - Kristberg</b><br>889 - 1589 m.<br>5 km sípálya / 3 felvonó<br><a href='/siterep/silbertal-kristberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5106544495,
	lng: 11.7923431396,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Steinberg - Rofan</b><br>1050 - 1250 m.<br>1 km sípálya / 3 felvonó<br><a href='/siterep/steinberg-rofan/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5532951355,
	lng: 12.4542551041,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kirchdorf</b><br>640 - 780 m.<br>5 km sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/kirchdorf/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3796882629,
	lng: 10.5600795746,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Stanzach</b><br>940 - 1049 m.<br>500 m sípálya / 3 felvonó<br><a href='sieluk.hu/siterep/stanzach/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2913093567,
	lng: 12.6835737228,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Piesendorf - Erlebnisberg Nagelköpfel</b><br>785 - 900 m.<br>2 km sípálya / 3 felvonó<br><a href='/siterep/piesendorf-erlebnisberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.8889427185,
	lng: 13.5803508759,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Weyregg am Attersee - Wachtberglifte</b><br>482 - 823 m.<br>4 km sípálya / 3 felvonó<br><a href='/siterep/weyregg-am-attersee-wachtberglifte/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 48.5960006714,
	lng: 14.7509374619,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Karlstift - Aichelberglifte</b><br>900 - 1050 m.<br>8 km sípálya / 3 felvonó<br><a href='/siterep/karlstift-aichelberglifte/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2091865540,
	lng: 9.8439540863,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Raggal - Marul</b><br>960 - 1300 m.<br>7 km sípálya / 3 felvonó<br><a href='/siterep/raggal-marul/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.9072532654,
	lng: 15.7719736099,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Rohr im Gebirge - Furtnerlifte</b><br>800 - 927 m.<br>3.9 km sípálya / 3 felvonó<br><a href='/siterep/rohr-im-gebirge-furtnerlifte/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5875854492,
	lng: 12.0937957764,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Schneeberg - Hagerlifte</b><br>800 - 1000 m.<br>2.6 km sípálya / 3 felvonó<br><a href='/siterep/schneeberg-hagerlifte/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1493644714,
	lng: 14.8457908630,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Kleinlobming</b><br>764 - 1000 m.<br>1 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/kleinlobming/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0162963867,
	lng: 12.3705949783,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Prägraten am Großvenediger</b><br>1312 - 1440 m.<br>2 km sípálya / 2 felvonó<br><a href='/siterep/praegraten-am-grossvenediger/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3691139221,
	lng: 11.7141971588,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Stans</b><br>570 - 690 m.<br>500 m sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/stans/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.4783744812,
	lng: 14.2317686081,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Unterbergen - Bodental</b><br>1030 - 1200 m.<br>2 km sípálya / 2 felvonó<br><a href='/siterep/unterbergen-bodental/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2895622253,
	lng: 13.0030488968,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Embach - Hörndl</b><br>1012 - 1296 m.<br>3 km sípálya / 2 felvonó<br><a href='/siterep/embach-hoerndl/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 48.5626792908,
	lng: 14.6340360641,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Sandl - Viehberg</b><br>950 - 1112 m.<br>3 km sípálya / 2 felvonó<br><a href='/siterep/sandl-viehberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 48.3631324768,
	lng: 14.8940439224,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>St. Georgen am Walde - Schorschi-Lifte</b><br>750 - 787 m.<br>1 km sípálya / 2 felvonó<br><a href='/siterep/st-georgen-am-walde-schorschi-lifte/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 48.6531105042,
	lng: 14.7864170074,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Harmanschlag - Arralifte</b><br>740 - 860 m.<br>4 km sípálya / 2 felvonó<br><a href='/siterep/harmanschlag-arralifte/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2677497864,
	lng: 10.3834800720,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Jöchelspitze (Lechtal)</b><br>1200 - 1800 m.<br>5 km sípálya / 2 felvonó<br><a href='/siterep/bach-joechelspitze/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2611312866,
	lng: 10.3422441483,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Holzgau - Gföllberglift</b><br>1108 - 1329 m.<br>2.5 km sípálya / 2 felvonó<br><a href='/siterep/holzgau-gfoellberglift/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2583084106,
	lng: 9.6823081970,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Übersaxen - Gröllerkopf</b><br>1000 - 1200 m.<br>3 km sípálya / 2 felvonó<br><a href='/siterep/uebersaxen-groellerkopf/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.8296051025,
	lng: 14.6340465546,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Eberstein - Saualpe</b><br>1650 - 1780 m.<br>1 km sípálya / 1 felvonó<br><a href='/siterep/eberstein-saualpe/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.9467430115,
	lng: 14.5834627151,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Maria Neustift - Glasenberg</b><br>780 - 971 m.<br>4 km sípálya / 1 felvonó<br><a href='/siterep/maria-neustift-glasenberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2928543091,
	lng: 10.9143695831,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Obsteig - Grünberg</b><br>1030 - 1102 m.<br>1.3 km sípálya / 1 felvonó<br><a href='/siterep/obsteig-gruenberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4559822083,
	lng: 9.9764499664,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hittisau - Hittisberg</b><br>800 - 1000 m.<br>1.9 km sípálya / 1 felvonó<br><a href='/siterep/hittisau-hausberg/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.8754310608,
	lng: 10.5088195801,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Bergkastel Nauders</b><br>1400 - 2850 m.<br>72 km sípálya / 13 felvonó<br><a href='/siterep/nauders-am-reschenpass-bergkastel/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.1633682251,
	lng: 11.8605165482,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Mayrhofen - Zillertal</b><br>630 - 2500 m.<br>136 km sípálya / 44 felvonó<br><a href='/siterep/mayrhofen-penken-ahorn-rastkogel-eggalm/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3243865967,
	lng: 11.1793766022,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Ski Arena Seefeld - Mösern - Gschwandtkopf</b><br>1200 - 1500 m.<br>5 km sípálya / 8 felvonó<br><a href='/siterep/seefeld-reith-gschwandtkopf/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3319854736,
	lng: 11.2000246048,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Ski Arena Seefeld - Reith - Rosshütte & Härmelekopf</b><br>1230 - 2064 m.<br>20 km sípálya / 11 felvonó<br><a href='/siterep/seefeld-rosshuette/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9583015442,
	lng: 10.8714494705,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Pitztal gleccser</b><br>2685 - 3440 m.<br>20.7 km sípálya / 6 felvonó<br><a href='/siterep/pitztaler-gletscher/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9686088562,
	lng: 10.8698205948,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Rifflsee</b><br>1640 - 2800 m.<br>18.4 km sípálya / 6 felvonó<br><a href='sieluk.hu/siterep/rifflsee/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 46.9684066772,
	lng: 10.0567150116,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Partenen - Silvretta Bielerhöhe</b><br>1920 - 2040 m.<br>2 km sípálya / 2 felvonó<br><a href='/siterep/partenen-silvretta-bielerhoehe/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.92266940452535,
	lng: 15.207352638244629,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hochbärneck</b><br>800 - 1100 m.<br>5 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/hochbarneck/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 48.10665746739266,
	lng: 13.381712436676025,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Waldzell - Kohleck</b><br>660 - 750 m.<br>800 m sípálya / 1 felvonó<br><a href='sieluk.hu/siterep/waldzell/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.5833702087,
	lng: 12.0663347244,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Tirolina - Haltjochlift</b><br>852 - 1077 m.<br>4 km sípálya / 2 felvonó<br><a href='/siterep/hinterthierseetirolina-haltjochlift/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.2728195190,
	lng: 9.9066686630,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Faschina (Fontanella)</b><br>1450 - 1980 m.<br>8 km sípálya / 4 felvonó<br><a href='sieluk.hu/siterep/faschina/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.3905086,
	lng: 15.7692433,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Miesenbach - Wildwiese</b><br>1100 - 1256 m.<br>2 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/miesenbach/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.737360791884655,
	lng: 16.33915901184082,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Rétfalu - Wiesen</b><br>340 - 380 m.<br>300 m sípálya / 1 felvonó<br><a href='sieluk.hu/siterep/wiesen/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.4645786,
	lng: 13.3719841,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>St. Martin am Tennengebirge</b><br>960 - 1140 m.<br>5 km sípálya / 4 felvonó<br><a href='/siterep/stmartin-tennengebirge/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.57438330327434,
	lng: 15.908396244049072,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Arabichl - Kirchberg am Wechsel</b><br>1350 - 1593 m.<br>2 km sípálya / 2 felvonó<br><a href='sieluk.hu/siterep/kirchbergamwechsel/'>bővebb infó &raquo;</a></div></div>"
},
{
	lat: 47.0185127258,
	lng: 14.9557828903,
	content: "<div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><div style='line-height:1.35; overflow:hidden; white-space:nowrap;'><b>Hirschegger Dorflifte</b><br>900 - 1200 m.<br>3 km sípálya / 3 felvonó<br><a href='/siterep/hirschegger-dorflifte/'>bővebb infó &raquo;</a></div></div>"
}];