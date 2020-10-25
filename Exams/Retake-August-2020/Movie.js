class Movie {

    constructor(movieName, ticketPrice) {

        this.movieName = movieName;
        this.ticketPrice = ticketPrice;
        this.screenings = [];
    }

    newScreening(date, hall, description) {

        let screening = this.screenings.find(obj => obj.date == date && obj.hall == hall);

        if (screening) throw new Error(`Sorry, ${hall} hall is not available on ${date}`)

        this.screenings.push({
            date,
            hall,
            description
        });

        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets) {

        let screening = this.screenings.find(obj => obj.date == date && obj.hall == hall);

        if (!screening) throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);

        if (this.totalProfit) this.totalProfit += Number(this.ticketPrice) * soldTickets;
        else this.totalProfit = Number(this.ticketPrice) * soldTickets;

        if (this.totalSoldTickets) this.totalSoldTickets += soldTickets;
        else this.totalSoldTickets = soldTickets;

        this.screenings.splice(this.screenings.indexOf(screening), 1);

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${Number(this.ticketPrice) * soldTickets}`;
    }

    toString() {

        let output = [`${this.movieName} full information:`, `Total profit: ${(this.totalProfit).toFixed(0)}$`, `Sold Tickets: ${(this.totalSoldTickets).toFixed(0)}`]; 

        if (this.screenings.length > 0) {

            output.push('Remaining film screenings:');

            this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));

            this.screenings.forEach(el => {

                output.push(`${el.hall} - ${el.date} - ${el.description}`);
            });
        }
        else output.push('No more screenings!');

        return output.join('\n');
    }
}

let m = new Movie('Wonder Woman 1984', '10.00');
