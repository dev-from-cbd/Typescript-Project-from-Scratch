import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(FullList: FullList): void,
}