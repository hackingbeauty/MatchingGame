function ChatServer(everyone){  
  if(!(this instanceof arguments.callee)){
    return new arguments.callee(arguments);
  }

  var self = this;
  
  self.init(everyone); 
  //self.createChatRoom();
  //self.startChatSession(); 
}

ChatServer.prototype.init = function(everyone){

  console.log('----------');
  console.log('inside init');
  console.log('everyone obj is ' + everyone);
  var messages = [];

  everyone.now.sendBroadcast = function(name,message){
    everyone.now.filterBroadcast(name, message, this.now.roomId);
  };

  everyone.now.filterBroadcast = function(name, message, targetRoomId){
    if(targetRoomId == this.now.roomId){
      messages.push(message);
      this.now.receiveBroadcast(name,message);
    }
  };

  everyone.now.getAllMessages = function(){
    console.log('executed getAllMessages');
    return messages;
  }

};


ChatServer.prototype.createChatRoom = function(){
  console.log("executed createChatRoom");
};

ChatServer.prototype.startChatSession = function(){
  console.log("executed startChatSession");
};

module.exports = ChatServer;
