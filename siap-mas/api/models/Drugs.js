/**
 * Drugs.js
 *
 * 
 */

module.exports = {

    attributes: {
  
      //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
      //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
      //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
  
      Code: {
        type: 'string',
        required: true,
        unique: true,
        maxLength: 10,
        example: '04675'
      },

      Product: {
        type: 'string',
        required: true,
        maxLength: 200,
        example: 'Amoxicilin 1 Mg'
      },

      
      Stock: {
        type: 'number',
        required: true,
      },

      
      Unit: {
        type: 'string',
        required: true,
        maxLength: 5
      },
      
      Price: {
        type: 'number',
        required: true,
      },

      
      Total: {
        type: 'number',
        required: true,
      },

      
      ExpDate: {
        type: 'string',
        required: true,
        maxLength: 50,
      },

      
      Description: {
        type: 'string',
        required: false,
        maxLength: 200,
      },
      
  
  
      //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
      //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
      //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
      // n/a
  
      //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
      //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
      //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
      // n/a
  
    },
  
  
  };
  