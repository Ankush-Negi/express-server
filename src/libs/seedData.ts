import UserRepository from '../repositories/user/UserRepository';

const userRepository = new UserRepository;
export default function seedData() {

const User = {
    name: 'Ankush Negi',
    email: 'ankush.negi@successive.tech',
    address: 'Noida',
    dob: new Date('1998-04-25'),
    mobileNumber: 9557126356,
    hobbies: ['football'],
    password: 'AnkushNegi'
}
    userRepository.count().then((count) => {
        if(count === 0){
            return userRepository.create(User);
        }
    });
}