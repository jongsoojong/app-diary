import { observable, action } from 'mobx';

class DataStore {

    constructor(Data) {
        console.log('loading data')
    };

    temp = observable.box(8888);

    dataObject = observable({something: "somethingElse"});

    entryObject = observable({  
        
    })

    updateObject = action(( {mobId, date, title, entry} ) => {
        console.log('mobId', mobId);
        console.log('date', date);
        console.log('title', title);
        console.log('entry', entry);
        
        if(!this.entryObject[mobId]) {
            this.entryObject[mobId] = {
                date: date,
                title: title,
                entry: entry
            }
        }
    });
    
    updateTemp = action(() => {
        const x = this.temp;
        this.temp.set(x / 2);
        this.dataObject.something = 'something';
    });
    
}

export default new DataStore();