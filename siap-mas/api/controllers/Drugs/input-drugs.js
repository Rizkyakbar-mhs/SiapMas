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

      }
  
    },
  
  
    fn: async function ({Code,Product,Stock,Unit,Price,Total,ExpDate,Description}) {

      var newCode = Code;
  
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

    async delete(req, res){
    try {
      var results = await Drugs.destroy({
        id: req.params.id
      });
      return res.ok(results);
    } catch (err) {
      return res.serverError(err);
    }
  }
  
  };
  