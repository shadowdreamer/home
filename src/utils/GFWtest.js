export default class {
    constructor() {
        return new Promise((resove, reject) => {
            const img = new Image()
            img.src = 'https://lh3.googleusercontent.com/-5hRUWqlfk6Y/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rc_gVgfoyi72aFn65AuchWxlYFFGw.CMID/s32-c-mo/photo.jpg'
            img.onload = () => resove()
            img.onerror = () => reject()
        })
    }
}