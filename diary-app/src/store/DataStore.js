import { observable, action } from 'mobx';

class DataStore {

    constructor(Data) {
        console.log('loading data')
    };

    temp = observable.box(8888);

    dataObject = observable({something: "somethingElse"});

    entryObject = observable({  
        entryTitle: '',
        entryContent: ''
    })

    updateObject = action(( {title, entry} ) => {
        this.entryObject.entryTitle = title;
        this.entryObject.entryContent = entry;

        console.log(this.entryObject);
    });
    
    updateTemp = action(() => {
        const x = this.temp;
        this.temp.set(x / 2);
        this.dataObject.something = 'something';
    });
    
}

export default new DataStore();