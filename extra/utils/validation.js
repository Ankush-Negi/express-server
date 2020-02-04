let validId = [];
let invalidId = [];
let validCount = 0;
let invalidCount = 0;
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
];
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
function validateUsers(user){
        const {traineeEmail,reviewerEmail} = user;
        if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
            validCount = validCount + 1;
            validId.push([traineeEmail, reviewerEmail]);
        }
        else{
            invalidCount = invalidCount + 1;
            invalidId.push([traineeEmail,reviewerEmail]);
        }

        
    }

users.forEach(validateUsers);
console.log("Valid Emails are:");
console.log(validId);
console.log("Count: " + validCount);
console.log("Invalid Emails are:");    
console.log(invalidId);
console.log("Count: " + invalidCount);