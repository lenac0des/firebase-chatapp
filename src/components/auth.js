/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 17/04/2023 - 22:41:48
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/04/2023
    * - Author          : ellen
    * - Modification    : 
**/

import { auth, googleProvider } from '../config/firebase';
// import a method below
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
// import cookies from the univeral library
import Cookies from 'universal-cookie';

const cookies = new Cookies();



export const Auth = () => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const signIn = async () =>{
            try {
            const result = await createUserWithEmailAndPassword(auth, email, password)
            cookies.set("auth-token", result.user.refreshToken)
            } catch (err) {
                console.error(err)
            }
        };

        const signInWithGoogle = async () =>{
            try {
            await signInWithPopup(auth, googleProvider)
            } catch (err) {
                console.error(err)
            }
        };
        
        
        const logout = async () =>{
            try {
            await signOut(auth)
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


        <button onClick={signInWithGoogle}>Sign in with Google</button>

        <button onClick={logout}>Logout</button>
        </div>
    );
};