$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

myJsonpCallback = function(data)
{

$(data.response.posts).each(function( index, post) {
if(typeof post.title === 'undefined') {
caption = $(post.caption).find("strong").text();
$('.section-blog .post-list').append("<li><a href='" + post.post_url + "'>"+caption+"</a></li>")

} else {
$('.section-blog .post-list').append("<li><a href='" + post.post_url + "'>"+post.title+"</a></li>")
}
});
}

$.ajax({
    type: "GET",
    url : "http://api.tumblr.com/v2/blog/honestcharleybodkin.tumblr.com/posts",
    dataType: "jsonp",
    data: {
        api_key : "838UbwiEQ1oDFjHGvCzG5t6zL20497m0KyV6KnN1YKuix9SZEF",
        jsonp : "myJsonpCallback"
    }
});

        function resizer() {
        	if (document.documentElement.clientWidth > 650) {
        	        		$('.title').show();

        		$('.title').arctext({
        			radius: 2000,
        			dir: 1
        		});
        	} 
        	if (document.documentElement.clientWidth < 650) {

        		$('.title').hide();
        	}
        }
        resizer();

        function spinner() {
        	$("h3.job-spinner .item").show();
        	var i = 0;
        	$("h3.job-spinner .item").each(function() {
        		var $this = $(this);
        		$this.css("top", i);
        		i += 70;
        		doScroll($this);
        	});

        	function doScroll($ele) {
        		var top = parseInt($ele.css("top"));
        		if (top < -70) {
        		    var n = $( "h3.job-spinner .item" ).length;

        			top = (n*70)-70;
        			$ele.css("top", top);
        		}
        		$ele.animate({
        			top: (parseInt(top) - 70)
        		}, 600, 'swing', function() {
        			doScroll($(this));
        		}).delay(1500);
        	}
        }
