export const validation = Object.freeze ({
    create: {
        id: {
            required: true,
            string: true,
            in:['body'],
            errorMessage: 'Id is required',
            custom: function(value) {
                console.log('Value', value);
                // throw {
                //     error: 'Error Occured',
                //     message: 'Message'
                // }
            }
        },
        name: {
            required: true,
            string: true,
            regex: /^[A-Za-z]+\s+[a-zA-Z]+$/,
            in: ['body'],
            errorMessage: 'Name is required',
        }
    },
    delete: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['params']
        }
    },
    get: {
        skip: {
            required: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        } 
    },
    update: {
        id: {
            required: true,
            string: true,
            in:['body'],
            errorMessage: 'Id is required'
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            errorMessage: 'Data is required',
            custom: function(dataToUpdate) {
                console.log(`${dataToUpdate} is updated`)
            },
        }
    }
});