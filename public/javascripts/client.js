MatchGame = {
  init:function(){
    now.ready(function(){
      MatchGame.getName();
      MatchGame.startGame();
      MatchGame.receiveBroadcasts();
    });
  },
  setName:function(){
    now.name = $('#player-name').val();
  },
  getName:function(){
    $('#player-name').focus();
    $( "#name-form" ).submit(function(){
      return false;
    });
    $('#player-name').keypress(function(e) {
      if(e.keyCode==13){
        MatchGame.setName();
        $("#name-form").dialog('close');
        $('#message-input ').focus();
      }
    });
    $( "#name-form" ).dialog({
      autoOpen: false,
      width: 450,
      modal: true,
      title: "Enter Name",
      buttons: {
      	"Join Game": function() {
          MatchGame.setName();
          $("#name-form").dialog('close'); 
      	},
      	"Leave": function() {
      		$(this).dialog("close");
      	}
      },
      open: function(event, ui) { 
        $('.ui-widget-overlay').bind('click', function(){ 
          $("#name-form").dialog('close'); 
        });
      }
    });        
    $('#name-form').dialog('open');
    return false; 
  },
  receiveBroadcasts:function(){
    now.receiveBroadcast = function(name,message){
       $("#messages").append("<br>" + name + ": " + message);
    };
  },
  startGame:function(){
    now.roomId = "DanMarkRoom";
    $('#message-input').keypress(function(e) {
      if(e.keyCode==13){
        now.message= $("#message-input").val();
        now.sendBroadcast(now.name,now.message);
        $("#message-input").val('');
      }
    });
  }
}

MatchGame.init();


