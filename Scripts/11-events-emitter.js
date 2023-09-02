const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id)=>{
    console.log(`Data recived: { name:'${name}', id:'${id}' } `)
});
customEmitter.on('response', ()=>{
    console.log(`Some other logic  `)
});

// emit must be later than .on 
// You also can pass other arguments and catch them in the .on functions
customEmitter.emit('response', "john", 29);
