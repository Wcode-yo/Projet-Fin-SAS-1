const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];

var prompt = require("prompt-sync")();
let tickets = [];
let nextTicketId = 1;
//"Ajouter main menu function"
function main() {
    let choix;

    do {
        console.log("=========================");
        console.log("RAILWAY MANAGER");
        console.log("=========================");
        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("0. Quitter");

<<<<<<< HEAD
//utilise .trim pour le chaine character problem 

=======
>>>>>>> 97b4917f4d14f01342ee35cf46e439e7ef63628e
        choix = prompt("Votre choix : ").trim();
        if(choix != ""){
            choix = Number(choix)
        } 
        switch (choix) {
            case 1:
                afficherTrajets();
                break;

            case 2:
                Acheterunticket();
                break;

            case 3:
                Afficherlestickets();
                break;

            case 4:
                 Annulerunticket(); 
                break;

            case 5:
                Rechercherunticket(); 
                break;

            case 6:
                Filtrerlestrajets(); 
                break;

            case 7:
                Trierlestrajets();
                break;

            case 0:
                console.log("Au revoir");
                break;

            default:
                console.log("Choix invalide");
        }
    } while (choix !== 0 );
}
main() 

// fonction pour afficher les trajets 
function afficherTrajets() {
    console.log("=== TRAJETS DISPONIBLES ===");
    for (let i = 0; i < trips.length; i++) {
        console.log(
            "#" + trips[i].id + " " +
            trips[i].departure +
            " → " + trips[i].destination + "\n" +
            "Départ : " + trips[i].departureTime + "\n" +
            "Arrivée : " + trips[i].arrivalTime + "\n" +
            "Prix : " + trips[i].price + " DH\n" +
            "Places disponibles : " + trips[i].availableSeats + "\n" +
            "-------------------------"
        );
    }
    //fonction pour acheter un tiket 
}
function Acheterunticket(){ 
let selectedtrips=null ;
 let passengerName = prompt("Nom du passager : ");
 let tripId = Number(prompt("Identifiant du trajet : "));
 
for(let i= 0;i<trips.length;i++){
 if(trips[i].id===tripId){
 selectedtrips=trips[i]
 break;
}
}if (selectedtrips === null) {
console.log("Trajet introuvable.");
return;
}
if(selectedtrips.availableSeats<=0){ 
console.log ("Train complet.")
return;}
let seatNumber = 1;
let seatTaken;
do {
    seatTaken = false;

    for (let i = 0; i < tickets.length; i++) {
        if (
            tickets[i].tripId === selectedtrips.id &&
            tickets[i].seatNumber === seatNumber
        ) {
            seatTaken = true;
            break;
        }
    }
    if (seatTaken === true) {
        seatNumber++;
    }
} while (seatTaken === true);

let ticket = {
    id: nextTicketId,
    passengerName: passengerName,
    tripId: selectedtrips.id,
    seatNumber,
    price: selectedtrips.price,
    seatNumber: seatNumber
     
};
tickets.push(ticket);
selectedtrips.availableSeats--;
nextTicketId++;

 console.log("Ticket acheté avec succès.");
    console.log("Ticket #" + ticket.id);
    console.log("Passager : " + ticket.passengerName);
    console.log("Trajet : " +
                selectedtrips.departure +
                " → " +
                selectedtrips.destination
        
    );
    console.log("Place : " + ticket.seatNumber);
    console.log("Prix : " + ticket.price + " DH");
<<<<<<< HEAD
 //Fonction pour afficher les tickets
=======
 
>>>>>>> 97b4917f4d14f01342ee35cf46e439e7ef63628e
}function Afficherlestickets() {
    console.log("=== TICKETS ===");
    if (tickets.length === 0) {
        console.log("Aucun ticket enregistré.");
        return;
    }

    for (let i = 0; i < tickets.length; i++) {

        let trip = null;
       for (let j = 0; j < trips.length; j++) {

            if (trips[j].id === tickets[i].tripId) {
                trip = trips[j];
                break;
    }
    }

        console.log(
            "Ticket #" + tickets[i].id + "\n" +
            "Passager : " + tickets[i].passengerName + "\n" +
            "Trajet : " + trip.departure + " → " + trip.destination + "\n" +
            
            "Place : " + tickets[i].seatNumber + "\n" +
            "Prix : " + tickets[i].price + " DH\n" +
            "-------------------------"
        );
    }
}
<<<<<<< HEAD
//fonction pour annuler le ticket 
function  Annulerunticket(){

let annul=Number(prompt("Identifiant du ticket :"))

for(let i=0;i<tickets.length;i++){
 
     if(tickets[i].id===annul){
     if(tickets.splice(i, 1)){
     console.log("Ticket annulé avec succès.")

     }
break; 


 }



}

}
=======
>>>>>>> 97b4917f4d14f01342ee35cf46e439e7ef63628e
