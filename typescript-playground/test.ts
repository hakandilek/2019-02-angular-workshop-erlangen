export class Test {

    constructor(public antwort: string) {
        this.antwort = antwort
    }

    istErlangenSchoen() {
        let callback = () => {
            console.log(`Das Ergebnis lautet: ${this.antwort}`)
        }
        return callback
    }
}

export const hallo = 'test'
