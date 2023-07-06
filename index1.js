//Defining Ticket by class 
class Ticket {
    constructor(name, cost) {
      this.name = name;
      this.cost = cost;
      this.quantity = 0;
    }
  
    calculateTotal() {
      return this.quantity * this.cost;
    }
  }
  //Defining Cart by class
  class Cart {
    constructor() {
      this.tickets = [];
    }
  
    addTicket(ticket) {
      this.tickets.push(ticket);
    }
  
    removeTicket(ticket) {
      const index = this.tickets.indexOf(ticket);
      if (index !== -1) {
        this.tickets.splice(index, 1);
      }
    }
}
  
    
  
  // Making the 'number' input fields and total display elements work on the interface
  const numberInputs = document.querySelectorAll('.cart-item input[type="number"]');
  const totalDisplays = document.querySelectorAll('.cart-item span[id^="ticket-total"]');
  
  
  const ticket1 = new Ticket("Dimensions 2021 (free)", 0);
  const ticket2 = new Ticket("LoveFest (R250)", 250);
  const ticket3 = new Ticket("Fintech Fusion (free)", 0);
  const ticket4 = new Ticket("Great Minds (R250)", 250);
  const ticket5 = new Ticket("Startup Spark (free)", 0);
  const ticket6 = new Ticket("TechExpo (R250)", 250);
  const ticket7 = new Ticket("Code Empower (R250)", 250);
  const ticket8 = new Ticket("Women In Tech (free)", 0);
  const ticket9 = new Ticket("Powered By AI (free)", 0);
  
  
  const cart = new Cart();
  
  // Updating tickets totals
  numberInputs.forEach((input, index) => {
    const ticket = getTicketByIndex(index);
  
    input.addEventListener('input', function (event) {
      const newQuantity = parseInt(event.target.value);
      ticket.quantity = newQuantity;
      const newTotal = ticket.calculateTotal();
  
      totalDisplays[index].textContent = newTotal;
  
      updateTotal();
    });
  });
  
  // 
  function getTicketByIndex(index) {
    switch (index) {
      case 0:
        return ticket1;
      case 1:
        return ticket2;
      case 2:
        return ticket3;
      case 3:
        return ticket4;
      case 4:
        return ticket5;
      case 5:
        return ticket6;
      case 6:
        return ticket7;
      case 7:
        return ticket8;
      case 8:
        return ticket9;
  
      default:
        return null;
    }
  }
  
//Adding Totals using an array
  const ticketTotals = [];

  numberInputs.forEach((input, index) => {
    const ticket = getTicketByIndex(index);
  
    input.addEventListener('input', function (event) {
      const newQuantity = parseInt(event.target.value);
      ticket.quantity = newQuantity;
      const newTotal = ticket.calculateTotal();
  
      totalDisplays[index].textContent = newTotal;
  
      ticketTotals[index] = newTotal; 
  
      updateTotal();
    });
  });
  function updateTotal() {
    const grandTotal = ticketTotals.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = grandTotal;
  }
    
//Checkout
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', function () {
  
  window.location.replace('./payment.html');
});
