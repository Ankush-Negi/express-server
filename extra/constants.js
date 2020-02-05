 const permissions = {
    'getUsers': {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: ['head-trainer','trainer'],
        }   
    }
export {permissions};