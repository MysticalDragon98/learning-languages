import { Server } from "@mysticaldragon/unete";
import { $HTTP_PORT } from "../env";
import { Endpoints } from "./endpoints";
//* Imports

export async function initHTTPServer () {
    const server = new Server({
        endpoints: Endpoints,
        port: $HTTP_PORT
    });

    //* Plugins

    await server.listen();
}