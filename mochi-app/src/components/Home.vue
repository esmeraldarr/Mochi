<template>
    <div>
        <Menu/>
        <div class="bg-image">
            <img
            src="../assets/img/fondo.jpeg"
            class="w-100 h-25"
            alt="Sample"
            />
            <div class="mask" style="
                background: linear-gradient(rgba(0, 0, 0, 0) 71%, rgba(0, 0, 0, 2))">
                <div class="d-flex justify-content-center align-items-center h-100">
                    <button class="text-white h1 scale-up-top titles "
                        style="margin-bottom: 7rem; "
                        @click="menuActivo('hatillo')">
                        Hatillo
                    </button>
                    <button class="text-white h1 scale-up-top titles"
                        style="margin-top: 0rem; "
                        @click="menuActivo('casco')">
                        Casco Historico
                    </button>
                    <button class="text-white h1 scale-up-top titles"
                        style="margin-top: 5rem; "
                        @click="menuActivo('guarica')">Guarica
                    </button>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>Ingresar</MDBCardTitle>
                                <MDBRow tag="form" class="g-3 needs-validation" novalidate @submit.prevent="login">
                                    <MDBCol md="12">
                                        <MDBInput label="Correo Electronico" type="email" v-model="email" />
                                    </MDBCol>
                                    <MDBCol md="12">
                                        <MDBInput label="Contrasena" type="password" v-model="password"/>
                                    </MDBCol>
                                    <MDBCol col="12">
                                        <MDBBtn color="primary" type="submit">Ingresar</MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </div>
        <div class="d-flex flex-wrap justify-content-center">
            <div class="p-4">imagen 1</div>
            <div class="p-4">imagen 2</div>
            <div class="p-4">imagen 3</div>
        </div>

  </div>
</template>
<script setup>
import Menu from '../components/Menu.vue'
import {ref,onMounted,reactive} from 'vue'
import { MDBCol, MDBRow, MDBContainer,
    MDBCard,MDBCardBody,MDBCardTitle,MDBBtn,
    MDBCardText,MDBInput} from 'mdb-vue-ui-kit';
import { signInWithEmailAndPassword,getAuth } from 'firebase/auth';

const auth = getAuth()
const email = ref('')
const password = ref('')
const images = ['../assets/img/mochi.jog']
const menuActivo = (dato) => {
    console.log(dato)
}
const login = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((result ) => {
        loggedIn.value = true
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        localStorage.setItem('token',token)
        localStorage.setItem('username',result.user.displayName)
        username.value = result.user.displayName
    })
    .catch((err) => {console.log(err)})
}

const logout = () => {
    console.log(dropdown1)
    signOut(auth)
    .then(() => {
        loggedIn.value = false
        localStorage.removeItem('token')
        localStorage.removeItem('username')
    })
    .catch((error) => {
        console.log(error);
    });
}

</script>


