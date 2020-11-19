// const Drugs = require("../../models/Drugs");

module.exports = {


    friendlyName: 'FindOne-Drugs',
  
    inputs: {
    
          Product: {
            type: 'string',
            required: true,
            maxLength: 200,
            example: 'Amoxicilin 1 Mg'
          }
  
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
  
  
    fn: async function ({Product}) {
      var newProduct = Product;
      var newFindOneDrug = await Drugs.findOne({
        Product
      });  
    }
  
  };
  