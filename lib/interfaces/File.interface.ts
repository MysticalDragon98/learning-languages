import Dialog from "./Dialog.interface";
import Footnote from "./Footnote.interface";

export default interface File {
    dialogs: Dialog[];
    footnotes: Footnote[];
    participants: string[];
}
