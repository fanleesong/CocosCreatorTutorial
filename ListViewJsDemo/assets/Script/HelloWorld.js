import ListView, {AbsAdapter} from "./ListView";

const ListAdapter = require('./ListAdapter');

cc.Class({
    extends: cc.Component,

    properties: {
        listView: {
            default: null,
            type: ListView
        },
        tipLabel: {
            type: cc.Label,
            default: null
        }
    },

    start() {
        const adapter = new ListAdapter();
        adapter.setDataSet([1, 2, 3, 4, 5, 6, 7, 8, 89, 9, 12, 1243, 45, 564, 6756, 876, 7988, 789, 78987, 978, 45, 6732, 423, 42]);
        this.listView.setAdapter(adapter);
    }
});
