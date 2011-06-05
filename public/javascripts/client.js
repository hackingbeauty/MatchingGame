MatchGame = {
  init:function(){
    now.ready(function(){
      MatchGame.getName();
      MatchGame.startGame();
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
  startGame:function(){
    now.roomId = "DanMarkRoom";
    $('#message-input').keypress(function(e) {
      if(e.keyCode==13){
        now.message= $("#message-input").val();
        now.sendBroadcast(now.name,now.message);
        now.showMessagesForGroup(now.roomId);
        $("#message-input").val('');
        console.log('done');
      }
    });
    now.getGroup = function(obj){
      for(key in obj){
        // console.log(obj[key]);
      }
    };
    now.receiveBroadcast = function(name,message){
      $("#messages").append("<br>" + name + ": " + message);
    };
    now.showAllMessages = function(messages){
      // $('ul#previousMessages').innerHTML = '';
      // for(msg in messages){
      //   $('ul#previousMessages').append('<li>' + messages[msg] + '</li>');
      // }
    }
  }
}

MatchGame.init();


