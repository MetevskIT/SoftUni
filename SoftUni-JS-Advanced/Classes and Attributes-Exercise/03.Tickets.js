function tickets(input = [], sortingCriterion) {
    let result = [];

    class Ticket {

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    for (let destination of input) {

        let arguments = destination.split('|');

        let destinationName = arguments[0];
        let price = arguments[1];
        let status = arguments[2];
        let currTicket = new Ticket(destinationName, Number(price), status);
        result.push(currTicket)

    }
    result =(sortingCriterion=='price')? result.sort((a, b) => a[sortingCriterion]-b[sortingCriterion]):result.sort((a, b) => a[sortingCriterion].localeCompare(b[sortingCriterion]));

    return result;
}
tickets(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'price');