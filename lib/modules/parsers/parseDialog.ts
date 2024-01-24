import Dialog from "../../interfaces/Dialog.interface";

export default function parseDialog (str: string): Dialog {
    return <any>{ .../(?<speaker>.+?)：(?<dialog>.+)$/.exec(str)?.groups } as Dialog;
}
