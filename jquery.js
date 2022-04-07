class JQuery {
    constructor(selector) {
        this.element = document.getElementById(selector);
    }

    html(innerhtml) {
        this.elements.forEach(element => {
            element.innerHTML = innerhtml;
        })
    }

    on(event, cb) {
        this.elements.forEach(element => {
            element.addEventListener(event, cb)
        })
    }

    createElement(ele){
        this.elements.forEach(element => {
            element.createElement(ele)
        })
    }

    async ajax({ url }) {
        const res = await fetch(url);
        return await res.json();
      }
}

const $$ = (selector) => {
    return new JQuery(selector)
}

export default JQuery;