function processJson(data) { 
    	console.log(data);

    if(data.response.result == "success") {
	    $(".section-connect #success").show();
	    $(".section-connect #submit").hide();
    	$('#submit').val('SENT');
    	$('#submit').removeClass('sending');
    	$('#submit').addClass('sent');
    } 
    // 'data' is the json object returned from the server 
    if(data.response.message == "invalid") {
	    $(".form-message .error").show();
    	$('#submit').val('SEND');
    	$('#submit').removeClass('sending');
    } else {
	    $(".form-message .error").hide();
    }
    if(data.response.email != "valid") {
	    if(data.response.email == "invalid") {
		    $(".form-email .error").text("Double check, please?");
		        	$('#submit').val('SEND');
    	$('#submit').removeClass('sending');

		   } else {
		    $(".form-email .error").text("How can I reach you?");
		        	$('#submit').val('SEND');
    	$('#submit').removeClass('sending');

		   } 
			$(".form-email .error").show();
    } else {
	    $(".form-email .error").hide();
    }
    if(data.response.name == "invalid") {
	    $(".form-name .error").show();
	        	$('#submit').val('ERROR, PLEASE EMAIL CHARLEY@BODKIN.ME');
    	$('#submit').removeClass('sending');

    } else {
	    $(".form-name .error").hide();
    }
}
$(document).ready(function(){
    $('#contact').ajaxForm({ 
        // dataType identifies the expected content type of the server response 
        dataType:  'json', 
 
        // success identifies the function to invoke when the server response 
        // has been received 
        success:   processJson 
    }); 
        
           $('.submit').click(function() {
           if($( "#submit" ).hasClass( "sending" )) {
    	$('#submit').val('SEND');
    	$('#submit').removeClass('sending');
           } else {
    	$('#submit').val('SENDING...');
    	$('#submit').addClass('sending');
    	
           }
});
 
/*
	        $('#portfolio-container ul li').hover(function() {
	        	$(this).children('.item-meta').fadeIn('fast');
	        },function() {
	        	$(this).children('.item-meta').fadeOut('fast');
	        });
	        */

	        $('#portfolio-container ul li').each(function() {
	        	var type = $(this).data('type');
	        	var name = $(this).data('name');
				$(this).wrap('<a class="item-meta" rel="shadowbox" href="' + $(this).data('url') + '">');
				$(this).append(
				'<div class="item-meta-type">'+type+'</div>'+
				'<div class="item-meta-name">'+name+'</div>');
				Shadowbox.setup() 
			});
        	$('.loader').delay(1000).fadeOut();
			$('.frame').delay(1000).animate({opacity:1});
			$('a.close-name').click(function( event ){
if (event.stopPropagation) {
event.stopPropagation();
event.preventDefault();
}				$('.section-name h3, .section-name .down-arrow').slideDown();
				$('.section-name .hidden-content').slideUp();
			});
			$('a.name-link').click(function( event ){
if (event.stopPropagation) {
event.stopPropagation();
event.preventDefault();
}				$('.section-name h3, .section-name .down-arrow').slideUp();
				$('.section-name .hidden-content').slideDown();
			})        
        	$(window).resize(function() {
        		resizer();
        	});
        	setTimeout(function() {
        		spinner();
        	}, 3000);
        });

        var _gaq = [
        	['_setAccount', 'UA-32067529-1'],
        	['_trackPageview']
        ];
        (function(d, t) {
        	var g = d.createElement(t),
        		s = d.getElementsByTagName(t)[0];
        	g.src = '//www.google-analytics.com/ga.js';
        	s.parentNode.insertBefore(g, s)
        }(document, 'script'));
                
        /* Map */
        
        			// Initialize some variables:
			var element = '#worldmap',
				width = 500,
				height = 500,
				start = Date.now(),
				speed = 500000,
				velocity = .005,
				then = Date.now();


			var radius = 10,	// px
				hoverRadius = 20; // px

			var features, circles;
		    
			// Define the type of map projection we want: (see https://github.com/mbostock/d3/wiki/Geo-Projections)
		    var projection = d3.geo.orthographic()
			    .scale(200)
			    .translate([width / 2, 250]) // set the center of the map to be the center of the canvas
			    .clipAngle(90);
			    

			// Save the path generator for the current projection:
			var path = d3.geo.path()
			    .projection(projection)
			    .pointRadius( function(d,i) {
		    		return radius;
		    	});

  d3.timer(function(){
      var angle = -velocity * (Date.now() - then) + 90;

      var rotate = [0, -30, 0];
      
      rotate[0] = angle;
      projection.rotate(rotate);
	svg.selectAll("path").attr("d", path);

  });

			// Define the longitude and latitude scales, which allow us to map lon/lat coordinates to pixel values:
			var lambda = d3.scale.linear()
			    .domain([0, width])
			    .range([-180, 180]);

			var phi = d3.scale.linear()
			    .domain([0, height])
			    .range([90, -90]);

			// Create the drawing canvas:
			var svg = d3.select("#worldmap").append("svg:svg")
			    .attr("width", '100%')
			    .attr("height", '100%');
			    

			//Create a base circle: (could use this to color oceans)
		    var backgroundCircle = svg.append("svg:circle")
		        .attr('cx', width / 2)
		        .attr('cy', height /2)
		        .attr('r', 0)
		        .attr('class', 'geo-globe');
								
			// Make a <g> tag to group all our countries, which is useful for zoom purposes. (child elements belong to a 'group', which we can zoom all-at-once)
		    var world = svg.append('svg:g');
		    var zoomScale = 1; // default  
		    
		    // Create the element group to mark individual locations:
		    var locations = svg.append('svg:g')
		    	.attr('id', 'locations');

		    // Having defined the projection, update the backgroundCircle radius:
			backgroundCircle.attr('r', projection.scale() );

		    
		    // Construct our world map based on the projection:
		    d3.json('data/world-countries.json', function(collection) { 

				features = world.selectAll('path')
					.data(collection.features)
					.enter()
					.append('svg:path')
						.attr('class', 'geo-path')
						.attr('d', path); 
				
				features.append('svg:title')
					.text( function(d) { return d.properties.name; });
			   	

			}); // end FUNCTION d3.json()

		    // Load our location data:
		    d3.json('data/data.geojson', function(collection) {

				// Plot the positions on the map:
			    circles = locations.selectAll('path')
			    	.data(collection.features)
			    	.enter()
			    	.append('svg:path')
			    		.attr('class', function(d) { return d.properties.class + " geo-node"; } )
			    		.attr('d', path)

			    circles.append('svg:title')
			        .text( function(d) { return d.properties.name; } );
					
					circles.append("line")
					.attr("transform", "translate(0," + 10 + ")")
					.attr({
					  x1: 10,
					  x2: 0,
					  y1: 10,
					  y2: 0
					})
					.style({
					  stroke: "#000000",
					  
					})

			}); // end FUNCTION d3.json()            
			

			
					        function mouseover(d, i) {
									console.log("stop");
									velocity = 0;
		        }; // end FUNCTION mouseover(d,i)

					        function mouseout(d, i) {
				velocity = .005;
		        }; // end FUNCTION mouseover(d,i)

			
