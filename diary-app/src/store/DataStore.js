import { observable, action } from 'mobx';

class DataStore {

    constructor(Data) {
        console.log('loading data')
    };

    temp = observable.box(8888);
    dataObject = observable({});
    
    updateTemp = action(() => {
        this.dataObject = {
            value: 'something'
        };
        console.log('JONG', this.dataObject );
    });
    
}

export default new DataStore();