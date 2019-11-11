import firebase from 'firebase/app';
import 'firebase/remote-config';
import 'firebase/analytics'

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
};

firebase.initializeApp(config);

export const firebaseAnalytics = firebase.analytics();
export const firebaseRemoteConfig = firebase.remoteConfig();

firebaseRemoteConfig.settings = {
  minimumFetchIntervalMillis: 60000,
};

firebaseRemoteConfig.defaultConfig = ({
    showTable: false,
    showTitle: false,
  });
