export default class {
    constructor() {
        return new Promise((resove, reject) => {
            const img = new Image()
            img.src = 'https://www.google.com/images/logo.png'
            img.onload = () => resove()
            img.onerror = () => reject()
        })
    }
}