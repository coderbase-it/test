
let faker = require('faker');
var db = { "clients":[ ], "orders": []};


let generateClients = () => {

  for (let id = 0; id < 30; id++) {
    let name = faker.company.companyName();
    let email = faker.internet.email();
    const State = [
      'Active',
      'Inactive'
    ]
    let randomState = faker.random.arrayElement(State)


    db.clients.push({
      "id": id,
      "name": name,
      "email": email,
      "state": randomState
    });
  }

  return db.clients
}


let generateOrders = (clients) => {

  clients.forEach((client, index) => {
    if (client.state === "Active") {

      const State = [
         'Cancel',
         'Option',
         'Confirm'
        ]
      const randomState = faker.random.arrayElement(State)
      const Type =  [
         'Dev',
        'Coaching'
      ]
      const randomType = faker.random.arrayElement(Type)

      let duration = faker.random.number({
        'min': 1,
        'max': 50
      });
      let priceDutyFree = faker.random.number({
        'min': 100,
        'max': 2000
      });
      let comment = faker.lorem.paragraph();


      db.orders.push({
        "id": index,
        "clientId":  client.id,
        "state": randomState,
        "type": randomType,
        "duration": duration,
        "priceDutyFree": priceDutyFree,
        "comment": comment
      })
    }
  })
}


const clients = generateClients();
generateOrders(clients);

console.log(JSON.stringify(db))
