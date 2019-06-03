
let faker = require('faker');

let generateOrders = (clients) => {
  let orders = [];

  clients.forEach((client, index) => {
    if (client.state === "ACTIVE") {
      let c = { id: client.id, name: client.name }
      const State = {
        CANCEL: 'Cancel',
        OPTION: 'Option',
        CONFIRM: 'Confirm'
      }
      const randomState = faker.random.arrayElement(Object.getOwnPropertyNames(State))
      const Type = {
        DEV: 'Dev',
        COACHING: 'Coaching'
      }
      const randomType = faker.random.arrayElement(Object.getOwnPropertyNames(Type))

      let duration = faker.random.number({
        'min': 1,
        'max': 50
      });
      let priceDutyFree = faker.random.number({
        'min': 100,
        'max': 2000
      });
      let comment = faker.lorem.paragraph();


      orders.push({
        "id": index,
        "client": c,
        "state": randomState,
        "type": randomType,
        "duration": duration,
        "priceDutyFree": priceDutyFree,
        "comment": comment
      })
    }
  })

  return orders
}

let generateClients = () => {
  let clients = [];

  for (let id = 0; id < 30; id++) {
    let name = faker.company.companyName();
    let email = faker.internet.email();
    const State = {
      ACTIVE : 'Active',
      INACTIVE : 'Inactive'
    }
    let randomState = faker.random.arrayElement(Object.getOwnPropertyNames(State))


    clients.push({
      "id": id,
      "name": name,
      "email": email,
      "state": randomState
    });
  }
  return clients
}
let generate = () => {
  const clients = generateClients();
  const orders = generateOrders(clients);


  return { "orders": orders, "clients": clients }
}

module.exports = generate
