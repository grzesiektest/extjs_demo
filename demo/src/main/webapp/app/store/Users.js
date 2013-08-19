var writer = new Ext.data.JsonWriter({
    type: 'json',
    encode: false,
    listful: true,
    writeAllFields: true,
    returnJson: true
});

var reader = new Ext.data.JsonReader({
    totalProperty: 'total',
    successProperty: 'success',
    idProperty: 'id',
    root: '',
    messageProperty: 'message' 
});

var proxy = new Ext.data.HttpProxy({
    reader: reader,
    writer: writer,
    type: 'ajax',
    api: {
        read: '/demo/rest/User/Get',
        create: '/demo/rest/User/Create',
        update: '/demo/rest/User/Update',
        destroy: '/UserInfo/Delete'
    },
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
});

Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad: true,
    paramsAsHash: false,
    proxy: proxy
});