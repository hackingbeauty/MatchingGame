MatchGame = {
  init:function(){
    now.ready(function(){
      now.name = prompt('Enter your name');
      now.roomId = "DanMarkRoom";
      $("#join").click(function(){
        now.message= $("#message-input").val();
        now.sendBroadcast(now.name,now.message);
        now.showMessagesForGroup(now.roomId);
      });
      now.getGroup = function(obj){
        console.log('inside getGroup ' + obj);
        for(key in obj){
          console.log(obj[key]);
        }
      };
      now.receiveBroadcast = function(name,message){
        $("#messages").append("<br>" + name + ": " + message);
      };
      now.showAllMessages = function(messages){
        $('ul#previousMessages').innerHTML = '';
        for(msg in messages){
          console.log(messages[msg]);
          $('ul#previousMessages').append('<li>' + messages[msg] + '</li>');
        }
      };//end now.ready
    });//end init
  }
}

MatchGame.init();


