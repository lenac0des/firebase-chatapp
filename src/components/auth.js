/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 16/04/2023 - 18:45:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/04/2023
    * - Author          : ellen
    * - Modification    : 
**/
import { auth } from '../config/firebase';
// import a method below
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';


export const Auth = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const signIn = async () =>{
            try {
            await createUserWithEmailAndPassword(auth, email, password)
            } catch (err) {
                console.error(err)
            }
        };
    return ( <div>
        <input
         placeholder="Email..."
         onChange={(e) => setEmail(e.target.value)}
         />


        <input 
        placeholder="Password..."
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        />


        <button onClick={signIn}>Sign In</button>
        </div>
    );
};