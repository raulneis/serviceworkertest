<template>
    <div>
        <h1>Login</h1>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Email">
                <el-input placeholder="johndoe@example.com" v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input placeholder="Password..." type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="loginUser">Login</el-button>
                <el-button @click="createUser">Create</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import firebase from '../assets/scripts/firebase'

export default {
    name: 'Login',
    data () {
        return {
            loading: true,
            error: null,
            currentUser: null,
            form: {
                email: null,
                password: null
            }
        }
    },
    created() {
        this.currentUser = firebase.auth().currentUser
        firebase.auth().onAuthStateChanged((user) => {
            console.log('onAuthStateChanged', user)
            this.loading = false
            this.currentUser = user
            if (user) {
                if (!user.isAnonymous && !user.emailVerified) {
                    // user.sendEmailVerification()
                }
            } else {
                firebase.auth().signInAnonymously()
            }
        });
    },
    methods: {
        createUser() {
            this.error = null
            this.doCreateUser(this.form.email, this.form.password)
        },
        doCreateUser(email, password) {
            console.log('createUser', email, password)
            if (!email || !password) return

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    user.sendEmailVerification()
                        .then(function() {
                            console.log('email')
                        }).catch(function(error) {
                            this.error = error
                        });
                    console.log('user', user)
                })
                .catch((error) => {
                    this.error = error
                })
        },
        loginUser() {
            this.error = null
            this.doLoginUser(this.form.email, this.form.password)
        },
        doLoginUser(email, password) {
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((user) => {
                    console.log('user', user)
                })
                .catch((error) => {
                    this.error = error
                })
        },
        logout() {
            this.error = null
            firebase.auth().signOut()
                .then(function() {
                    console.log('logout')
                })
                .catch((error) => {
                    this.error = error
                })
        }
    }
}
</script>
