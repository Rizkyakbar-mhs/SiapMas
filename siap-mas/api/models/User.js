module.exports = {

  attributes: {

    NIP: {
      type: 'string',
      required: true,
      unique: true,
    },

    Name: {
      type: 'string',
      required: true,
      maxLength: 200,
      example: 'Alvin'
    },

    Username: {
      type: 'string',
      required: true,
    },

    Password: {
      type: 'string',
      required: true,
    },
    
    BirthPlace: {
      type: 'string',
      required: true,
      maxLength: 50
    },

    BirthDate: {
      type: 'string',
      required: true,
      maxLength: 50
    },
    
    Address: {
      type: 'string',
      required: true,
      maxLength: 200
    },

  },

};

