javascript:(function(){
  var TARGET_DOMAIN='streetvoice';
  var TARGET_FUNCTION='songs';

  var url=""+window.location;
  if(url.indexOf(TARGET_DOMAIN)==-1 || url.indexOf(TARGET_FUNCTION)==-1){
    alert("You should use it at StreetVoice Music Page!")
  }else{

    var regexSongId=(/\d+/);
    var songId=regexSongId.exec(url);

    $.ajax({
      url:"https://www.streetvoice.com/api/v3/songs/"+songId+"/",
      method:'GET',
      success:function(data){
        var a = document.createElement("a");
        a.href = data.file;
        a.download = data.name;
        document.body.appendChild(a);
        a.click();
      },
      error:function(){
        alert('error~');
      }
    });
  }
})()