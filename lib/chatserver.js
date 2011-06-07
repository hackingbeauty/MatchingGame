function ChatServer(){
  if(!(this instanceof arguments.callee)){
    return new arguments.callee(arguments);
  }

  var self = this;
  
  this.createChatRoom();
  this.startChatSession(); 
}

ChatServer.prototype.createChatRoom = function(){
  console.log("executed createChatRoom");
};

ChatServer.prototype.startChatSession = function(){
  console.log("executed startChatSession");
};

module.exports = ChatServer;
