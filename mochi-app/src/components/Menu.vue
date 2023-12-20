<template>
    <MDBNavbar expand="lg" light bg="light" container position="sticky">
        <MDBNavbarBrand href="/">
            <img class="w-auto" style="height: 4rem;" src="../assets/img/logo2.png" alt="Your Company" />
        </MDBNavbarBrand>
        <MDBNavbarToggler
            @click="collapse1 = !collapse1"
            target="#navbarSupportedContent">
        </MDBNavbarToggler>
        <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
            <MDBNavbarNav class="mb-2 mb-lg-0"></MDBNavbarNav>
            <MDBNavbarNav style="margin-right: 0px !important">
                <MDBNavbarItem v-for="text in menu" :key="text" :to="text.to" :active="text.active">
                    {{ text.name }}
                </MDBNavbarItem>
                <MDBNavbarItem>
                    <MDBDropdown class="nav-item" v-model="dropdown1" v-if="loggedIn">
                        <MDBDropdownToggle
                            tag="a"
                            class="nav-link px-3"
                            @click="dropdown1 = !dropdown1">
                            <strong>{{ username }}</strong>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
                            <MDBDropdownItem href="#" @click="logout">Cerrar sesion</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    <MDBIcon icon="user-circle" v-else @click="login" class="px-3 py-1 " size="2x" />
                </MDBNavbarItem>
            </MDBNavbarNav>
        </MDBCollapse>
    </MDBNavbar>
  </template>
<script setup>
import {
    MDBBtn,
    MDBIcon,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from "mdb-vue-ui-kit";
import { ref,onBeforeMount } from "vue";
import {GoogleAuthProvider , signInWithPopup, getAuth,signOut} from 'firebase/auth'

const props = defineProps({
    activoHitoria: Boolean,
    activoConocenos: Boolean,
    activoMochitelleva: Boolean,
})

const googleprovider = new GoogleAuthProvider()
const auth = getAuth()

const collapse1 = ref(false);
const dropdown1 = ref(false);
const loggedIn = ref(false)
const username = ref('')

onBeforeMount( () =>  {
    if(localStorage.getItem('token') != undefined){
        loggedIn.value = true
        username.value = localStorage.getItem('username')
    }
})

const login = () => {
    signInWithPopup(auth, googleprovider)
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

const menu = [
    {name: 'Conocenos', to: '/Conocenos', active: props.activoConocenos},
    {name: 'Historia contigo', to: '/historia-contigo', active: props.activoHitoria},
    {name: 'Mochi te lleva', to: '/mochi-te-lleva', active: props.activoMochitelleva},
]
</script>