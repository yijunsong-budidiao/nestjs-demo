export declare class DashGateway {
    server: any;
    private clientsArr;
    handleConnection(client: any): void;
    handleDisconnect(client: any): void;
    addCart(client: any, payload: any): void;
}
