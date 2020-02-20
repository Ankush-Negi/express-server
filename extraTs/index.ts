import { IUsers } from './interfaces';
import { diamond, equilateral } from './patterns';
import { hasPermission, validateUsers } from './utils';

const users: IUsers[] =
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
console.log(hasPermission('getUsers', 'trainee', 'read'));
console.log(hasPermission('getUsers', 'trainee', 'all'));
console.log(hasPermission('getUsers', 'trainer', 'write'));