// const Drugs = require("../../models/Drugs");

module.exports = {


    friendlyName: 'Drugs',
  
    inputs: {

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
            maxLength: 30,
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
  
    },
  
  
    exits: {
  
      success: {
        description: 'The Drugs has been successfully created.',
      },
  
      badCombo: {
        description: `The drugs can't created.`,
        // responseType: 'unauthorized'
        // ^This uses the custom `unauthorized` response located in `api/responses/unauthorized.js`.
        // To customize the generic "unauthorized" response across this entire app, change that file
        // (see api/responses/unauthorized).
        //
        // To customize the response for _only this_ action, replace `responseType` with
        // something else.  For example, you might set `statusCode: 498` and change the
        // implementation below accordingly (see http://sailsjs.com/docs/concepts/controllers).
      }
  
    },
  
  
    fn: async function ({Code,Product,Stock,Unit,Price,Total,ExpDate,Description}) {

      var newCode = Code;
  
      // Look up by the email address.
      // (note that we lowercase it to ensure the lookup is always case-insensitive,
      // regardless of which database we're using)
      var newDrugsRecord = await Drugs.create(_.extend({
        Code: newCode,
        Product,
        Stock,
        Unit,
        Price,
        Total,
        ExpDate,
        Description
      }))
      .intercept('E_UNIQUE', 'Code Has Been Used')
      .intercept({name: 'UsageError'}, 'invalid')
      .fetch();
  
    }
  
  };
  