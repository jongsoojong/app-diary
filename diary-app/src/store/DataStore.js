import { observable, action } from 'mobx';
import axios from 'axios';

class DataStore {
    constructor(Data) {
        console.log('loading data');
    }

    usersObject = observable({});

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

    fetchUsers = action(() => {
        console.log('fetching users');

        axios({
            "method": "get",
            "url": "http://localhost:5000/people",
            "headers": {
                crossdomain: true
            }
        }).then((response) => {
            console.log(response.data);

            if(response.data) {
                this.usersObject = response.data;
            }
        });
    });

}

export default new DataStore();
