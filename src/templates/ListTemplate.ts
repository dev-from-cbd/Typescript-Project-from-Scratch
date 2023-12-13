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

    //render(fullList: FullList): void {
    render(fullList: Full): void {
        this.clear()

        fullList.list.forEach(item => {
            const li = document.createElement('li') as HTMLLIElement
            li.className = 'item'

            const check = document.createElement('input') as HTMLInputElement
            check.type = 'checkbox'
            check.id = item.id
        })
    }
}