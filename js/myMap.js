var Star = L.icon({
    iconUrl: '../images/watch.png',

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [18, 18], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -13] // point from which the popup should open relative to the iconAnchor
});

//cities
    A1 = L.marker([33.766287,-84.306099], {icon: Star}).bindPopup(' <p><b>Location: </b>722 W College Ave,ÊDecatur</p><b>Description:</b><p>A pet food store on West College Avenue was robbed by "a few" young black males on June 30, according to reports. This was reportedly the second time the store has been robbed since opening "a few months ago."</p>'),
    B1 = L.marker([33.738687,-84.368455], {icon: Star}).bindPopup(' <p><b>Location: </b>575 Boulevard Southeast, Grant Park</p><b>Description:</b><p>A woman was reportedly robbed at gunpoint in a parking lot on Boulevard Southeast by two young black men in a blue car. The men took both her phone and wallet before driving away.</p>'),
    C1 = L.marker([33.755751,-84.332019], {icon: Star}).bindPopup(' <p><b>Location: </b>Gilliam Park</p><b>Description:</b><p>Two young suspects reportedly kicked a woman&#39;s dog and shot her in the leg before taking her phone on Wade Avenue Northeast at Gilliam Park on July 2.</p>'),
    D1 = L.marker([33.755421,-84.350815], {icon: Star}).bindPopup(' <p><b>Location: </b>Hardee St.</p><b>Description:</b><p>Suspects allegedly asked three victims on Hardee Street for the time and then ordered them to give up their stuff and run at about 4 p.m. A gun was reportedly fired.</p>'),
    E1 = L.marker([33.747669,-84.356431], {icon: Star}).bindPopup(' <p><b>Location: </b>Northern Ave SE</p><b>Description:</b><p>A man allegedly pointed a gun at a woman and robbed her on Northern Avenue Southeast after he had stopped to ask her for directions on July 2 at about 9:15 p.m. The man escaped in a maroon Honda CRV.</p>'),
    F1 = L.marker([33.736225,-84.337023], {icon: Star}).bindPopup(' <p><b>Location: </b>Van Vleck Ave</p><b>Description:</b><p>Camease Miller, 30, was found shot to death in a closet in a home that she had been visiting in the 1600 block of Van Vleck Avenue late on July 2. Police believe the mother of two was shot during a home invasion.</p>'),
    G1 = L.marker([33.760614,-84.307044], {icon: Star}).bindPopup(' <p><b>Location: </b>Oakhurst Park at Third Ave</p><b>Description:</b><p>Three women were the victims of an armed robbery in Oakhurst Park on July 2. A suspect reportedly pulled out a gun and fired it in the air after one of the women refused to give him her cell phone. The suspects had stolen a maroon Honda CRV from another of the women and they escaped in that vehicle.  A 15-year-old was apprehended for the carjacking the next day.</p>'),
    H1 = L.marker([33.756978,-84.310482], {icon: Star}).bindPopup(' <p><b>Location: </b>2nd Ave NE</p><b>Description:</b><p>Two black men demanded a laptop from a man sitting in his front yard on the 300 block of Second Avenue on July 1. One of the suspects fired what appeared to be a cap gun down the driveway while the other suspect chased the victim to his porch. The victim kicked on of the suspects in the groin and the two fled back to the SUV they had arrived in and drove away.</p>'),
    I1 = L.marker([33.739544,-84.344401], {icon: Star}).bindPopup(' <p><b>Location: </b>May Ave</p><b>Description:</b><p>Patrick Cotrona, 33, was shot and killed while he was walking on May Avenue to a local pub with two friends in the East Atlanta Village on May 25 at about 11 p.m. Police believe the suspects in his murder are two black&#44; teenage boys who are also believed to be linked to two armed robberies earlier in the evening. One of the two friends walking home with Cotrona was shot in the leg.</p>'),
    J1 = L.marker([33.740057,-84.338356], {icon: Star}).bindPopup(' <p><b>Location: </b>Glenwood Ave at Blake Ave</p><b>Description:</b><p>Three black men reportedly robbed a man at gunpoint on July 7 while he was walking home from a bar on Glenwood Avenue. The men were described as being in their early 20s. They stole the man&#39;s phone and everything in his pockets. </p>'),
    K1 = L.marker([33.75016,-84.361997], {icon: Star}).bindPopup(' <p><b>Location: </b>765 Kirkwood Ave (approximate)</p><b>Description:</b><p>A couple from North Carolina was allegedly robbed of all their money at gunpoint on May 25 by the one of the two suspects who would later allegedly shoot and kill Patrick Cotrona in East Atlanta. The couple had been on their way to a nearby bar when the suspect robbed them and got away in a sedan.</p>'),
    L1 = L.marker([33.750178,-84.354229], {icon: Star}).bindPopup('<p><b>Location: </b>Kirkwood Avenue and Stovall Street</p><b>Description:</b><p>A jogger was held up on May 25 at the intersection of Kirkwood Avenue and Stovall Street by one of the two suspects allegedly responsible for shooting and killing Patrick Cotrona in East Atlanta later that night. The teenager stole the jogger&#39;s iPhone before jumping into a waiting vehicle, according to the report.</p>')
    
var crimes = L.layerGroup([A1,B1,C1,D1,E1,F1,G1]);
var crimes2 = L.layerGroup([H1,I1,J1,K1,L1]);

    
var cmAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    cmUrl = 'http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/100064/256/{z}/{x}/{y}.png';

var regular   = L.tileLayer(cmUrl, {styleId: 100064, attribution: cmAttr});

		var map = L.map('map', {
			center: new L.LatLng(33.747519,-84.33717),
			//setMaxBounds(map.getBounds()),
                
		    //var = southWest = new L.LatLng(33.727766,-84.8172),
			//northEast = new L.LatLng(34.328694,-83.150024),
			//fitBounds = new L.LatLngBounds(southWest, northEast),
			zoom: 13,
			layers: [regular, crimes, crimes2],
		});
		
		/*var southWest = new L.LatLng(33.72,-84.401779),
		northEast = new L.LatLng(33.78,-84.279556),
		bounds = new L.LatLngBounds(southWest, northEast);
		
		// Restrict to bounds
		map.setMaxBounds(bounds);
		// Fit bounds
		map.fitBounds(bounds);*/


L.tileLayer('http://{s}.tile.cloudmade.com/825c6664ffdf4e619e51fb7dd3b47005/100064/256/{z}/{x}/{y}.png', {
                        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                        maxZoom: 18
                        }).addTo(map);

var baseLayers = {};

var overlayMaps = {
    
    //"Crimes": crimes,
    //"Crimes2": crimes2
    
};

L.control.layers(baseLayers, overlayMaps).addTo(map);
    
//var marker = L.marker([33.751748,-84.391479]).bindLabel('Look revealing label!').addTo(map);
    
//var popup = L.popup()
    //.setLatLng([33.751748,-84.491479])
    //.setContent("I am a standalone popup.")
    //.openOn(map);