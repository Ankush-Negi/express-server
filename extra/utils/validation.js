let users = 
[
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech'
    },
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: '@successive.tech'
    },
    {
        traineeEmail: 'trainee1successive.tech',
        reviewerEmail: 'reviewer1@successive.tech'
    }
]

let validCount = 0;
let invalidCount = 0;


function validateEmail(email){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) == false) 
    {
        return (false);
    }
    else{
        return (true);
    }

}




function validateUsers(users){
    const validId=[];
    const invalidId=[];
    for(var i=0; i < users.length; i++) {
        const {traineeEmail,reviewerEmail} = users[i];
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
            validCount = validCount + 1;
            validId.push([traineeEmail,reviewerEmail]);
        }
        else{
            invalidCount = invalidCount + 1;
            invalidId.push([traineeEmail,reviewerEmail]);
        }


    }   
    console.log("Valid Emails are:");
    for(i=0; i< validId.length; i++){
        console.log((i+1) + ". " + validId[i] );
    }
    console.log("Invalid Emails are:");
    for(i=0; i< invalidId.length; i++){
        console.log((i+1) + ". " + invalidId[i]);
        }


    }

validateUsers(users);




