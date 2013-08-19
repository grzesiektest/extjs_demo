Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    stores: ['Users'],
    models: ['User'],
    views: ['user.Create', 'user.Edit', 'user.List'],
    refs: [
        {
            ref: 'usersPanel',
            selector: 'panel'
        }
    ],

    init: function() {
        this.control({
            'viewport > userlist dataview': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            },
            
            'usercreate button[action=create]': {
                click: this.createUser
            },
            
            'button[action=showCreate]': {
                click: this.showCreateUser
            }
        });
    },

    showCreateUser: function(grid, record) {
        var create = Ext.create('AM.view.user.Create').show();
    },
    
    editUser: function(grid, record) {
        var edit = Ext.create('AM.view.user.Edit').show();
        edit.down('form').loadRecord(record);
    },

    updateUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
     
        // sync store with database
        this.getUsersStore().sync();
    },
    
    createUser: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            values = form.getValues();

        win.close();

        var store = this.getUsersStore();
        // add new record to store 
        store.add(values);
        // sync store with database
        store.sync();
    }
});

