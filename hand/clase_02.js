// definir la clase tiketManager, el cual tendra un 


class TiketManager {
    #gain
    constructor (){
        this.events = []
        this.#gain = 0.15
    }
    getEvents() {
        console.log(this.events)
        return this.events
    
    }

    addEvents({ name, place,price,capacity,date }) {
        capacity = capacity ?? 50
        date = date ?? new Date()

        let id
        if (this.events.length===0){
            let id = 1
        } else {
            this.events[0]
            this.events[1]
            let lastEvent = this.events[this.events.length-1]

            id = lastEvent.id + 1

        }
        price = price + this.#gain * price
        
        let event = { name, place, capacity, date, id, participants: [] }
        this.events.push(event)

    
    }
}

let ticket = new TiketManager () 
ticket.addEvent({ name: 'alice in borderland', place: 'korea', price: 5,capacity: null, date: undefined })
ticket.addEvent({ name: 'hp', place: 'englad', price: 10, })
ticket.addEvent({ name: 'pokemon', place: 'japon', price: 50,capacity: 10000, date: new Date('02/07/2023') })
ticket.addEvent({ name: 'disney', place: 'miami', price: 1000,capacity: 5000, date: new Date('07/07/2023') })

ticket.getEvents()
