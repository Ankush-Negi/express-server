import * as bycrpt from 'bcrypt';
import UserRepository from '../repositories/user/UserRepository';
import config from '../config/configuration';

const userRepository = new UserRepository();
export default async function seedData() {

    const saltrounds = 10;
    const { password } = config;

    const hashPassword = await bycrpt.hash(password, saltrounds);

    const User = {
        name: 'Ankush Negi',
        email: 'ankush.negi@successive.tech',
        address: 'Noida',
        role: 'head-trainer',
        dob: new Date('1998-04-25'),
        mobileNumber: 9557126356,
        hobbies: ['football'],
        password: hashPassword
    };
    const count = await userRepository.count();
        if (count === 0) {
            console.log('User is seeded');
            return userRepository.create(User);
        }
        else {
            console.log('User is already seeded');
        }
}