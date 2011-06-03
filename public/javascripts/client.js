MatchGame = {
  init:function(){
    now.ready(function(){
      MatchGame.getName();
      MatchGame.startGame();
    });
  },
  getName:function(){
    // now.name = prompt('Enter your name');
    console.log('inside getName');
    $( "#name-form" ).dialog({
      autoOpen: false,
      width: 450,
      modal: true,
      title: "Enter Name",
      buttons: {
      	"Send": function() {

      	},
      	Cancel: function() {
      		$(this).dialog("close");
      	}
      },
      open: function(event, ui) { 
          $('.ui-widget-overlay').bind('click', function(){ 
            $("#name-form").dialog('close'); 
          });
      }, 
      close: function() {
        allFields.val( "" ).removeClass( "ui-state-error" );
      }
    });        
    $('#name-form').dialog('open');
    
    
    
  },
  startGame:function(){
    now.roomId = "DanMarkRoom";
    $("#join").click(function(){
      now.message= $("#message-input").val();
      now.sendBroadcast(now.name,now.message);
      now.showMessagesForGroup(now.roomId);
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
      $('ul#previousMessages').innerHTML = '';
      for(msg in messages){
        $('ul#previousMessages').append('<li>' + messages[msg] + '</li>');
      }
    }
  }
}

MatchGame.init();


