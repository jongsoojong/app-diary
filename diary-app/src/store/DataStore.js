import { observable, action } from 'mobx';

class DataStore {
    constructor(Data) {
        console.log('loading data');
    }

    dataObject = observable({ something: 'somethingElse' });

    entryObject = observable({});

    updateObject = action(({ mobId, date, title, entry }) => {
        if (!this.entryObject[mobId]) {
            this.entryObject[mobId] = {
                date: date,
                title: title,
                entry: entry
            };
        }
    });

    updateTemp = action(() => {
        const x = this.temp;
        this.temp.set(x / 2);
        this.dataObject.something = 'something';
    });
}

export default new DataStore();
