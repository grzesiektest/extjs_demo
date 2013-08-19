Ext.define('AM.view.user.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    title: 'Users',
    store: 'Users',

    dockedItems: {
        itemId: 'toolbar',
        xtype: 'toolbar',
        dock: 'top',
        height: 80,
        items: [{
            xtype: 'button',
            height: 30,
            text: 'Add User',
            action: 'showCreate'
        }]
    },
    
    viewConfig: {
        emptyText: 'No users'
    },
    
    columns: [
	    { header: 'First Name', dataIndex: 'firstName', flex: 1 },
	    { header: 'Last Name', dataIndex: 'lastName', flex: 1 },
	    { header: 'Age', dataIndex: 'age', flex: 1 },
	    { header: 'Email', dataIndex: 'email', flex: 1 }
    ]
});


