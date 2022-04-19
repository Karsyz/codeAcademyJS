function getReminder() {
    console.log('Water the plants.')
  }
  
  function greetInSpanish() {
    console.log("Buenas Tardes.")
  }


function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.')
}

// function sayThanks(a) {
//     let i = 0
//     while (i < a) {
//         console.log('Thank you for your purchase! We appreciate your business.')
//         i++
//     }

// }

sayThanks()
sayThanks()
sayThanks()



function sayThanks(name) {
    console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
  }
  
  sayThanks('Cole')



  function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }
  
  makeShoppingList()




  function monitorCount(rows, columns) {
    return rows * columns
  }
  
  const numOfMonitors = monitorCount(5,4)
  
  console.log(numOfMonitors)



  function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows,columns) {
    return monitorCount(rows,columns) * 200
  }
  
  const totalCost = costOfMonitors(5,4)
  
  console.log(totalCost)




  const plantNeedsWater = day => day === 'Wednesday'


  