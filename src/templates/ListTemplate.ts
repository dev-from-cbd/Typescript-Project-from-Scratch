import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(FullList: FullList): void,
}

export default class ListTemplate implements DOMList {
    ul: HTMLUListElement;
    private constructor() {
        this.ul = document.getElementById('listItems') as HTMLUListElement;
    }

    clear(): void {
        this.ul.innerHTML = '';
    }

    render(fullList: Full): void {
        this.clear()

        fullList.list.forEach(item => {
        
        })
    }
}