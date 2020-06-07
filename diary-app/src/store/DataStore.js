import { observable, action } from 'mobx';

class DataStore {

    constructor(Data) {
        console.log('loading data')
    };

    temp = observable.box(8888);

    dataObject = observable({something: "somethingElse"});
    
    updateTemp = action(() => {
        const x = this.temp;
        this.temp.set(x / 2);
        console.log(this.dataObject.value);
        this.dataObject.something = 'something';
    });
    
}

export default new DataStore();