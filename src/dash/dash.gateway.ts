import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
// import { of } from 'rxjs';
import * as url from 'url';

@WebSocketGateway(4000, {
  cors: {
    origin: '*',
  },
})
export class DashGateway {
  @WebSocketServer() server;

  private clientsArr: any[] = [];

  handleConnection(client: any) {
    console.log('有人链接了' + client.id);
  }

  handleDisconnect(client: any) {
    console.log('断开了' + client.id);
  }

  @SubscribeMessage('addCart')
  addCart(client: any, payload: any) {
    console.log(payload);
    const myUrl: any = url.parse(client.request.url, true);

    const roomid = myUrl.query.roomid; /*获取房间号 获取桌号*/
    client.join(roomid);
    // this.server.to(roomid).emit('addCart','Server AddCart Ok');    //广播所有人包含自己

    client.broadcast.to(roomid).emit('addCart', 'Server AddCart Ok'); //不包括自己
  }
}
