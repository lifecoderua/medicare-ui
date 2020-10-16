import * as React from 'react';
import * as Realm from 'realm-web';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const app: Realm.App = new Realm.App({ id: "medicare-vvmvo" });

async function createAnonymousUser() {
  const credentials = Realm.Credentials.anonymous();
  try {
    // Authenticate the user
    const user: Realm.User = await app.logIn(credentials);
    console.log('Realm anon user created:', user);
    // `App.currentUser` updates to match the logged in user
    // assert(user.id === app.currentUser.id)
    return user
  } catch(err) {
    console.error("Failed to log in", err);
  }
}

// TODO: anonymous user auth is not supported
createAnonymousUser();


export default function TabOneScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
