<script type="text/javascript">
	var switchTo5x=true;
	  (function() {
		var stscr = document.createElement('script'); stscr.type = 'text/javascript'; stscr.async = true;
	    stscr.src ="http://w.sharethis.com/button/buttons.js";
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(stscr, s);
		stscr.onload=stCB;
		stscr.onreadystatechange=function(){if(stscr.readyState=='loaded'){stCB();}};})();
		function stCB(){
			stLight.options({
					publisher:'6beba854-ee6d-4ae1-a4f3-b69815c8ef63'
				});
		}
	</script>
	<script type="text/javascript">
		var timeOut = null;
		var shiftButtons = function() {
		var sharebox = document.getElementById('sharebox');
		if(document.documentElement.clientWidth<1100){
			document.getElementById('verticalbuttons').style.display='none';
			document.getElementById('horizontalbuttons').style.display='block';
			sharebox.style.position="relative";
			sharebox.style.left="auto";
			sharebox.style.top="auto";
			sharebox.style.marginBottom="6px";
			sharebox.style.marginLeft="auto";
			sharebox.style.marginRight="auto";
			sharebox.style.width="500px";
		} else {
			sharebox.style.position="fixed";
			sharebox.style.left="50%";
			sharebox.style.marginLeft="-566px";
			sharebox.style.top="20px";
			sharebox.style.width="90px";
			document.getElementById('verticalbuttons').style.display='block';
			document.getElementById('horizontalbuttons').style.display='none';
		}
	};

	window.onresize = function(){
	   if(timeOut != null) clearTimeout(timeOut);
	   setTimeout(shiftButtons, 1000);
	};
</script>

<div id="sharebox" style="position: fixed; left: 50%; top: 20px; margin-left: -566px;">
  <div id="horizontalbuttons" style="display:none">
    <span class="st_fblike_hcount" displayText="ShareThis"></span>
    <span class="st_twitter_hcount" displayText="ShareThis"></span>
    <span class="st_sharethis_button" displayText="ShareThis"></span>
    <span class="st_email_button" displayText="Email"></span>
  </div>
  <div id="verticalbuttons">
    <span class="st_fblike_vcount" displayText="ShareThis"></span><br/>
    <span class="st_twitter_vcount" displayText="ShareThis"></span><br/>
    <span class="st_sharethis_vcount" displayText="ShareThis"></span><br/>
    <span class="st_email_button" displayText="Email"></span><br/>
  </div>
</div>
