import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import {
  exchangeCodeAsync,
  makeRedirectUri,
  useAuthRequest,
  useAutoDiscovery,
} from 'expo-auth-session';

import { TouchableOpacity,  StyleSheet, Text, View } from 'react-native';
import Home from '../drawer/navegacion';
WebBrowser.maybeCompleteAuthSession();

//funcion para mostrar despues de autenticar
function HomeScreen({ onLogout }) {
  return (
    <View style={styles.container}>
      <Home/>
      {/* <TouchableOpacity onPress={onLogout} style={styles.customButton}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity> */}
    </View>
  );
}

export default function App() {
  // Endpoint
  const discovery = useAutoDiscovery(
    'https://login.microsoftonline.com/7b66d690-5877-4c44-9920-31c39ff068b7/v2.0',
  );
  const redirectUri = makeRedirectUri({
    scheme: undefined,
    path: 'auth',
  });
  const clientId = '8a1b0d3c-021c-454a-8751-b4deda1af614';

  // We store the JWT in here
  const [token, setToken] = React.useState(null);

  // Request
  const [request, , promptAsync] = useAuthRequest(
    {
      clientId,
      scopes: ['openid', 'profile', 'email', 'offline_access'],
      redirectUri,
    },
    discovery,
  );


  const handleLogout = async () => {
    setToken(null); 

    const logoutUrl = 'https://login.microsoftonline.com/7b66d690-5877-4c44-9920-31c39ff068b7/oauth2/v2.0/logout';

    await WebBrowser.openBrowserAsync(logoutUrl);
  };
  
//condicional para mostrar la vista si el token no es null 
if (token) {
  return <HomeScreen onLogout={handleLogout} />;
}

  return (
    <TouchableOpacity
          disabled={!request}
          onPress={() => {
            promptAsync().then((codeResponse) => {
              if (request && codeResponse?.type === 'success' && discovery) {
                exchangeCodeAsync(
                  {
                    clientId,
                    code: codeResponse.params.code,
                    extraParams: request.codeVerifier
                      ? { code_verifier: request.codeVerifier }
                      : undefined,
                    redirectUri,
                  },
                  discovery,
                ).then((res) => {
                  setToken(res.accessToken);
                });
              }
            });
          }}
          style={styles.customButton}
        >
          <Text style={styles.buttonText}>Iniciar Sesion</Text>
    </TouchableOpacity>

  );
}
const styles = StyleSheet.create({
  customButton: {
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 13,
    alignItems: 'center',
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontSize:17,
  },
  container:{
    backgroundColor: '#fff',
    flex:1,
    width: '100%',
    padding:10,
    
  },
});
