Ext.define('AM.view.user.Create', {
    extend: 'Ext.window.Window',
    alias: 'widget.usercreate',

    requires: ['Ext.form.Panel'],

    title: 'Create User',
    layout: 'fit',
    autoShow: true,
    modal: true,
    height: 200,
    width: 280,

    initComponent: function () {
        this.items = [
        {
            xtype: 'form',
            padding: '5 5 0 5',
            border: false,
            style: 'background-color: #fff;',

            items: [{
            	xtype: 'textfield',
                name: 'firstName',
                fieldLabel: 'First Name'
            },{
                xtype: 'textfield',
                name: 'lastName',
                fieldLabel: 'Last Name'
            },{
                xtype: 'numberfield',
                name: 'age',
                inputWidth: 50,
                fieldLabel: 'Age'
            },{
                xtype: 'textfield',
                name: 'email',
                fieldLabel: 'Email'
            }]
        }
        ];

        this.buttons = [
        {
            text: 'Save',
            action: 'create'
        },
        {
            text: 'Cancel',
            scope: this,
            handler: this.close
        }
        ];

        this.callParent(arguments);
    }
});

