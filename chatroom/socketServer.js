/**
 * Created by lowlowlow on 2016/12/12.
 */
// 引入socket.io模块
var socketIO = require("socket.io");
module.exports = function(httpServer){

    var socketServer = socketIO.listen(httpServer);


    var onLineUsers = {};
    var onLineCounts = 0;

    socketServer.on("connect",function(socket){
        console.log("有新的客户端连接:" + socket.id);

        socket.on("message",function(data){
            // 提取收到的消息的类型
            var type = data.type;
            if(type=="101"){
                whenLogin(socket,data);
            }else if(type=="201"){
                publicMsg(socket,data);
            }
        });

        socket.on("disconnect",function(data){
            onLineCounts--;

            var msg = {
                type: "102",
                nickname: socket.nickname,
                counts:onLineCounts
            };
            socket.broadcast.send(msg);
        });

    });

    function publicMsg(socket,data){
        // 群发该消息:先构造消息的数据结构
        var msg = {
            type: "201",
            content: data.content,
            nickname: socket.nickname
        };
        socket.broadcast.send(msg);

        msg.type = "200";
        socket.send(msg);
    }

    // 处理用户登录的方法
    function whenLogin(socket,data){

        onLineCounts++;

        socket.nickname=data.nickname;
        socket.head=data.headpic;
        socket.gens=data.gender;

        var msg = {
            type: "101",
            nickname:socket.nickname,
            headpic:socket.head,
            gender:socket.gens,
            counts:onLineCounts
        };

        socket.broadcast.send(msg);

        msg.type = "100";
        socket.send(msg);
    }

};
