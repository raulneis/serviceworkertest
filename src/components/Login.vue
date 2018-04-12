<template>
  <f7-login-screen :opened="true">
    <f7-view>
      <f7-page login-screen>
        <f7-login-screen-title>My App</f7-login-screen-title>
        <f7-list form>
          <f7-list-item>
            <f7-label>Email</f7-label>
            <f7-input type="email" placeholder="Email..."></f7-input>
          </f7-list-item>
          <f7-list-item>
            <f7-label>Contraseña</f7-label>
            <f7-input type="password" placeholder="Contraseña..."></f7-input>
          </f7-list-item>
        </f7-list>
        <f7-list>
          <f7-list-button login-screen-close>Iniciar sesión</f7-list-button>
          <f7-block-footer>Click Sign In to close Login Screen</f7-block-footer>
        </f7-list>
      </f7-page>
    </f7-view>
  </f7-login-screen>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    //
  })
}
</script>
