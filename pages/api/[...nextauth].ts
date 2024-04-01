import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";

export default NextAuth({
    providers:[
        Credentials({
            id:'Credentials',
            name:'Credentials',
            credentials:{
                email:{
                    label:'Email',
                    type:'text',
                }
            }
        })
    ]
})