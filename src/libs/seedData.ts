import UserRepository from '../repositories/user/UserRepository';

const userRepository = new UserRepository();
export default function seedData() {

    const User = {
        name: 'Ankush Negi',
        email: 'ankush.negi@successive.tech',
        address: 'Noida',
        role: 'head-trainer',
        dob: new Date('1998-04-25'),
        mobileNumber: 9557126356,
        hobbies: ['football']
    };
    userRepository.count().then((count) => {
        if (count === 0) {
            console.log('User is seeded');
            return userRepository.create(User);
        }
        else {
            console.log('User is already seeded');
        }
    });
}