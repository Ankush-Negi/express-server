import {diamond, equilateral} from './patterns';
import {permissions} from './constants';
import {hasPermission,validateUsers} from './utils';

const users = 
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

diamond(6);
equilateral(4);

validateUsers(users);

console.log(hasPermission(permissions.getUsers,"trainee","read"));
console.log(hasPermission(permissions.getUsers,"trainee","all"));
console.log(hasPermission(permissions.getUsers,"trainer","write"));