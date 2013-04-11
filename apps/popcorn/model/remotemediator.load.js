montageDefine("7ce74b9","model/remotemediator",{dependencies:["montage/core/core"],factory:function(e,t,n){var r=e("montage/core/core").Montage,i="gp967ctbkuhh32ztc2knmj9p";t.Remotemediator=r.create(r,{TRAILERS_FEED:{value:"https://gdata.youtube.com/feeds/api/videos?q=%s+official+trailer&max-results=1&v=2&alt=json"},BOXOFFICE_FEED:{value:"http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=15&country=us&apikey="+i},UPCOMING_FEED:{value:"http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?page_limit=30&page=1&country=us&apikey="+i},TOPRENTALS_FEED:{value:"http://api.rottentomatoes.com/api/public/v1.0/lists/dvds/top_rentals.json?limit=20&country=us&apikey="+i},INTHEATERS_FEED:{value:"http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=30&page=1&country=us&apikey="+i},load:{value:function(){this.loadLatestBoxofficeMovies(),this.loadUpcomingMovies(),this.loadTopDvdRentals(),this.loadInTheaters()}},jsonpCall:{value:function(e,t){var n="scriptCallback"+t.uuid.replace(/-/g,"_"),r=document.createElement("script");window[n]=function(e){delete window[n],r.parentNode&&r.parentNode.removeChild(r),t.apply(this,arguments)},r.type="text/javascript",r.src=e+"&callback="+n,document.head.appendChild(r)}},searchYoutubeTrailer:{value:function(e,t){var n=e.split(" "),r="",i;for(var s=0,o=n.length;s<o;s++)i=n[s],s!=0&&(r+="+"),r+=i;var u=this.TRAILERS_FEED.replace("%s",r);this.jsonpCall(u,function(e){t(e.feed.entry[0].media$group.yt$videoid.$t)})}},loadLatestBoxofficeMovies:{value:function(e){this.jsonpCall(this.BOXOFFICE_FEED,this.latestBoxofficeMoviesCallback)}},latestBoxofficeMoviesCallback:{value:function(e){var t=e.movies;t?this.dispatchEventNamed("remoteDataReceived",!0,!0,{type:"latestBoxofficeMovies",data:t}):alert("flixter api error, please try again")}},loadUpcomingMovies:{value:function(e){this.jsonpCall(this.UPCOMING_FEED,this.upcomingMoviesCallback)}},upcomingMoviesCallback:{value:function(e){var t=e.movies;t?this.dispatchEventNamed("remoteDataReceived",!0,!1,{type:"upcomingMovies",data:t}):alert("flixter api error, please try again")}},loadTopDvdRentals:{value:function(e){this.jsonpCall(this.TOPRENTALS_FEED,this.topDvdRentalsCallback)}},topDvdRentalsCallback:{value:function(e){var t=e.movies;t?this.dispatchEventNamed("remoteDataReceived",!0,!1,{type:"topDvdRentals",data:t}):alert("flixter api error, please try again")}},loadInTheaters:{value:function(e){this.jsonpCall(this.INTHEATERS_FEED,this.inTheatersCallback)}},inTheatersCallback:{value:function(e){var t=e.movies;t?this.dispatchEventNamed("remoteDataReceived",!0,!1,{type:"inTheaters",data:t}):alert("flixter api error, please try again")}}})}})