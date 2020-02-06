import {validateEmail} from './helpers.js';

let validId = [];
let invalidId = [];


export default function validateUsers(user){
    user.forEach(element => {
        const {traineeEmail,reviewerEmail} = element;
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
            validId.push([traineeEmail, reviewerEmail]);
        }
        else{
            invalidId.push([traineeEmail,reviewerEmail]);
        }   
    }); 
    console.log(':::::::::::::::::::::::::Valid Users:::::::::::::::::::::::::::\n\n',validId);
    console.log('Count : '+validId.length+'\n\n');
    console.log(':::::::::::::::::::::::::Invalid Users:::::::::::::::::::::::\n',invalidId);
    console.log('Count : '+invalidId.length+'\n\n');    
}
