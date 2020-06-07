import { observable, action } from 'mobx';

class DataStore {

    constructor(Data) {
        console.log('loading data')
    };

    temp = observable.box(8888);
    dataObject = observable({});
    
    updateTemp = action(() => {
        const x = this.temp;
        this.temp.set(x / 2);
    });
    
}

export default new DataStore();