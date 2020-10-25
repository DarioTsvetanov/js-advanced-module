function solveClasses() {

    class Hall {

        constructor(capacity, name) {

            this.capacity = capacity;
            this.name = name;
            this.events = [];
        }

        hallEvent(title) {

            if (this.events.includes(title)) throw new Error('This event is already added!');

            this.events.push(title);

            return 'Event is added.';
        }

        close() {

            this.events = [];

            return `${this.name} hall is closed.`
        }

        toString() {

            let output = [`${this.name} hall - ${this.capacity}`];

            if (this.events.length > 0) output.push(`Events: ${this.events.join(', ')}`);

            return output.join('\n');
        }

    }

    class MovieTheater extends Hall {

        constructor(capacity, name, screenSize) {

            super(capacity, name);

            this.screenSize = screenSize;
            this.events = [];
        }

        close() {

            return super.close().concat('Аll screenings are over.');
        }

        toString() {

            return super.toString().concat(`\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`);
        }
    }   

    class ConcertHall extends Hall {

        constructor(capacity, name) {

            super(capacity, name);

            this.events = [];
        }

        hallEvent(title, performers) {
            this.title = title;
            this.performers = performers;

            this.events.push(title);

            return super.hallEvent();
        }

        close() {

            return super.close().concat('Аll performances are over.');
        }

        toString() {

            return this.events.length > 0 ? super.toString().concat(`\nPerformers: ${this.performers.join(', ')}.`) : super.toString();
        }
    }

    return {    
        Hall,
        MovieTheater,
        ConcertHall
    }
}
let classes = solveClasses();
let hall = new classes.Hall(20, 'Main');
console.log(hall.hallEvent('Breakfast Ideas'));
console.log(hall.hallEvent('Annual Charity Ball'));
console.log(hall.toString());
console.log(hall.close()); 
console.log('--------------------------------------------------------------------------------------')
let movieHall = new classes.MovieTheater(10, 'Europe', '10m');
console.log(movieHall.hallEvent('Top Gun: Maverick')); 
console.log(movieHall.toString());
console.log('--------------------------------------------------------------------------------------')
let concert = new classes.ConcertHall(5000, 'Diamond');        
console.log(concert.hallEvent('The Chromatica Ball', ['LADY GAGA']));  
console.log(concert.toString());
console.log(concert.close());
console.log(concert.toString());

// Diamond hall - 5000\nEvents: The Chromatica Ball, \nPerformers: LADY GAGA.
// Diamond hall - 5000\nEvents: The Chromatica Ball\nPerformers: LADY GAGA.